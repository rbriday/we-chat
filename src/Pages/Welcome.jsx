import { Link } from "react-router";

const Welcome = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-white text-center">
      <h1 className="font-primary font-semibold text-[40px] text-primary tracking-[4px] mb-4">
        Welcome we chat!
      </h1>
      <p className="font-primary text-[18px] text-secondary tracking-[2px] mb-8">
        We're glad to have you here. Let's get started.
      </p>
      <Link to ='/registration'
        type="button"
        className="relative border-2 w-[200px] border-primary bg-primary px-[40px] py-[10px] rounded-[8px] font-primary font-semibold text-white tracking-[2px] z-[1] cursor-pointer">
        Registration
        <span className="absolute top-1/2 left-1/2 translate-[-50%] bg-red-500 blur-lg w-[30px] h-[30px] z-[-1]"></span>
      </Link>
    </div>
  );
};

export default Welcome;
