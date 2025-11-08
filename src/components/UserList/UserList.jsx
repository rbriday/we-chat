import friendOne from '../../assets/friendOne.png'

const UserList = () => {
    return (
        <div className='w-[300px] h-[350px] border-2 border-amber-200 rounded-2xl shadow-2xl p-3 ml-[20px]'>
            <div className='border-2 border-amber-200 rounded-xl shadow-2xl py-[5px] px-[10px] mb-[15px]'>
                <h3>User List </h3>
            </div>
            <div className='flex justify-between items-center border-b-2 pb-[5px]'>
                <div className='flex items-center'>
                    <img src= {friendOne} alt="#friend" />
                    <div className='ml-[10px]'>
                    <h3>Riday</h3>
                    <p>Ridaya100@</p>
                </div>
                </div>
                <div>
                    <button>send</button>
                </div>
            </div>
        </div>
    );
};

export default UserList;