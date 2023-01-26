import Image from 'next/image'
import { Movie } from '../typings'
import { useState, useEffect } from 'react'
import { baseUrl } from '../constants/movie'

interface Props {
    netflixOriginals: Movie[]
  }

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(
          netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
      }, [netflixOriginals])

  return (
    <div>
        <div className='absoute top-0 left-0 h-[95hv] w-screen'>
            <Image
                  fill={true}
                  src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
                  alt={'photo'}            
                  />
        </div>
    </div>
  )
}

export default Banner