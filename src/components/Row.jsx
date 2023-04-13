import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);
  // console.log(movies);

  return (
    <>
      <h2 className=" text-white p-4 font-bold md:text-xl">{title} </h2>
      <div className="flex items-center relative">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => {
            return <MovieCard movie={movie} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
