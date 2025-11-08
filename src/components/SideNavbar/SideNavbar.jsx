import profile from '../../assets/profile.png'
import { TiHomeOutline } from "react-icons/ti";
import { ImExit } from "react-icons/im";

const SideNavbar = () => {
    return (
        <>
            <div className='w-[200px] h-[700px] bg-amber-200 rounded-xl'>
                <div className='pt-[10px] flex justify-center'>
                    <img src= {profile} alt="#profile" />
                </div>
                <div className='text-center mt-2 mb-5'>
                    <p>Riday</p>
                </div>
                <div>
                    <div className='flex justify-center mb-4 cursor-pointer'>
                        <TiHomeOutline className='text-[50px] text-black' />
                    </div>
                    <div className='flex justify-center mb-4'>
                        <ImExit className='text-[50px] text-black cursor-pointer' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideNavbar;