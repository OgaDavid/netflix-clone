import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Movie } from '../typings'
import { baseUrl } from '../constants/movie'
import { FaPlay } from "react-icons/fa"
import { InformationCircleIcon } from "@heroicons/react/24/solid"


type Props = {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
      setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    },[netflixOriginals])
    console.log(movie);
  return (
    <div className='flex flex-col space-y-2 py-36 md:space-y-4 lg:justify-end lg:pb-12'>
        <div className='absolute top-0 left-0 w-screen -z-50 h-[95vh]'>
            <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path} `} alt="Movie backdrop" fill style={{objectFit: "cover"}}/>
        </div>

        <h1 className='text-2xl lg:text-7xl md:text-4xl font-bold'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:max-text-2xl text-shadow-md'>{movie?.overview}</p>

        <div className='flex space-x-3'>
            <button className='home-btn bg-white text-black'><FaPlay className='text-black md:h-7 md:w-7'/>Play</button>
            <button className='home-btn glassmorphism'>
                More Info
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Banner