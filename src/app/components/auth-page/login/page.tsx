import Image from "next/image";
import LoginForm from "./login-form/page";
import LoginImage from "@/app/asset/loginpage.jpg";
import googleImage from "@/app/asset/google.svg";
import facebookImage from "@/app/asset/facebook.svg";

const LoginPage = () => {
  return (
    <div className=" ml-32 flex items-center justify-center gap-32 h-full font-poppins">
      <div className=" w-full flex flex-col items-center justify-center basis-2/3 py-36">
        <div className="flex items-center flex-col mb-10 w-full">
          <div className="text-black text-[40px] font-bold leading-[44px]">
            Welcome back
          </div>
          <div className="h-5 text-black text-base">
            Please enter your detail to sign in
          </div>
        </div>
        <div className="flex flex-col w-full gap-3">
          <LoginForm />
        </div>
        <div className="w-full h-6 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-1 flex">
            <div className="text-neutral-950 text-sm font-normal font-inter leading-[21px] tracking-tight">
              Remember me
            </div>
          </div>
          <div className="text-neutral-950 text-sm font-normal font-inter leading-[21px] tracking-tight">
            Forgot Password?{" "}
          </div>
        </div>
        <button className="w-full mt-5 mb-7 h-12 px-4 py-3 bg-green-800 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-zinc-100 text-base font-normal font-poppins">
            Sign in
          </div>
        </button>
        <div className="gap-3 flex flex-col mb-5">
          <p className="font-bold text-black text-base items-center flex justify-center">
            Or
          </p>
          <div className="flex w-fit">
            <div className="relative">
              <div className="w-16 h-16 bg-gray-100 rounded-full z-0" />
              <Image
                src={googleImage}
                alt=""
                className="z-50 absolute inset-0 m-auto"
              />
            </div>
            <div className="relative ml-5">
              <div className="w-16 h-16 bg-gray-100 rounded-full z-0" />
              <Image
                src={facebookImage}
                alt=""
                className="z-50 absolute inset-0 m-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="text-black text-base font-medium">
            Do you have an account?
          </div>
          <div className="text-green-800 text-base font-semibold underline ml-1">
            Sign up
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={LoginImage}
          alt=""
          className="w-full aspect-[660/987] h-full rounded-[45px]"
        />
      </div>
    </div>
  );
};
export default LoginPage;
