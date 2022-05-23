import React from 'react'
import image from '../apples.JPG'

function Home() {
  return (
    <main>
      <img 
        src={image} 
        alt="background image" 
        className='absolute object-cover w-full h-full' 
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64'>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug'>Mojn! I'm Nikolaj</h1>
      </section>
    </main>
  )
}

export default Home