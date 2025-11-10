import friendOne from '../../assets/friendOne.png'

const FriendRequest = () => {
    return (
          <div className="w-[320px] h-[380px] border-2 border-amber-200 rounded-2xl shadow-2xl p-3 ml-[20px]">
              <div className="border-2 border-amber-200 rounded-xl shadow-2xl py-[5px] px-[10px] mb-[15px]">
                <h3 className="font-primary font-semibold text-[20px] text-primary tracking-[2px]">Friend Requset List </h3>
              </div>
              <div className="h-[300px] overflow-y-scroll">
               <div className="flex justify-between items-center border-b-2 pb-[5px] mb-2 pr-3">
                  <div className="flex items-center">
                    <img src={friendOne} alt="#friend" />
                    <div className="ml-[10px]">
                      <h3 className="font-primary font-semibold text-primary text-[14px]">Name</h3>
                      <p className="font-secondary text-[10px] text-second">Email</p>
                    </div>
                  </div>
                  <div>
                    <button className='border-2 border-primary rounded-[8px] font-primary text-[12px] text-secondary bg-primary px-[5px] py-[2px] cursor-pointer'>Accpet</button>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default FriendRequest;