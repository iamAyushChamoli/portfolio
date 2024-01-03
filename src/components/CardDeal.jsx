import React from 'react'
import { github } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Projects that<br className='sm:block hidden'/>
        I've worked on
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Some Web Developement projects that I've created using various industry relevant
        and in-demand technologies.
        <br className='sm:block hidden'/>
        Check out my <a href='https://github.com/iamAyushChamoli' className='hover:text-secondary
        animate-pulse cursor-pointer' target='_blank' >Github Profile</a> for Source Code, Networking, and more!
      </p>
      <Button styles='mt-10 radius-[10px]'/>
    </div>
    <div className={layout.sectionImg}>
      <img src={github} alt="card" className=' hover:animate-spin  rounded-[100%]' />
      <div className='absolute z-[0] w-[40%]   h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[0] w-[80%]  h-[80%] bottom-40 rounded-full white__gradient'/>
      <div className='absolute z-[0] w-[50%]  h-[50%] bottom-20 blue__gradient'/>
      
    </div>
  </section>
)
export default CardDeal