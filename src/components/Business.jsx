import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Got A Freelance Project? <br className="sm:block hidden" /> Let Me Help!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        If you're looking for a quick, one-time collaboration for a Content Writing or Web Developing Project,
        You can ping me up on any of my socials to discuss the details as well as the budget!
      </p>

      <Button styles={`mt-7 mb-3`} />
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Most of my clients come back again for new business opportunities. Don't be shy to
        be one of my regulars. I gladly offer great discounts for recurring clients!
      </p>
      <div className='absolute z-[0] w-[40%] h-[35%] right-[90%] top-50 pink__gradient'/>
      <div className='absolute z-[0] w-[80%] h-[80%] right-[90%] rounded-full white__gradient'/>
      <div className='absolute z-[0] w-[50%] h-[50%] right-[90%] bottom-50 blue__gradient'/>
     
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;