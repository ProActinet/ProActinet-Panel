import React from "react";
import { Button } from "../ui/button";
import "../../animations/fade-in.css";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-[80%] 2xl:max-w-[70%] justify-center items-center flex flex-col [&>span]:text-center hover:scale-105 transition-transform duration-300">
        <span className="font-semibold text-title-2xl fade-in-up hover:text-[#ac3d3db6] transition duration-300">
          Forge a Digital Fortress: Antibotnet Security System
        </span>
        <span className="md:max-w-[70%] 2xl:max-w-[60%] md:pt-4 fade-in-up hover:text-[#d6d444d7] transition duration-300">
          Empowering your digital frontier with innovative antibotnet security
          solutions. Integrating advanced technologies for comprehensive
          protection. Adapting continuously to meet tomorrow's cybersecurity
          challenges.
        </span>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-y-4 items-center justify-center gap-x-4 pt-4 [&>a>button]:text-lg [&>a>button]:py-6 [&>a>button]:px-8 [&>a>button]:hover:text-white hover:scale-105 transition-transform duration-300 fade-in-up">
        <Link href="/">
          <Button className="" variant={"default"}>
            Check Demo
          </Button>
        </Link>
        <Link href="/auth">
          <Button className="" variant={"ghost"}>
            Get Started
          </Button>
        </Link>
      </div>
      <div className="z-[-1] glow-effect top-0 left-10"></div>
      <div className="z-[-1] glow-effect-xl hidden xl:flex top-20 left-10"></div>
      <div className="z-[-1] glow-effect bottom-10 right-10"></div>
      <div className="z-[-1] glow-effect bottom-0 xl:hidden right-10"></div>
      <div className="z-[-1] glow-effect-xl bottom-0 xl:flex hidden right-10"></div>
      <div className="z-[-1] glow-effect-xl bottom-50 float right-50"></div>
      {/* <div className="z-[-1] glow-effect bottom-10 right-10"></div> */}
    </div>
  );
};

export default Landing;
