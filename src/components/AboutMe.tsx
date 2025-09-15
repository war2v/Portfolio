import { BiDownload, BiLogoGithub, BiLogoLinkedin, BiPlus } from "react-icons/bi"
import { Link } from "react-router"

export const AboutMe = () => {
    return (
        <div className="grid md:grid-cols-2 text-neutral-800 justify-center items-center p-4 m-2 sm:mb-10 w-full">
            <div className="flex flex-col justify-center w-full border border-slate-300 rounded-lg p-4">
                <img className="rounded-xl" alt="Profile Picture" src="IMG_1465.JPG"/>
            </div> 
            <div className="flex flex-col justify-between items-center w-full h-3/4 text-lg gap-y-4 p-4">
                    <div className="flex flex-col justify-between w-3/4 h-full text-lg gap-y-4 p-4">
                        <h1 className="flex items-center gap-x-3"><BiPlus />Warren A. Russell</h1>
                        <h1 className="flex items-center gap-x-3"><BiPlus />Based in Nashville, Tennessee</h1>
                        <div className="flex flex-col justify-center gap-x-3">
                            <div className="flex items-center gap-x-3">
                                <BiPlus />Bachelor of Science, Computer Science
                            </div>
                            <h1 className="flex items-center text-xs ml-4">Middle Tennesse State University, 2024</h1>
                        </div>
                        <div className="flex flex-col justify-center gap-x-3">
                            <div className="flex items-center gap-x-3">
                                <h1 className="flex items-center gap-x-3"><BiPlus />Desired Roles </h1>
                            </div>
                            <h1 className="flex items-center text-xs ml-4">Full-stack / Front-End / Back-End / Software Engineer</h1>
                        </div>
                    
                        
                        <div className="w-full">
                            <div className="flex justify-evenly w-full text-purple-500 text-7xl">
                                <h1 className="border border-slate-300 rounded-lg"><Link to={'https://www.linkedin.com/in/warren-russell-217b0b150/'}><BiLogoLinkedin/></Link> </h1>
                                <h1 className="border border-slate-300 rounded-lg"><Link to={'https://github.com/war2v'}><BiLogoGithub/></Link></h1>
                                <h1 className="flex items-center text-purple-500 gap-x-3"><BiDownload className="animate-pulse"/><span className="text-xs">My Resume</span></h1>
                            </div>
                        </div>

                    </div>
                    

            </div>
        </div>
    )
}