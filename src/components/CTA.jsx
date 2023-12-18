import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2}`}>
        Let's Discuss A  <span className='text-gradient'> Project </span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Got a project in mind? Think that I'll be a good fit for your team? Let's connect and talk business. I'm always glad to expand my network and explore new business opportunities!
      </p>
    </div>
    <div className={`${ styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button/>
    </div>
  </section>
)

export default CTA