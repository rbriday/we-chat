import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router";

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [verify, setVerify] = useState(false);
  const [load, setLoad] = useState(true);

  const data = useSelector((state) => state.userInfo.value);

  useEffect(()=>{
    if(!data){
        navigate("/login")
    }
  })

  onAuthStateChanged(auth, (user) => {
    if (user.emailVerified) {
      setVerify(true);
    }
    setLoad(false);
  });

  if(load){
    return null;
  }

  return (
    <div>
      {verify ? (
        <p>home</p>
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
