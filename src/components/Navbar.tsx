import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa6";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";

const Navbar: NextPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  useEffect(() => {
    if (user) {
      console.log("Current user:", user);
    }
  }, [user]);

  return (
    <header className="border-b border-black bg-[#382778] md:px-10 text-white">
      <div className="navbar">
        {/* logo */}
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>

              <li>
                <Link href="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="font-bold text-2xl lg:text-2xl">
            <span className="text-red-600">Teach</span> Deal
          </Link>
        </div>
        {/* routes */}
        <div className="navbar-center">
          <div className="hidden md:block">
            <ul tabIndex={0} className="menu menu-horizontal text-2xl">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>

              <li>
                <Link href="/blogs">Blog</Link>
              </li>
              <li>
                <Link className="text-[#F07224]" href="/dashbord">
                  Dashboard
                </Link>
              </li>
              {user && (
                <li>
                  <button onClick={async () => {
                    await signOut();
                  }}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* img and cart */}
        <div className="navbar-end">
          <div className="">
            <div className="badge">1</div>
            <FaCartPlus className="w-16 h-9 mr-3 text-red-400" />
          </div>
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {user ? (
                <Link href="/dashbord">
                  <Image
                    src={user.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                    className="rounded-full"
                    alt="User avatar"
                    layout="fill"
                    unoptimized
                  />
                </Link>
              ) : (
                <Link href="/login">
                  <Image
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    className="rounded-full"
                    alt="Default avatar"
                    layout="fill"
                    unoptimized
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
