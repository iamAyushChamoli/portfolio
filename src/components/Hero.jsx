import styles from '../style'
import {discount, robot} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  
    <section id='home' className={`flex
    md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} 
      flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className='flex flex-row items-center py-[6px] py-3 px-5 bg-discount-gradient
        rounded-[10px] mb-2'>
          <img src={discount} alt="discount" 
          className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>Full Stack Developer
          <br className='sm:block'/> 
          </span> &{" "}
          <span className='text-white'>  
            SEO Writer
          </span>  
          </p>
        </div>
        <div className='flex flex-row justify-between
        items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold
          ss:text-[72px] text-[52px] text-white ss:leading-[100px]
          leading-[75px]'>
            Ayush<br className='sm:block  hidden'/>{" "}
              <span className='text-gradient'> Chamoli </span>{" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>
        {/* <h1 className=' font-poppins font-semibold
          ss:text-[68px] text-[52px] text-white ss:leading-[100px]
          leading-[75px] w-full'>
            Payment Method
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Hello! It's nice to have you here! Navigate your way around to explore
         my portfolio. I'm always open to connect and discuss projects so feel free to 
         ping my socials or 
         <a href='#contact' className='hover:text-secondary animate-pulse '>  send me a mail</a>.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='billing' className='w-[100%] h-[100%]
        relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
      <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient'/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>

    </section>
  
)

export default Hero