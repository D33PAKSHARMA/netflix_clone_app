import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteMovie = async (passId) => {
    try {
      const res = movies.filter((item) => item.id !== passId);
      await updateDoc(movieRef, {
        savedShows: res,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className=" text-white p-4 font-bold md:text-xl z-10">My Movies </h2>
      <div className="flex items-center relative group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 ml-1 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => {
            return (
              <div
                key={id}
                className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer m-[5px]"
              >
                <img
                  className="w-full h-auto block "
                  src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                  alt={movie?.title}
                />
                <div className=" absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
                  <p className="flex justify-center items-center font-bold h-full text-center ">
                    {movie?.title}
                  </p>
                  <p
                    onClick={() => deleteMovie(movie.id)}
                    className="top-2 right-2 absolute "
                  >
                    <RxCross1 />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
