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
    name:"",
    userName:"",
    password:"",
    phone:"",
    address:"",
    country:"",
    city:"",
    pin:""
  });

  const [user, setUser] = useState([]);

  //to open modal -------------------------->

  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  //*****************************************************************************************
  // ----------------------------------------------------------------------------------------
  // ------------------------------------- API States -------------------------------------->
  // ----------------------------------------------------------------------------------------


  useEffect(() => {
    const baseURL = "http://localhost:3001/";
    const UserDetailsEndpoint = "UserDetails";

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

    const createData = async (newUserData) => {
      try {
        const createResponse = await fetch(baseURL + UserDetailsEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        });

        if (!createResponse.ok) {
          throw new Error("Failed to create data.");
        }

        fetchData();
      } catch (error) {
        console.error("Error creating data:", error);
      }
    };

    const updateData = async (id, updatedUserData) => {
      try {
        const updateResponse = await fetch(
          baseURL + UserDetailsEndpoint + `/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUserData),
          }
        );

        if (!updateResponse.ok) {
          throw new Error("Failed to update data.");
        }

        fetchData();
      } catch (error) {
        console.error("Error updating data:", error);
      }
    };

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

        fetchData();
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    };

    fetchData();
  }, []);

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
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    } else {
      console.log("Login Failed !");
    }
  };
  // console.log("login user", loggedUser);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("loggedUser"));
    if (getData) {
      setLoggedUser(getData);
    }
  }, []);

  const Logout = () => {
    setSession(false);
  };

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
  const SignupSubmit = () => {
    const findMatchUser = user.find(
      (items) => items.userName === newUser.userName
    );
    if (!findMatchUser) {
      setSession(true);
      setUser((item) => [...item, newUser]);
    } else {
      alert("User Already Exists !");
    }
  };
  console.log("signup data", user);

  // ----------------------------------------------------------------------------------------
  // -------------------------------- Signup Data Management ------------------------------->
  // ----------------------------------------------------------------------------------------

  return (
    <UserContext.Provider
      value={{
        loginCheck,
        user,
        login,
        loginUser,
        handleLoginUser,
        loginSubmit,
        session,
        Logout,
        SignupHandle,
        SignupSubmit,
        loggedUser,
        ToggleModal,
        open,
        openPassword,
        TogglePassword
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
