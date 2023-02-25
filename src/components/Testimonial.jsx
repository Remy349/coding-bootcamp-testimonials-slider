import { iconPrev, iconNext } from '../assets/svg/svg'

const TestimonialButton = ({ img, handleClick }) => {
  return (
    <span
      className='bg-white w-12 h-10 flex items-center justify-center cursor-pointer
      duration-300 hover:bg-slate-200'
      onClick={() => handleClick()}
    >
      <img className='w-3' src={img} alt='Icon arrow' />
    </span>
  )
}

const Testimonial = ({ img, testimonial, name, job }) => {
  const next = () => {
    const slider = document.querySelector('.slider')
    slider.style.marginLeft = '-100%'
  }

  const prev = () => {
    const slider = document.querySelector('.slider')
    slider.style.marginLeft = '0%'
  }

  return (
    <figure
      className='slider__section flex items-center flex-col gap-y-16
      lg:flex-row lg:items-center'
    >
      <div
        className='slider__section-image flex flex-col items-center w-64 relative
        lg:order-1 lg:w-3/5 xl:ml-20'
      >
        <img
          className='slider__section-img w-64 h-full rounded-lg shadow-md'
          src={img}
          alt='Profile'
        />
        <div
          className='flex bg-white shadow-md absolute -bottom-5 rounded-t-full
          rounded-b-full overflow-hidden lg:left-36'
        >
          <TestimonialButton img={iconPrev} handleClick={prev} />
          <TestimonialButton img={iconNext} handleClick={next} />
        </div>
      </div>
      <div
        className='slider__section-testimonial text-center lg:text-left
        lg:w-2/5'
      >
        <blockquote className='mb-4'>
          <p
            className='text-dark-blue font-light text-lg lg:text-2xl xl:text-4xl'
          >
            {testimonial}
          </p>
        </blockquote>
        <figcaption className='lg:flex lg:items-center lg:gap-x-2 lg:text-lg xl:text-xl'>
          <p className='text-dark-blue font-bold'>{name}</p>
          <span className='text-grayish-blue font-medium'>{job}</span>
        </figcaption>
      </div>
    </figure>
  )
}

export default Testimonial
