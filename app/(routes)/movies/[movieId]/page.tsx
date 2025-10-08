import React from 'react'

export default function PageMovieId({params}: {params: {movieId: string}}) {
  return (
    <div>{params.movieId}</div>
  )
}
