import { Link } from "react-router";

const Project = ({
    title,
    description,
    imageUrl,
    url
}) => {
    return ( 
        <div
            className="
                bg-gray-300
                m-1
                p-2
                rounded-xl
                max-w-md
                flex
                flex-col
                w-[400px]
                h-[450px]
                transition
                items-center
                group
            "
        >
            <h1 className='group-hover:text-purple-600 group-hover:scale-105 transition '>{title}</h1>
            <a
            href={url}
            className="
                flex
                flex-col
                justify-center
                items-center
            "
            >
                
                <h3 className="
                    overflow-auto 
                    bg-gray-600 
                    m-2 
                    p-2 
                    text-center 
                    rounded-md 
                    w-full
                    text-purple-600
                ">
                    {description}
                </h3>
                <img className='h-[300px] w-[300px] rounded-lg'  src={imageUrl}/>
            </a>
        </div>
     );
}
 
export default Project;