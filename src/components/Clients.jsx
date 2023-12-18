import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div>
    <h1 className='flex-wrap font-poppins font-semibold
          ss:text-[72px] text-[52px] text-white ss:leading-[100px]
          leading-[75px] '>
            <span className='text-gradient'> Companies </span>{" "}
            That I've worked with<br className='block'/>{" "}  
              
    </h1>
    <br/>
    
    </div>
    <div className={`${styles.flexCenter}  flex-wrap w-full`}>
      {clients.map((client)=>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px]
        min-w-[120px]`}>
            <img src={client.logo} alt='logo' className={`relative rounded-[20px] max-h-[80px] max-w-[180px]
            sm:w-[180px] w-[80px] object-contain animate-pulse cursor-pointer mb-[20px] mt-[20px]`} />
          </div>
      ))}
      
    </div>
  </section>
)

export default Clients