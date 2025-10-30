import React, { useState } from "react";
import { Link } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Forgot = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  //handleEmail
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErroEmail("");
  };

  //handleForgot
  const handleForgot = () => {
    if (!email) {
      setErroEmail("Please give your email..");
    } else {
      if (!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        setErroEmail("Please give your right Email..");
      }
    }
    if (
      email &&
      /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)
    ) {
      sendPasswordResetEmail(auth, email)
        .then((user) => {
            console.log(user)
            toast.success("Please check your email")
        })
    }
  };
  return (
    <div className="w-full h-screen bg-amber-200 flex items-center">
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
      <div className="w-[500px] bg-pink-200 py-[20px] px-[30px] mx-auto rounded-xl">
        <h3 className="font-primary font-semibold text-[20px] text-primary tracking-[2px]">
          Forgot password:
        </h3>
        <div className="w-[350px] mt-[30px] relative">
          <input
            onChange={handleEmail}
            type="email"
            placeholder="Enter your email.."
            className="border-2 border-primary px-[10px] py-[8px] w-full outline-0 rounded-xl font-primary text-[14px] text-secondary"
          />
          <p className="absolute bottom-[-25px] left-0 bg-red-500 w-full px-1 rounded-xl font-primary text-[14px] text-white">
            {erroEmail}
          </p>
        </div>
        <div className="mt-[30px] space-x-[10px]">
          <button
            onClick={handleForgot}
            type="button"
            className="relative border-2 border-primary bg-primary px-[16px] py-[7px] rounded-[8px] font-primary font-semibold text-white tracking-[2px] z-[1] cursor-pointer"
          >
            Forgot passowrd
            <span className="absolute top-1/2 left-1/2 translate-[-50%] bg-red-500 blur-lg w-[30px] h-[30px] z-[-1]"></span>
          </button>
          <Link
            to="/login"
            type="button"
            className="relative border-2 border-primary bg-primary px-[16px] py-[7px] rounded-[8px] font-primary font-semibold text-white tracking-[2px] z-[1] cursor-pointer"
          >
            Go Back
            <span className="absolute top-1/2 left-1/2 translate-[-50%] bg-red-500 blur-lg w-[30px] h-[30px] z-[-1]"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
