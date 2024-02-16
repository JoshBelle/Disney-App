import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

const Slider = () => {
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    getTrendingMovies()
  },[])

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then(resp => {
        console.log(resp.data.results)
    setMovieList(resp.data.results)}
    )
  }

  return (
    <div>
        <Carousel
        loop={true}
        autoplay={true}
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
        )}
        >
        {movieList.map((item, index) => (
        <img src={IMAGE_BASE_URL + item.backdrop_path} className="transition-all duration-75 ease-in-out hover:border-[4px] border-gray-100 min-w-full h-[310px] object-cover object-left-top mr-5 rounded-xl "/>
        ))}
        </Carousel>
    </div>
  )
}

export default Slider
