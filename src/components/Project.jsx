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
                bg-gray-200 
                shadow-lg 
                border 
                border-gray-300
                m-6
                p-2
                rounded-xl
                max-w-md
                flex
                flex-col
                w-[400px]
                transition
                items-center
                group
            "
        >
            <h1 className='group-hover:text-purple-600 transition '>{title}</h1>
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
                    m-2 
                    p-2 
                    text-center 
                    rounded-md 
                    w-full
                    text-purple-600
                ">
                    {description}
                </h3>
                <img className='group-hover:scale-102 rounded-lg transition' src={imageUrl}/>
            </a>
        </div>
     );
}
 
export default Project;