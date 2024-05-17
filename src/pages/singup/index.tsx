import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NextPage } from "next";
import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { UserInfoInterface } from "@/interface/UserInfoInterface";
import auth from "@/firebase/firebase.auth";

const SingUp: NextPage = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const register = (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoUrl.value;
    const role = form.dropdown.value;
    const userInfo: UserInfoInterface = {
      name,
      email,
      role,
      photoURL: photo,
    };
    console.log({userInfo});
    // call function for authtication
    createUserWithEmailAndPassword(email, password);
    console.log(user);
    form.reset();
  };
  return (
    <div>
      <div className="flex min-h-full w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full p-6  bg-white rounded-lg border border-gray-200 shadow-md max-w-md space-y-8">
          <div>
            <h2 className="mt-1 text-center text-2xl font-bold tracking-tight text-gray-900">
              Sign Up to your account
            </h2>
          </div>
          <form
            onSubmit={register}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="photoUrl"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Photo Url"
                />
              </div>
              <select
                id="dropdown"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="buyer">
                  Buyer
                </option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#19065d] py-2 px-4 text-sm font-medium text-white hover:bg-[#382778] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="main-hr flex items-center  text-center">
            <hr className="hr-tag border-gray-300 border-1 w-full rounded-md" />
            <label className="hr-tag block font-medium text-sm text-gray-600 w-full">
              Or continue with
            </label>
            <hr className="hr-tag border-gray-300 border-1 w-full" />
          </div>
          <div className="social flex min-h-fit items-center justify-center py-1">
            <div className="glass mx-2 btn btn-outline w-20 lg:w-28 hover:bg-[#382778]">
              <button>
                <FaGoogle />
              </button>
            </div>
            <div className="glass mx-2 btn btn-outline w-20 lg:w-28 hover:bg-[#382778]">
              <button>
                <FaFacebook />
              </button>
            </div>
            <div className="btn mx-2 btn-outline glass w-20 lg:w-28 hover:bg-[#382778]">
              <button>
                <FaGithub />
              </button>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex justify-center items-center">
              <label className="mr-2">Already have an account?</label>

              <Link
                className=" text-[#382778] transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                href="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
