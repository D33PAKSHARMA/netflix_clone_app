import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative cursor-pointer m-[5px]">
        <img
          className="w-full h-auto block "
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className=" absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white ">
          <p className="flex justify-center items-center font-bold h-full text-center ">
            {movie?.title}
          </p>
          <p className="absolute top-3 left-3 ">
            {like ? <AiFillHeart /> : <AiOutlineHeart />}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
