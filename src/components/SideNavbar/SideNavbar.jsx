import profile from "../../assets/profile.png";
import { TiHomeOutline } from "react-icons/ti";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../firebase/Slices/userSlice";

const SideNavbar = () => {

  const data = useSelector((selector)=>(selector.userInfo.value.user))
  
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch()
 
  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    dispatch(userInfo(null))
    signOut(auth).then(() => {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    });
  };
  return (
    <>
      <div className="w-[200px] h-[700px] bg-amber-200 rounded-xl">
        <div className="pt-[10px] flex justify-center">
          <img src={profile} alt="#profile" />
        </div>
        <div className="text-center mt-2 mb-5">
          <p> {data?.displayName} </p>
        </div>
        <div>
          <div className="flex justify-center mb-4 cursor-pointer">
            <TiHomeOutline className="text-[50px] text-black" />
          </div>
          <div className="flex justify-center mb-4" onClick={handleLogOut}>
            <ImExit className="text-[50px] text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
