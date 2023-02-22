import { iconPrev, iconNext } from '../assets/svg/svg'

const Testimonial = ({ img, testimonial, name, job }) => {
  return (
    <figure className='slider__section'>
      <div>
        <img src={img} alt='Profile' />
        <div>
          <span>
            <img src={iconPrev} alt='Icon prev' />
          </span>
          <span>
            <img src={iconNext} alt='Icon next' />
          </span>
        </div>
      </div>
      <div>
        <blockquote>
          <p>{testimonial}</p>
        </blockquote>
        <figcaption>
          <p>{name}</p>
          <span>{job}</span>
        </figcaption>
      </div>
    </figure>
  )
}

export default Testimonial
