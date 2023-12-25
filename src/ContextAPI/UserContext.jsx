import { createContext, useContext, useState, useEffect } from "react";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // for login  ----------------------------->

  const [login, setLogin] = useState("");

  const [loginCheck, setLoginCheck] = useState("");

  const [loginUser, setLoginUser] = useState({
    userName: "",
    password: "",
  });
  const [loggedUser, setLoggedUser] = useState({});

  const [session, setSession] = useState(false);

  // for signup ---------------------------->
  const [newUser, setNewUser] = useState({
    name: "",
    userName: "",
    password: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    pin: "",
    dp: "",
  });

  const [user, setUser] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  //to open modal -------------------------->

  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  //*****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------------- API States -------------------------------------->
  // ----------------------------------------------------------------------------------------
  const baseURL = "https://fastkart-api.onrender.com/";
  const UserDetailsEndpoint = "UserDetails";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDetailsResponse = await fetch(baseURL + UserDetailsEndpoint);

        if (!userDetailsResponse.ok) {
          throw new Error("One or more network responses were not ok.");
        }

        const userDetails = await userDetailsResponse.json();
        setUser(userDetails);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  // const createData = async (newUser) => {
  //   try {
  //     const createResponse = await fetch(baseURL + UserDetailsEndpoint, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     });

  //     if (!createResponse.ok) {
  //       throw new Error("Failed to create data.");
  //     }
  //   } catch (error) {
  //     console.error("Error creating data:", error);
  //   }
  // };

  // const updateData = async (id, newPass) => {
  //   try {
  //     const updateResponse = await fetch(
  //       baseURL + UserDetailsEndpoint + `/${id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(newPass),
  //       }
  //     );

  //     if (!updateResponse.ok) {
  //       throw new Error("Failed to update data.");
  //     }
  //   } catch (error) {
  //     console.error("Error updating data:", error);
  //   }
  // };

  const deleteData = async (id) => {
    try {
      const deleteResponse = await fetch(
        baseURL + UserDetailsEndpoint + `/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!deleteResponse.ok) {
        throw new Error("Failed to delete data.");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // ----------------------------------------------------------------------------------------
  // ------------------------------------- API States -------------------------------------->
  // ----------------------------------------------------------------------------------------
  //*****************************************************************************************
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // -------------------------------- Login Data Management -------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ---------------------------------- Modal Management ----------------------------------->
  // ----------------------------------------------------------------------------------------

  const ToggleModal = () => {
    setOpen(!open);
  };
  const TogglePassword = () => {
    setOpenPassword(!openPassword);
  };

  // ----------------------------------------------------------------------------------------
  // ---------------------------------- Modal Management ----------------------------------->
  // ----------------------------------------------------------------------------------------
  const CheckAuth = () => {
    if (session === true) {
      setLoginCheck("user");
    } else {
      setLoginCheck("login");
    }
  };

  useEffect(() => {
    CheckAuth();
  }, [session]);

  // handle login form -------------->

  const handleLoginUser = (e) => {
    const { name, value } = e.target;
    setLoginUser((prevLoginUser) => ({
      ...prevLoginUser,
      [name]: value,
    }));
    // console.log("login user", loginUser);
  };

  // login submit button
  const loginSubmit = ({ userName, password }) => {
    const matchUser = user.find((item) => item.userName === loginUser.userName);
    const matchPass = user.find((item) => item.password === loginUser.password);
    // console.log("set logged user", matchUser);
    if (matchUser && matchPass) {
      console.log("Login Succesfully !");
      setSession(true);
      setLoggedUser(matchUser);
      localStorage.setItem("loggedUser", JSON.stringify(matchUser));
    } else {
      console.log("Login Failed !");
    }
  };
  console.log("login user", loggedUser);

  const Logout = () => {
    setSession(false);
    localStorage.setItem("loggedUser", JSON.stringify({}));
  };

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("loggedUser"));
    if (getData) {
      setLoggedUser(getData);
    }
  }, []);

  useEffect(() => {
    const getSession = JSON.parse(localStorage.getItem("session"));
    if (getSession) {
      setSession(getSession);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("session", JSON.stringify(session));
  }, [session]);

  console.log("login status ---->", session);
  // ----------------------------------------------------------------------------------------
  // -------------------------------- Login Data Management -------------------------------->
  // ----------------------------------------------------------------------------------------
  //*****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // -------------------------------- Signup Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  const SignupHandle = (e) => {
    const { name, value } = e.target;
    setNewUser((items) => ({ ...items, [name]: value }));
  };

  const SignupSubmit = async () => {
    const findMatchUser = user.find(
      (items) => items.userName === newUser.userName
    );

    console.log("findMatchUser", findMatchUser);
    if (!findMatchUser) {
      setSession(true);
      try {
        const createResponse = await fetch(baseURL + UserDetailsEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (!createResponse.ok) {
          throw new Error("Failed to create data.");
        }
      } catch (error) {
        console.error("Error creating data:", error);
      }
      setLoggedUser(newUser);
    } else {
      alert("User Already Exists !");
    }
  };

  // ----------------------------------------------------------------------------------------
  // -------------------------------- Signup Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // ****************************************************************************************

  // ----------------------------------------------------------------------------------------
  // ------------------------------- password Data Management ------------------------------>
  // ----------------------------------------------------------------------------------------

  // reset password ------------------------->
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const resetPassword = async (id) => {
    const findUser = user.find((item) => item.id === loggedUser.id);
    if (oldPassword && oldPassword === findUser.password) {
      if (newPassword && confirmPassword && newPassword === confirmPassword) {
        try {
          const newID = loggedUser.id;
          const updateResponse = await fetch(
            baseURL + UserDetailsEndpoint + `/${newID}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ password: confirmPassword }),
            }
          );

          if (!updateResponse.ok) {
            throw new Error("Failed to update password.");
          }

          console.log("Password updated successfully!");
          TogglePassword();
        } catch (error) {
          console.error("Error updating password:", error);
        }
      }
    } else {
      if (!oldPassword) {
        alert("Enter old Password");
      } else if (newPassword !== confirmPassword) {
        alert("confirm password not matched");
      }
    }
  };

  // ----------------------------------------------------------------------------------------
  // ------------------------------- password Data Management ------------------------------>
  // ----------------------------------------------------------------------------------------
  //*****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------- image upload Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  // const handleImageUpload = (event) => {
  //   const imageFile = event.target.files[0];
  //   setSelectedImage(imageFile);
  // }

  // useEffect(() => {
  //   if (selectedImage) {
  //     const objectUrl = URL.createObjectURL(selectedImage);
  //     setImageUrl(objectUrl);
  //     console.log("dp===============================>", objectUrl);
  //   }
  // }, [selectedImage]);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };
  
  useEffect(() => {
    const updateImage = async () => {
      if (selectedImage) {
        const objectUrl = URL.createObjectURL(selectedImage);
        setImageUrl(objectUrl);
        
        try {
          const formData = new FormData();
          formData.append('image', selectedImage);
          const newID = loggedUser.id;
          const response = await fetch( baseURL + UserDetailsEndpoint + `/${newID}`, {
            method: 'PATCH',
            body: JSON.stringify({dp:formData}),
          });
  
          if (response.ok) {
            console.log('Image updated on JSON server!');
          } else {
            console.error('Failed to update image on JSON server');
          }
        } catch (error) {
          console.error('Error updating image:', error);
        }
      }
    };
  
    updateImage();
  }, [selectedImage]);
  

  // ----------------------------------------------------------------------------------------
  // ------------------------------- image upload Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  return (
    <UserContext.Provider
      value={{
        loginCheck,
        user,
        login,
        loginUser,
        session,
        loggedUser,
        open,
        openPassword,
        oldPassword,
        newPassword,
        confirmPassword,
        Logout,
        SignupHandle,
        SignupSubmit,
        handleLoginUser,
        loginSubmit,
        ToggleModal,
        TogglePassword,
        handleOldPassword,
        handleNewPassword,
        handleConfirmPassword,
        resetPassword,
        handleImageUpload,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const UserDataProvider = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider, UserDataProvider };
