// "use client";
// import Image from "next/image";
// import Link from "next/link";
import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-sky-500"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i6Fkqec7LYKjciniDR929EKwC5_tnkGryA&usqp=CAU")`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Landing page header */}
      <div className="absolute top-0 left-0  w-full flex justify-end px-10 py-4"></div>

      <div className="w-screen h-screen">
        <video className="w-full h-full opacity-40 object-cover" autoPlay loop muted>
          <source src="/bgvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Landing page content */}
      <div className="absolute top-0 left-0 z-10 flex flex-col justify-center items-center w-screen h-screen">
        <div className="animate-pulse">
          <img
            src="/pricelogo.png"
            width={200}
            height={200}
            alt="Picture of the author" 
          />
        </div>
        <small className="text-gray-50">
          Welcome To PRICE School Management System
        </small>

        <button className="border border-slate-200 p-2 px-4 font-light rounded-md text-gray-50 mt-6  hover:bg-blue-600 hover:border-blue-500 hover:font-normal duration-300">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </main>
  );
}
