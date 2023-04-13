import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between h-16 w-full absolute cursor-pointer z-[100]">
      <Link to="/">
        <img
          className="h-12 ml-8 mt-6"
          src="/images/Netflix_logo.png"
          alt="Netflix_logo"
        />
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white px-3 py-2 rounded cursor-pointer ">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-3 py-2 rounded ml-2 mr-2 cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white px-3 py-2 rounded cursor-pointer ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-3 py-2 rounded ml-2 mr-2 cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
