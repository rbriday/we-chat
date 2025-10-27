
import { useState } from "react";
import { Link } from "react-router";


const Login = () => {
    // input state 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Err show state 
    const [erroEmail, setErroEmail] = useState('');
    const [erroPassword, setErroPassword] = useState('');

    //handleEmail 
    const handleEmail =(e)=>{
        setEmail(e.target.value);  
        setErroEmail("")
        
    }
    //handlePassword
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        setErroPassword("")
        
    }
    //handleRegistration
    const handleLogin =()=>{

        if(!email){
            setErroEmail('Please give your email..'); 
        }else{
            if(!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)){
                setErroEmail("Please give your right Email..")
            }
        }
        if(!password){
            setErroPassword("Please give your password..");
        }
        // else{
        //     if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)){
        //         setErroPassword("Plase give strong password..")
        //     }
        // }

        setEmail("");
        setPassword("");
       
        
        
    }
  return (
    <div className="bg-[#423e3e6d] w-full h-screen flex items-center">
      <div className="w-[500px] bg-[#E5EDE4] mx-auto py-[30px] rounded-xl text-center">
        <h2 className="font-primary font-semibold text-[30px] text-primary tracking-[2px]">Login to your account!</h2>
        <h4 className="font-secondary text-[18px] cursor-pointer text-orange-500">Login with Google</h4>
        <div className="w-[350px] mx-auto mt-[30px] relative">
            <input 
            onChange={handleEmail}
            type="email"
            placeholder="Enter your email.."
            className="border-2 border-primary px-[10px] py-[8px] w-full outline-0 rounded-xl font-primary text-[14px] text-secondary" />
            <p className="absolute bottom-[-25px] left-0 bg-red-500 w-full rounded-xl font-primary text-[14px] text-primary">{erroEmail}</p>
        </div>
        <div className="w-[350px] mx-auto mt-[30px] relative">
            <input 
            onChange={handlePassword}
            type="text"
            placeholder="Enter your passoword.."
            className="border-2 border-primary px-[10px] py-[8px] w-full outline-0 rounded-xl font-primary text-[14px] text-secondary" />
            <p className="absolute bottom-[-25px] left-0 bg-red-500 w-full rounded-xl font-primary text-[14px] text-primary">{erroPassword}</p>
        </div>
        <div className="mt-[40px]">
            <button 
            onClick={handleLogin}
            type="button" 
            className="relative border-2 border-primary bg-primary px-[40px] py-[10px] rounded-[8px] font-primary font-semibold text-white tracking-[2px] z-[1] cursor-pointer"
             >Login
             <span className="absolute top-1/2 left-1/2 translate-[-50%] bg-red-500 blur-lg w-[30px] h-[30px] z-[-1]"></span>
             </button>
             <p className="pt-[10px] font-secondary text-[14px] text-orange-400 cursor-pointer">
                <Link to="/forgot">Fotgot Password</Link>
             </p>
             <p className="pt-[10px] font-secondary text-[14px] text-secondary">Don’t have an account ? <span className="text-orange-400 cursor-pointer">
                <Link to="/registration">Sign Up</Link>
                </span></p>
        </div>
      </div>
    </div>
  );
};




export default Login;