"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "../../animations/fade-in.css";
import { handleLoginAttempt, handleSignUpAttempt } from "../../utils/auth";
import useAuthStore from "@/store/authstore";
import { ToastContainer, toast } from "react-toastify";

const AuthenticationPage = () => {
  // auth store state and actions
  const setAuth = useAuthStore((state) => state.setAuth);
  const user = useAuthStore((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Login Handlers
  const handleLoginSuccess = (userData: any) => {
    setAuth({ user: userData });
    // const maxAge = 30 * 24 * 60 * 60; // 30 days

    console.log(userData.user.tokens.access);
    console.log(userData.user.tokens.refresh);

    const maxAge = 30 * 24 * 60 * 60; // 30 days in seconds
    document.cookie = `login_token=${userData.user.tokens.access}; path=/; max-age=${maxAge}; samesite=strict`;
    document.cookie = `refresh_token=${userData.user.tokens.refresh}; path=/; max-age=${maxAge}; samesite=strict`;

    setError(null);
    toast.success(
      <span>
        Login successful!
        <br />
        Welcome {userData.user.username}
      </span>,
      {
        theme: "dark",
      }
    );

    // setIsLoaded(true);
  };

  const handleLoginError = (err: any, status?: number) => {
    console.error("error from handler", err);
    console.log(err.response?.status || status);
    if ((err.response?.status || status) === 400) {
      toast.error("Invalid username or password", { theme: "dark" });
    } else if ((err.response?.status || status) === 403) {
      toast.error("Account is locked. Please contact support.", {
        theme: "dark",
      });
    } else {
      toast.error("Login failed. Please try again later.", { theme: "dark" });
    }
  };

  const handleLogin = async () => {
    setUsername(
      (document.getElementById("username") as HTMLInputElement).value
    );
    setPassword(
      (document.getElementById("password") as HTMLInputElement).value
    );
    try {
      // Input validation
      if (!username || !password) {
        setError("Please enter both username and password");
        return;
      }

      // Login attempt
      const data = await handleLoginAttempt(username, password);
      // Success handling
      handleLoginSuccess(data);
    } catch (err) {
      handleLoginError(err);
    }
  };

  // Sign up Handlers
  const handleSignUp = async () => {
    // Update States
    setUsername(
      (document.getElementById("username") as HTMLInputElement).value
    );
    setEmail(
      (document.getElementById("signup-email") as HTMLInputElement).value
    );
    setPassword(
      (document.getElementById("signup-password") as HTMLInputElement).value
    );
    console.log(username, email, password);
    try {
      // Input validation
      if (!username || !password || !email) {
        setError("Please enter all the fields");
        return;
      }

      // Login attempt
      const data = await handleSignUpAttempt(username, email, password);
      console.log("Verification email sent");
      console.log(data);
      router.push("/verify-email");
      // Success handling
      // handleLoginSuccess(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/dashboard"); // Redirect to login page if no user found
    }
  }, [user, router]);

  return (
    <section className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Welcome to Aegis
        </h1>
        <p className="text-gray-200 mt-2 font-semibold">
          Your Security, Our Priority
        </p>
      </div>
      <Tabs defaultValue="login" className="w-[300px] sm:w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>
                Enter your credentials to access your secure dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleLogin}>
                Login
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle>Join Aegis</CardTitle>
              <CardDescription>
                Create your account to get started with secure authentication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="signup-email">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Create password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleSignUp}>
                Create Account
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <ToastContainer />

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

export default AuthenticationPage;
