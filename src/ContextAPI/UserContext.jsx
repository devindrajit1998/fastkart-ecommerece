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
    state: "",
    city: "",
    pin: "",
    dp: "",
    gender: "",
    DOB: "",
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
  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  // useEffect(() => {
  //   if (selectedImage) {
  //     const objectUrl = URL.createObjectURL(selectedImage);
  //     setImageUrl(objectUrl);
  //     console.log("dp===============================>", objectUrl);
  //   }
  // }, [selectedImage]);

  // const handleImageUpload = (event) => {
  //   const imageFile = event.target.files[0];
  //   setSelectedImage(imageFile);
  // };

  // useEffect(() => {
  //   const updateImage = async (id) => {

  //     if (selectedImage) {
  //       const fileToBase64 = async (file) => {
  //         return new Promise((resolve, reject) => {
  //           const reader = new FileReader();

  //           reader.onload = () => {
  //             const base64String = reader.result.split(",")[1];
  //             resolve(base64String);
  //           };

  //           reader.onerror = (error) => {
  //             reject(error);
  //           };

  //           reader.readAsDataURL(file);
  //         });
  //       };

  //       const convertImageToBase64 = async () => {
  //         try {
  //           const base64String = await fileToBase64(selectedImage);
  //           console.log("Base64 string:", base64String);
  //           setImageUrl(base64String);
  //         } catch (error) {
  //           console.error("Error converting image to Base64:", error);
  //         }
  //       };

  //       convertImageToBase64();
  //     }

  //     try {
  //       const newID = loggedUser.id;
  //       const updateResponse = await fetch(
  //         baseURL + UserDetailsEndpoint + `/${newID}`,
  //         {
  //           method: "PATCH",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({dp:imageUrl}),
  //         }
  //       );

  //       if (!updateResponse.ok) {
  //         throw new Error("Failed to update image.");
  //       }
  //     } catch (error) {
  //       console.error("Error updating image:", error);
  //     }

  //   };

  //   updateImage();
  // }, [selectedImage]);

  // console.log("dp===============================>", selectedImage);
  // ----------------------------------------------------------------------------------------
  // ------------------------------- image upload Management ------------------------------->
  // ----------------------------------------------------------------------------------------
  //*****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------------- Edit Address ------------------------------------>
  // ----------------------------------------------------------------------------------------
  const HandleAddressEdit = (e) => {
    const { name, value } = e.target;
    setNewUser((items) => ({ ...items, [name]: value }));
  };
  console.log("address edit----->", newUser);

  const EditAdress = async (id) => {
    try {
      const newID = loggedUser.id;
      const updateResponse = await fetch(
        baseURL + UserDetailsEndpoint + `/${newID}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: newUser.name, phone: newUser.phone, gender: newUser.gender, DOB: newUser.DOB, country: newUser.country, state: newUser.state, city: newUser.city, address: newUser.address, pin: newUser.pin }),
        }
      );

      if (!updateResponse.ok) {
        throw new Error("Failed to update details.");
      }

      console.log("details updated successfully!");
    } catch (error) {
      console.error("Error updating details:", error);
    }
  };

  // ----------------------------------------------------------------------------------------
  // ------------------------------------- Edit Address ------------------------------------>
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
        newUser,
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
        HandleAddressEdit,
        EditAdress
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
