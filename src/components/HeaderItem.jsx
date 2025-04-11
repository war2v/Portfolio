

const HeaderItem = ({children, href, className}) => {
    return ( 
        <a href={href}><li className={`flex items-center gap-x-1 rounded-xl list-none border-white p-2 m-2 text-purple-600 hover:text-purple-500 hover:scale-110 transition ${className}`}>{children}</li></a>
     );
}
 
export default HeaderItem;