import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import SideNavbar from "../components/SideNavbar/SideNavbar";

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [verify, setVerify] = useState(false);
  const [load, setLoad] = useState(true);

  const data = useSelector((state) => state.userInfo.value);

  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  });

  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true);
    }
    setLoad(false);
  });

  if (load) {
    return null;
  }

  return (
    <div>
      {verify ? (
        <div className="bg-gradient-to-br from-indigo-100 to-white w-full h-screen p-[50px]">
          <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>{" "}
                </svg>
              </button>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">WE CHAT</a>
            </div>
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>{" "}
                </svg>
              </button>
            </div>
          </div>
          <div>
            <SideNavbar></SideNavbar>
          </div>
        </div>
      ) : (
        <div className="bg-primary w-full h-screen flex justify-center items-center">
          <div className="bg-pink-200 w-[600px] rounded-xl text-center pt-[20px] pb-[30px] ">
            <p className="font-primary font-bold text-[30px] text-primary tracking-[3px] mb-[20px]">
              Please verify your email
            </p>
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
      )}
    </div>
  );
};

export default Home;
