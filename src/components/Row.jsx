import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, id }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {});

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  // console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div>
        <h2 className=" text-white p-4 font-bold md:text-xl">{title} </h2>
        <div className="flex items-center relative group">
          <MdChevronLeft
            onClick={slideLeft}
            className="bg-white left-0 ml-1 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
            size={40}
          />
          <div
            id={"slider" + id}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          >
            {movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
          </div>

          <MdChevronRight
            onClick={slideRight}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default Row;
