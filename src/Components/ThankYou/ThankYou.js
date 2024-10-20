import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import './ThankYou.css'
import { CgDice4 } from "react-icons/cg";
const ThankYou = () => {
    return(
        <div className="thankyoucontainer">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",backgroundImage:"url(./image/c4.png)"}}>
                    <h1 style={{fontSize:"14px",fontWeight:"500"}}>Your Cart</h1>
                  
                    <Link to="/">  <IoMdClose/></Link>
                </div>
            <img class="w-full" src="./image/c4.png" alt="Sunset in the mountains"/>
            </div>
        </div>
    )
}

export default ThankYou;