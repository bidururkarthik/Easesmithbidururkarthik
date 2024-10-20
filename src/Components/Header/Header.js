import './Header.css'

const Header = () => {
    return(
        <>
          <div  className="Header" style={{backgroundColor:"#165315",color:"white"}}>
           
               <div className='smallHeader'>
                  <p>Free Shipping on orders above 999/-</p>
               </div>

               <div>
                  <p>Call us on: +91 98768 05120</p>
                </div>
               
          </div>
        </>
    )
}

export default Header;