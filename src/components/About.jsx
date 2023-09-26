import { BiSolidRightArrow } from 'react-icons/bi'
import resume from "../assets/Michaels-resume.pdf"

const About = () => {
    const items = [
        {
            skill: 'REACTJS'
        },
        {
            skill: 'REACT NATIVE'
        },
        {
            skill: 'REDUX'
        },
        {
            skill: 'JAVASCRIPT'
        },
        {
            skill: 'TYPESCRIPT'
        },
        {
            skill: 'ANIMATIONS'
        },
        {
            skill: 'GIT & GITHUB'
        },
        {
            skill: 'NPM'
        },
        {
            skill: 'TAILWIND CSS'
        },
        {
            skill: 'AXIOS/FETCH API'
        },
    ]

  return (
    <div className="flex flex-col items-start justify-center w-full mt-28 px-8 md:px-14 md:mt-40 lg:flex-row lg:px-24 
    lg:items-center lg:justify-between xl:px-52 xl:mt-72">
        <div className="flex flex-col items-start justify-center w-full lg:w-[55%]">
            <div className="flex items-center justify-start w-full mb-5 md:w-[60%] lg:w-full">
               <p className="text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1">
                   01.
               </p>
               <p className="text-[23px] font-medium ml-2 whitespace-nowrap text-[#C4C4C4] md:text-[27px] md:font-bold lg:text-[28px]">
                   About Me
               </p>
               <hr className="border-[0.01em] border-[#3d3b4b] w-full ml-2" />
            </div>
            <div className='md:w-[90%] lg:-[100%]'>
                <p>Much like the Autobots of Cybertron, I was forged in the fires of innovation, emerging as a frontend developer with an insatiable curiosity for the infinite possibilities of the web. My journey began on the binary plains of Cybertron, where I honed my skills amidst the cascading streams of data and the electric hum of servers.As a frontend developer, I wield a formidable arsenal of programming languages and tools, each as essential as the Energon cubes that power Cybertron.My mission on this cosmic voyage is to craft seamless, user-centric interfaces that bridge the gap between humans and machines. Just as I led the Autobots in the battle for freedom, I now lead teams in the pursuit of excellence, orchestrating harmonious symphonies of code.In my travels, I've collaborated with a multitude of species from across the universe, from fellow developers to designers and project managers. Together, we've embarked on epic quests to deliver pixel-perfect designs, ensuring that every website or application I touch is as awe-inspiring as the landscapes of Cybertron itself.</p>
            </div>
        </div>

        <div className="mt-5 md:w-[60%] md:mt-8 lg:w-[40%] lg:mt-0 lg:ml-10">
            <div className='xl:mb-6'>
                <h1 className="text-[21px] font-bold mb-4 text-[#df91f7] xl:text-[27px]">
                    Skills
                </h1>
            </div>
            <div className="flex flex-wrap items-start justify-between w-full">
                {items.map((item)=>{
                    return(
                <div key={item.index} className="flex items-center justify-start w-[40%] mb-8">
                    <BiSolidRightArrow className='text-[#feed7a] text-[12px]' />
                    <p className="text-[12px] text-[#feed7a] ml-2 whitespace-nowrap lg:text-[13px] xl:text-[16px]">
                        {item.skill}
                    </p>
                </div>

                    )
                })
                }
        
            </div>

            <a href='#' download className='text-[13px] font-medium text-[#df91f7] underline xl:mt-6'>
                And a whole lot more
            </a>
        </div>
    </div>
  )
}

export default About