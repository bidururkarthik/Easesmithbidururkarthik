import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <section style={{ backgroundColor: "#010F14" }}>
        <footer className="p-4 mt-16 grid md:grid-cols-2 gap-12 xl:col-span-2 xl:mt-0">
            <div className="flex flex-col items-center">
                <div className='flex'>
                <img
                    src="./image/f1.png" // Replace with your logo path
                    alt="Company Logo"
                    className="mb-4 " // Adjust size as needed
                />
              
                </div>
                
            </div>
            <div className="">
               
                <form className="mt-6 sm:flex sm:max-w-md">
                    
                     <div className='flex'>
                <img
                    src="./image/f2.png" // Replace with your logo path
                    alt="Company Logo"
                    className="mb-4 " // Adjust size as needed
                />
              
                </div>
                </form>
            </div>
        </footer>
        </section>
    );
}

export default Footer;
