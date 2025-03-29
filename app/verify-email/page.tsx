import React from "react";

const page = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Email Verification Link has been Sent!
        </h1>
        <p className="text-gray-200 mt-2 font-semibold">
          Please Check Email and Verify
        </p>
      </div>
      {/* Styling imports */}
      <div className="z-[-1] glow-effect top-0 left-10"></div>
      <div className="z-[-1] glow-effect-xl hidden xl:flex top-20 left-10"></div>
      <div className="z-[-1] glow-effect bottom-10 right-10"></div>
      <div className="z-[-1] glow-effect bottom-0 xl:hidden right-10"></div>
      <div className="z-[-1] glow-effect-xl bottom-0 xl:flex hidden right-10"></div>
      <div className="z-[-1] glow-effect-xl bottom-50 float right-50"></div>
    </section>
  );
};

export default page;
