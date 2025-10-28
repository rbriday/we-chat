import { useState } from "react";
import { TbEyeUp, TbEyeX } from "react-icons/tb";
import { Link, useNavigate } from "react-router";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { userInfo } from "../components/firebase/Slices/userSlice";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // input state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Err show state
  const [erroEmail, setErroEmail] = useState("");
  const [erroPassword, setErroPassword] = useState("");

  //password show state
  const [passwordShow, setPasswordShow] = useState(false);
  //loader state
  const [loader, setLoader] = useState(false);

  //handleEmail
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErroEmail("");
  };
  //handlePassword
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErroPassword("");
  };
  //handleRegistration
  const handleLogin = () => {
    if (!email) {
      setErroEmail("Please give your email..");
    } else {
      if (!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        setErroEmail("Please give your right Email..");
      }
    }
    if (!password) {
      setErroPassword("Please give your password..");
    }
    // else{
    //     if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)){
    //         setErroPassword("Plase give strong password..")
    //     }
    // }
    if (
      email &&
      password &&
      /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)
    ) {
      setLoader(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          toast.success("Login Successfully done..");
          console.log(user);
          dispatch(userInfo(user.user))
          localStorage.setItem("userInfo", JSON.stringify(user))
          setTimeout(() => {
            navigate("/");
          }, 3000);
          setLoader(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Plase give right email and password");
          }
          console.log(errorCode);
          setLoader(false);
        });
    }

    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <div className="bg-[#423e3e6d] w-full h-screen flex items-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="w-[500px] bg-[#E5EDE4] mx-auto py-[30px] rounded-xl text-center">
        <h2 className="font-primary font-semibold text-[30px] text-primary tracking-[2px]">
          Login to your account!
        </h2>
        <h4
          className="font-secondary text-[18px] cursor-pointer text-orange-500"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </h4>
        <div className="w-[350px] mx-auto mt-[30px] relative">
          <input
            onChange={handleEmail}
            type="email"
            value={email}
            placeholder="Enter your email.."
            className="border-2 border-primary px-[10px] py-[8px] w-full outline-0 rounded-xl font-primary text-[14px] text-secondary"
          />
          <p className="absolute bottom-[-25px] left-0 bg-red-500 w-full rounded-xl font-primary text-[14px] text-primary">
            {erroEmail}
          </p>
        </div>
        <div className="w-[350px] mx-auto mt-[30px] relative">
          <input
            onChange={handlePassword}
            type={passwordShow ? "text" : "password"}
            value={password}
            placeholder="Enter your passoword.."
            className="border-2 border-primary px-[10px] py-[8px] w-full outline-0 rounded-xl font-primary text-[14px] text-secondary"
          />
          <p className="absolute bottom-[-25px] left-0 bg-red-500 w-full rounded-xl font-primary text-[14px] text-primary">
            {erroPassword}
          </p>
          <div
            className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
            onClick={() => setPasswordShow(!passwordShow)}
          >
            {passwordShow ? <TbEyeX size={20} /> : <TbEyeUp size={20} />}
          </div>
        </div>
        <div className="mt-[40px]">
          <button
            onClick={handleLogin}
            type="button"
            className="relative w-[200px] border-2 border-primary bg-primary px-[40px] py-[10px] rounded-[8px] font-primary font-semibold text-white tracking-[2px] z-[1] cursor-pointer"
          >
            {" "}
            {loader ? (
              <PropagateLoader color="#fff" className="pb-[15px]" />
            ) : (
              "Login"
            )}
            <span className="absolute top-1/2 left-1/2 translate-[-50%] bg-red-500 blur-lg w-[30px] h-[30px] z-[-1]"></span>
          </button>
          <p className="pt-[10px] font-secondary text-[14px] text-orange-400 cursor-pointer">
            <Link to="/forgot">Fotgot Password</Link>
          </p>
          <p className="pt-[10px] font-secondary text-[14px] text-secondary">
            Don’t have an account ?{" "}
            <span className="text-orange-400 cursor-pointer">
              <Link to="/registration">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
