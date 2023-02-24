import React from 'react'
import Testimonial from './components/Testimonial'
import data from './testimonials'

function App () {
  return (
    <main className='main overflow-x-hidden'>
      <div className='slider flex items-center'>
        {data.map((data) => (
          <Testimonial
            key={data.id}
            img={data.img}
            testimonial={data.testimonial}
            name={data.name}
            job={data.job}
          />
        ))}
      </div>
    </main>
  )
}

export default App
