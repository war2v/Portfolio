import Header from "../components/Header";
import Hero from "../components/Hero";

const Blog = () => {
    return ( 
        <div className='bg-slate-100 pb-10'>
            <Header/>
            <Hero>
                <p className='text-3xl text-center p-2 pt-4'><span className='text-purple-500'>Software Engineer</span><span className='text-purple-500'> | Full-Stack Developer</span></p>
                <div className='flex flex-col text-xl text-center p-2 pt-4 m-4 gap-y-4'>
                    <p > 
                        Hi, I’m Warren Russell, a Computer Science graduate passionate Blog building powerful, user-focused applications that solve real problems. I specialize in full-stack development using JavaScript, Python, Next.js, and SQL, and I’ve also worked with C++ for lower-level systems and algorithm-heavy projects.
                    </p>
                    <p>
                        Over the past year, I’ve developed a series of personal projects—from a Leetcode progress tracker to a real-time Google Docs clone—that showcase my ability to design, build, and ship full-featured applications.
                        What drives me is the challenge of transforming complex ideas into clean, scalable solutions. Whether it's automating a task, solving a performance bottleneck, or designing a sleek user interface, I’m always up for the challenge.
                    </p>
                    <p>
                        I'm currently looking for full-time opportunities as a software engineer where I can grow, contribute, and make an impact alongside a great team.
                        When I'm not coding, you’ll find me learning new tech, writing dev blogs, or leveling up through mock interviews and system design deep dives.
                    </p>
                </div>
                
            </Hero>
        </div>
     );
}
 
export default Blog;