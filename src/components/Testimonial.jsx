import { iconPrev, iconNext } from '../assets/svg/svg'

const TestimonialButton = ({ img }) => {
  return (
    <span
      className='bg-white w-12 h-10 flex items-center justify-center cursor-pointer
      duration-300 hover:bg-slate-200'
    >
      <img className='w-3' src={img} alt='Icon arrow' />
    </span>
  )
}

const Testimonial = ({ img, testimonial, name, job }) => {
  return (
    <figure className='slider__section flex items-center flex-col gap-y-16'>
      <div className='slider__section-image flex flex-col items-center w-64 relative'>
        <img
          className='slider__section-img w-64 h-full rounded-lg shadow-md'
          src={img}
          alt='Profile'
        />
        <div
          className='flex bg-white shadow-md absolute -bottom-5 rounded-t-full
          rounded-b-full overflow-hidden'
        >
          <TestimonialButton img={iconPrev} />
          <TestimonialButton img={iconNext} />
        </div>
      </div>
      <div className='slider__section-testimonial text-center'>
        <blockquote className='mb-4'>
          <p className='text-dark-blue font-light text-lg'>{testimonial}</p>
        </blockquote>
        <figcaption>
          <p className='text-dark-blue font-bold'>{name}</p>
          <span className='text-grayish-blue font-medium'>{job}</span>
        </figcaption>
      </div>
    </figure>
  )
}

export default Testimonial
