import React from 'react'
import Testimonial from './components/Testimonial'
import data from './testimonials'

function App () {
  return (
    <main className='main'>
      <div className='slider'>
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
