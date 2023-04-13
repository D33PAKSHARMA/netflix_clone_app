import { useEffect, useState } from "react";
import axios from "axios";
import requests from "../Requests";

const Main = () => {
  const [Movies, setMovies] = useState([]);

  const Movie = Movies[Math.floor(Math.random() * Movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white ">
      <div className="h-full w-full ">
        <div className=" bg-gradient-to-r from-black "></div>
        <img
          className="h-full w-full object-cover xl:object-fill"
          src={`https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}`}
          alt={Movie?.title}
        />
      </div>
      <div className="absolute w-full top-[20%] ml-4 md:ml-8">
        <h1 className="text-3xl font-bold md:text-5xl">{Movie?.title}</h1>
        <div className="py-2">
          <button className="bg-gray-300 border  text-black  px-4 py-2">
            Play
          </button>
          <button className="  border  px-4 py-2 ml-4">Watch Later</button>
        </div>
        <p className="text-gray-400 text-sm">Released:{Movie?.release_date}</p>
        <p className="w-full md:max-w-[70%] xl:max-w-[30%] text-gray-200">
          {truncateString(Movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Main;
