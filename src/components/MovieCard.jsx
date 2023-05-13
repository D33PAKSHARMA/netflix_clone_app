import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const [trailerUrl, setTrailerUrl] = useState(""); // for trailer url

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
        }),
      });
    } else {
      alert("Please Login to save a movie");
    }
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "180",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer m-[5px]">
        <img
          className="w-full h-auto block "
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div
          // onClick={() => handleClick(movie)}
          className=" absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white "
        >
          <p
            onClick={() => handleClick(movie)}
            className="flex justify-center items-center font-bold h-full text-center  "
          >
            {movie?.title}
          </p>
          <p onClick={saveShow} className="absolute top-3 left-3 ">
            {like ? <FaHeart /> : <FaRegHeart />}
          </p>
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
};

export default MovieCard;
