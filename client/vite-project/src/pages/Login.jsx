import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../component/Auth";
import { Spin } from 'antd';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const auth = useAuth();

  const loginMutation = useMutation(({ email, password }) =>
    axios.post("http://localhost:8001/login", { email, password })
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = data;
    if (email === "") return alert("Email cannot be empty");
    if (password === "") return alert("Password cannot be empty");
    // setLoading(false);
    try {
      const { data: userData } = await loginMutation.mutateAsync({
        email,
        password,
      });

      const { user } = userData;
      auth.login(user);
      setLoading(false);
      if (user?.userType === "admin") {
        navigate("/admin/dashboard", { replace: true});
      } else if (user?.userType === "student") {
        navigate("/student/dashboard", { replace: true});
      } else if (user?.userType === "lecturer") {
        navigate("/lecturer/dashboard", { replace: true});
      } else if (user?.userType === "parent") {
        navigate("/parent/dashboard", { replace: true});
      } else {
        navigate("/")
        alert(`this userType is not defined ${user.userType}`);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-700  flex justify-center items-center">
      <form
        className="w-[20rem] shadow-md  bg-white flex flex-col gap-6 p-4 rounded-2xl"
        onSubmit={handleLogin}
      >
        <h1>LOGIN</h1>
        <label className="text-sm text-black-800 ">Email</label>
        <input
          type="email"
          placeholder="enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          className="text-gray-800"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="text-gray-800"
        />
        {loading ? (
           <Spin />
        ) : (
          <button className="" type="submit">
            {" "}
            Login{" "}
          </button>
        )}
      </form>
    </div>
  );
}
