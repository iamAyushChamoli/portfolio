import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-[20%]
    bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary
    w-[100%] h-[100%] rounded-[20%] animate-pulse`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium
        text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>
          Let's
          </span>
        </p>
        <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain'/>

      </div>
      <p className='font-poppins font-medium
        text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>
          Connect!
          </span>
        </p> 
    </div>
    </div>
  
)

export default GetStarted