import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div>
        <img
          className="w-full h-[400px] object-cover relative"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/9c9af369-7a8c-4c8f-8e4a-d6c9d655f713/IN-en-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[700px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            My Movies
          </h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
