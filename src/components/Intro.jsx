import { FiGithub } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'
import { RiTwitterLine } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Intro = () => {

  return (
    <div className="poppins flex flex-col items-start justify-end w-full px-8 mt-56 md:px-14 md:w-[85%] lg:w-full lg:px-24 lg:mt-40 xl:px-52 xl:mt-48">
        <p className="text-[14px] text-[#C4C4C4] font-light mb-1 md:font-light md:mb-2 md:text-[16px] lg:mb-1">
            Hi, Welcome to 
        </p>
        <h1 className=" text-[38px] font-bold leading-[75px]  mb-1 txt md:text-[48px] lg:text-[55px] xl:text-[80px] font-peralta">
     ROSEVERSE 
        </h1>
        <div className='flex z-10 justify-center sm:mt-0 mt-[-60px] sm:mb-0 mb-[-20px] font-peralta'>
            <h1
              className='sm:text-[80px] text-[50px] txt uppercase font-bold leading-[114px] z-10 flex justify-center items-center '
       
            >
              Ma
            </h1>
            <div
            
              className='sm:w-[152px] w-[450px] h-[50px] sm:h-[80px] sm:border-[18px] border-[12px] border-white rounded-r-[50px]  sm:mt-3 mt-7 sm:mx-2'
            ></div>

            <h1
              className='txt sm:text-[80px] text-[45px] uppercase font-bold leading-[114px] z-10 flex justify-center items-center'
     
            >
              ness
            </h1>
          </div>

        
        <p className="text-[13px] font-normal leading-5 text-[#C4C4C4] md:text-[15px] md:leading-6 lg:text-[16px] lg:w-[65%] xl:w-[60%] xl:text-[18px] xl:leading-8 font-peralta">
        Greetings, fellow beings of the digital realm! I am Optimus Prime, your trusty guide through the intricate and ever-evolving world of frontend development. Just as I have protected Cybertron, I am now dedicated to safeguarding the user experiences of the virtual cosmos..
        </p>
       
        <div className="w-full mt-12 lg:hidden">
          <div className="flex items-start justify-between w-[45%] mb-1 text-[#9c38ff] md:mb-2">

            <motion.div
               animate={{ x: [-100, 0], opacity: [0.5, 1], scale: 1 }}
               transition={{
               duration: 1.5,
               delay: 0.5,
               }}
              initial={{ opacity: 0.2, scale: 0 }}
            >
              <a href="https://github.com/Tobiloba007?tab=repositories" target="_blank" rel="noreferrer">
                <FiGithub className='text-[16px] md:text-[18px]' />
              </a>
            </motion.div>

            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1.5,
              delay: 1,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <a href="https://www.linkedin.com/in/michael-olaniyan-bb1359200/" target="_blank" rel="noreferrer">
                <SlSocialLinkedin className='text-[16px] md:text-[18px]' />
              </a>
            </motion.div>
            
            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1.5,
              delay: 1.5,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <a href="https://twitter.com/ipiss_chanpagne" target="_blank" rel="noreferrer">
                <RiTwitterLine className='text-[18px] md:text-[20px]' />
              </a>
            </motion.div>

            <motion.div
              animate={{ x: [-400, 0], opacity: [0.5, 1], scale: 1 }}
              transition={{
              duration: 1.5,
              delay: 2,
              }}
             initial={{ opacity: 0.2, scale: 0 }}
            >
              <a href="https://api.whatsapp.com/send/?phone=09090529118&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                <FaWhatsapp className='text-[18px] md:text-[20px]' />
              </a>
            </motion.div>

          </div>
          <hr className='border-[0.01em] border-[#3d3b4b] w-[48%]' />
        </div>

    </div>
  )
}

export default Intro