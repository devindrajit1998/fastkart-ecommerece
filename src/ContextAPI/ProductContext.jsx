import { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import end ---------------------------------------------------------------------------->

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // ----------------------------------------------------------------------------------------
  // ----------------------------------- Common States ------------------------------------->
  // ----------------------------------------------------------------------------------------
  // global store data ---------------------->
  // API end points and base url
  // State to store the category data-------->

  const [categories, setCategories] = useState([]);

  const AllCategory = categories;

  const [allData, setAllData] = useState([]);
  // console.log("all data ==================>", allData)
  // for modal management ------------------->
  const [openModal, setOpenModal] = useState(false);

  // foer banner management------------------>

  const [banner, setBanner] = useState([]);

  // const [getId, setGetId] = useState();
  const [modalData, setModalData] = useState([]);

  // for category filter ------------------- >
  const [shopData, setShopData] = useState([]);

  // for add to cart ------------------------>
  const [cart, setCart] = useState([]);

  // for add to wishlist -------------------->
  const [wish, setWish] = useState([]);

  // to pass id ----------------------------->
  const { id } = useParams();

  // to manage cart quantity stage ---------->
  const [quantity, setQuantity] = useState();

  // to manage cart quantity stage ---------->
  const [total, setTotal] = useState(0);

  // to get cupon data ---------------------->
  const [cupon, setCupon] = useState([]);

  const [cuponDiscount, setCuponDiscount] = useState(0);

  // for featured data ---------------------->
  const [featured, setFeatured] = useState([]);

  // for on sale data ----------------------->
  const [sale, setSale] = useState([]);
  // for on search data --------------------->
  const [searchQuery, setSearchQuery] = useState("");

  // ----------------------------------------------------------------------------------------
  // ----------------------------------- Common States ------------------------------------->
  // ----------------------------------------------------------------------------------------
  //*****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------------- API States -------------------------------------->
  // ----------------------------------------------------------------------------------------
  useEffect(() => {
    // const baseURL = 'http://localhost:3001/';
    const baseURL = "https://fastkart-api.onrender.com/";
    const categoriesEndpoint = "categories";
    const shopDataEndpoint = "StoreData";
    const bannerDataEndpoint = "bannerdata";
    const couponCodesEndpoint = "CouponCodes";

    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch(baseURL + categoriesEndpoint);
        const shopDataResponse = await fetch(baseURL + shopDataEndpoint);
        const bannerDataResponse = await fetch(baseURL + bannerDataEndpoint);
        const couponCodesResponse = await fetch(baseURL + couponCodesEndpoint);

        if (
          !categoriesResponse.ok ||
          !shopDataResponse.ok ||
          !bannerDataResponse.ok ||
          !couponCodesResponse.ok
        ) {
          throw new Error("One or more network responses were not ok.");
        }

        const categoriesData = await categoriesResponse.json();
        const shopData = await shopDataResponse.json();
        const bannerData = await bannerDataResponse.json();
        const couponCodes = await couponCodesResponse.json();

        setCategories(categoriesData);
        setAllData(shopData);
        setBanner(bannerData);
        setCupon(couponCodes);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, []);
  // ----------------------------------------------------------------------------------------
  // ------------------------------------- API States -------------------------------------->
  // ----------------------------------------------------------------------------------------
  //*****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------- Basic Functions Start --------------------------------->
  // ----------------------------------------------------------------------------------------
  // Open Quick Modal Start -------------->
  const ToggleModal = (id) => {
    setOpenModal(!openModal);
    FindModalData(id);
  };

  // <---------------- Open Quick Modal End

  // function to find the id ------------->

  const FindModalData = (id) => {
    const MData = allData.find((item) => {
      return item.id === id;
    });
    setModalData(MData);
  };

  useEffect(() => {}, [modalData]);
  // <---------------------------- function to find the id
  //******************************************************
  // add to cart function ------------------------------->

  const addCart = (id) => {
    const findDuplicate = cart.find((items) => items.id === id);
    if (!findDuplicate) {
      const filterData = allData.find((items) => items.id === id);
      const newData = { ...filterData, quantity: 1 };
      setCart((curElem) => [...curElem, newData]);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  };

  useEffect(() => {
    // get from localStorage---->
    const localCart = JSON.parse(localStorage.getItem("cartData"));
    if (localCart && localCart.length > 0) {
      setCart(localCart);
    }
  }, []);

  useEffect(() => {
    console.log("cart item", cart);
    // save to localStorage ---->
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

  // <-------------------------------- add to cart function
  // ******************************************************
  // cupon management function --------------------------->
  const handleOnChange = (event) => {
    setCupon(event.target.value);
  };

  const matchCupon = (code) => {
    const findCupon = cupon.find((item) => item.code === code);
    if (!findCupon) {
      console.log("cupon not matched");
      setCuponDiscount(0);
    } else {
      console.log("cupon succesfully matched");
      const cuponDiscount = findCupon.value;
      setCuponDiscount(cuponDiscount);
    }
  };

  // <--------------------------- cupon management function
  // ******************************************************
  // cart total price management function ---------------->
  const getSubtotal = () => {
    const subTotal = cart.reduce((acc, obj) => {
      return acc + obj.price * obj.quantity;
    }, 0);
    const updateCart = subTotal.toFixed(2);
    setTotal(updateCart);
  };

  const totalSave = cart.reduce((acc, obj) => {
    return acc + (obj.price * obj.quantity - obj.offerPrice * obj.quantity);
  }, 0);
  const cuponDis = (total * cuponDiscount) / 100;
  const offerDiscount = cuponDis.toFixed(2);
  const finalTotalSave = (totalSave + cuponDis).toFixed(2);
  const checkOutPrice = (total - finalTotalSave).toFixed(2);

  useEffect(() => {
    getSubtotal();
  });

  // <---------------- cart total price management  function
  // *******************************************************
  // cart quantity management function -------------------->

  const incr = (id) => {
    const quantityIncr = cart.map((curElem) =>
      curElem.id === id
        ? { ...curElem, quantity: curElem.quantity + 1 }
        : curElem
    );
    setCart(quantityIncr);
    getSubtotal();
  };

  const decr = (id) => {
    const quantityDecr = cart.map((curElem) =>
      curElem.id === id
        ? { ...curElem, quantity: curElem.quantity - 1 }
        : curElem
    );
    setCart(quantityDecr);
    getSubtotal();
  };

  // <-------------------- cart quantity management  function
  // ********************************************************
  // remove single function -------------------------------->
  const removeSingle = (id) => {
    const removeItem = cart.filter((items) => items.id !== id);
    setCart(removeItem);
  };

  // <-------------------------------- remove single function
  // ********************************************************
  // add to wish function ---------------------------------->
  const addWish = (id) => {
    const findWish = wish.find((item) => item.id === id);
    if (!findWish) {
      const addWishQuantity = allData.find((items) => items.id === id);
      setWish((item) => [...item, addWishQuantity]);
    } else {
      const incrWish = wish.map((item) => (item.id === id ? item : item));
      setWish(incrWish);
    }
  };

  // remove single wishlist item

  const removeSingleWish = (id) => {
    const finstWishItem = wish.filter((item) => item.id !== id);
    setWish(finstWishItem);
  };

  useEffect(() => {
    const localWish = JSON.parse(localStorage.getItem("wishItem"));
    if (localWish && localWish.length > 0) {
      setWish(localWish);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishItem", JSON.stringify(wish));
  }, [wish]);

  // <----------------------------------- add to cart function
  // ----------------------------------------------------------------------------------------
  // --------------------------------- Basic Functions End --------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------ Category Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  // manage navigation menu category filter ---------------->
  const NavFilter = (category) => {
    const filCate = allData.filter((items) => items.category === category);
    setShopData(filCate);
  };
  // <---------------- manage navigation menu category filter
  // manage sale & featured data ---------------------------->

  // feature data ----->
  const getFeature = () => {
    const newFeature = allData.filter((item) => item.featured === true);
    setFeatured(newFeature);
    localStorage.setItem("featuredData", JSON.stringify(newFeature));
  };

  useEffect(() => {
    getFeature();
  }, [allData]);

  // sale data ------->

  const saleData = () => {
    const getSale = allData.filter((item) => item.saleAvailable === true);
    setSale(getSale);
  };

  useEffect(() => {
    saleData();
  }, [allData]);

  // <---------------------------- manage sale & featured data
  // ----------------------------------------------------------------------------------------
  // ------------------------------ Category Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ----------------------------- Shop Page Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  //Category Filter Function Start --------------------->
  const filterByCategory = (category) => {
    const filteredCategory = allData.filter((item) => {
      return item.category === category;
    });
    setShopData(filteredCategory);
  };
  // <-------------------- Category Filter Function Start
  // ----------------------------------------------------------------------------------------
  // ----------------------------- Shop Page Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ----------------------------- Search Function Management ------------------------------>
  // ----------------------------------------------------------------------------------------
  const [searchData, setSearchData] = useState([]);

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter data based on search query

  const filteredData = allData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subcategory
        .toLowerCase()
        .includes(searchQuery.toLocaleLowerCase()) ||
      item.subSubcategory
        .toLowerCase()
        .includes(searchQuery.toLocaleLowerCase())
  );

  useEffect(() => {
    setSearchData(filteredData);
  }, [searchQuery]);

  // console.log("search result ------- >", filteredData);

  // ----------------------------------------------------------------------------------------
  // ----------------------------- Search Function Management ------------------------------>
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************

  return (
    <ProductContext.Provider
      value={{
        openModal,
        AllCategory,
        shopData,
        modalData,
        cart,
        allData,
        wish,
        total,
        cupon,
        checkOutPrice,
        finalTotalSave,
        cuponDiscount,
        offerDiscount,
        featured,
        sale,
        banner,
        searchQuery,
        searchData,
        ToggleModal,
        filterByCategory,
        NavFilter,
        addCart,
        addWish,
        incr,
        decr,
        removeSingle,
        handleOnChange,
        matchCupon,
        removeSingleWish,
        handleSearchInput,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductProvider = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProductProvider };
