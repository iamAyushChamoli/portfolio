import React from 'react'
import { feedback } from '../constants'
import styles,{layout} from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div  className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient '/>    
    <div className='w-full items-center sm:flex-row flex-column flex justify-between
    sm:mb-16 mb-6 relative z-[1]'> 
      <h1 className={styles.heading2}>
        Reviews From  <br className='md:block hidden'/> Previous Clients
      </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px] `}>
          Here's what my previous clients and colleagues have to say about my work.
          When in doubt, it's best to ask from someone who's been in your shoes!
        </p>
        
      </div>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center
    w-full feedback-container relative z-[1]'>
      {feedback.map((card)=>(
          <FeedbackCard key={card.id} {...card} />
        ))}
      <div className='absolute z-[0] w-[40%] h-[35%] right-[90%] top-50 pink__gradient'/>
      <div className='absolute z-[0] w-[80%] h-[80%] right-[90%] rounded-full white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] right-[90%] bottom-50 blue__gradient'/>
     
    </div>
  </section>
)

export default Testimonials