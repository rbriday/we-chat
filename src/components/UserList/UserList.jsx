import { useEffect, useState } from "react";
import friendOne from "../../assets/friendOne.png";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";



const UserList = () => {
  const [userList, setUserList] = useState([]);
  const db = getDatabase();
  
  const data = useSelector((selector)=>selector.userInfo.value.user)

  useEffect(() => {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        if(data.uid !== item.key){
          arry.push(item.val());
        }
      });
      setUserList(arry);
    });
  }, []);

  console.log(userList);
const handleFriendRequest = (item)=>{
  console.log("okk", item)
  set(ref(db, "friendRequest/" ), {
              senderName : data.displayName,
              receiverName: item.username,
            });
  
}


  return (
    <div className="w-[320px] h-[380px] border-2 border-amber-200 rounded-2xl shadow-2xl p-3 ml-[20px]">
      <div className="border-2 border-amber-200 rounded-xl shadow-2xl py-[5px] px-[10px] mb-[15px]">
        <h3 className="font-primary font-semibold text-[20px] text-primary tracking-[2px]">User List </h3>
      </div>
      <div className="h-[300px] overflow-y-scroll">
        {userList.map((user) => (
        <div className="flex justify-between items-center border-b-2 pb-[5px] mb-2 pr-3">
          <div className="flex items-center">
            <img src={friendOne} alt="#friend" />
            <div className="ml-[10px]">
              <h3 className="font-primary font-semibold text-primary text-[14px]">{user.username}</h3>
              <p className="font-secondary text-[10px] text-second">{user.email}</p>
            </div>
          </div>
          <div 
          className="cursor-pointer"
          onClick={()=>handleFriendRequest(user)}
          >
             <FaPlus size={25} color="#422AD5" />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default UserList;
