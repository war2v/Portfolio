import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";

const ContactPage = () => {
    return ( 
        <div className='bg-slate-100 pb-10'>
            <Header/>
            <div className="text-center font-semibold text-xl">
                <Hero>Email: war2v@mtmail.mtsu.edu</Hero>
            </div>
            
            <Contact/>
        </div>
     );
}
 
export default ContactPage;