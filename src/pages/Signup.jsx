import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const { user, signUp } = UserAuth();
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password.length < 6) {
        alert("Password must be greater than 6 digit");
      } else {
        await signUp(email, password);
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className=" w-full h-full sm:block object-cover  absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/9c9af369-7a8c-4c8f-8e4a-d6c9d655f713/IN-en-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="fixed bg-black/60 left-0 top-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>

              <form onSubmit={handleSubmit} className="flex flex-col py-6">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 rounded my-2 bg-gray-700"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-4 rounded  my-2 bg-gray-700"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-4 my-6 rounded">
                  Sign Up
                </button>
                <div className="flex justify-between item-center">
                  <p className="text-gray-500 text-sm">
                    <input type="checkbox" /> Remember me
                  </p>
                  <p className="text-gray-500 text-sm">Need Help?</p>
                </div>
                <p className=" py-8">
                  <span className="text-gray-500">
                    Already Subscribed to Netflix?{" "}
                  </span>
                  <Link to="/login">Login Now</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
