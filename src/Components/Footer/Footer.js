import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <>
         <footer className="footer">
       
        <div className="footer-column subscribe">
            <h3>Subscribe to our Newsletter</h3>
            <p>Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necesbus Enim</p>
            <input type="email" placeholder="Enter Your Email Address"/>
            <button>Subscribe</button>
        </div>

     
        <div className="footer-column">
            <h3>About Us</h3>
            <a href="#">Our Story</a>
            <a href="#">Blogs</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
            <a href="#">Help & Support</a>
        </div>

     
        <div className="footer-column">
            <h3>Our Services</h3>
            <a href="#">Book Maali</a>
            <a href="#">Plant Day Care</a>
            <a href="#">Rent Plants</a>
            <a href="#">Plants & Pots</a>
            <a href="#">Gardening Tools</a>
        </div>

      
        <div className="footer-column">
            <h3>Useful Links</h3>
            <a href="#">My Account</a>
            <a href="#">Orders & Returns</a>
            <a href="#">Track Order</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
        </div>

      
        <div className="footer-column">
            <h3>Get in Touch</h3>
            <p>Address: F-262, First Floor,Sushant Lok Phase-III,Sector-57, Gurgaon, Haryana, India 122003</p>
            <p>Call: +919958287272</p>
            <p>Email: care@chaperoneplants.com</p>
            <div className="social-icons">
            <FaInstagram style={{width:"24px",height:"26px"}}/>
            <FaYoutube style={{width:"24px",height:"26px"}}/>
            <FaTwitter style={{width:"24px",height:"26px"}}/>
            <FaLinkedin style={{width:"24px",height:"26px"}}/>
            </div>
        </div>

       
    </footer>
    <div style={{backgroundColor:"#F0FFE5",backgroundSize:"cover",paddingLeft:"58px",paddingRight:"58px"}}> 
    <h2>CHAPERONE</h2>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        
        <div class="social-icons">
            <FaInstagram style={{width:"24px",height:"26px"}}/>
            <FaYoutube style={{width:"24px",height:"26px"}}/>
            <FaTwitter style={{width:"24px",height:"26px"}}/>
            <FaLinkedin style={{width:"24px",height:"26px"}}/>
        </div>
        
        <div class="copyright">
            © 2023, chaperone.com All rights reserved.
        </div>
        </div>
        </>
    )
}


export default Footer;