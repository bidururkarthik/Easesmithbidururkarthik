import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Products.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { IoIosHeart } from "react-icons/io";

const Products = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const [isFilled, setIsFilled] = useState(false);

  const toggleHeart = () => {
    setIsFilled(!isFilled);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const ProductList = [
    {
      id: 1,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p1.jpg"
    },
    {
      id: 2,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p2.jpg"
    },
    {
      id: 3,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p3.jpg"
    },
    {
      id: 4,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p1.jpg"
    },
    {
      id: 5,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p2.jpg"
    },
    {
      id: 6,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p3.jpg"
    },

    {
      id: 7,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p1.jpg"
    },
    {
      id: 8,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p2.jpg"
    },
    {
      id: 9,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: "4.9",
      lowestprice: "359",
      highestprice: "299",
      image: "./image/p3.jpg"
    },
  ];

  return (
    
    <div className="product_container" style={{marginTop:"40px"}}>
      <div className="sidebar">
      <div class="filter-header" style={{display:"flex"}}>
        <h3>Filter</h3>
        <button class="clear-all">CLEAR ALL</button>
       </div>
      {/* <div>

      

      <button
        className={`accordion ${activeIndex === 1 ? "active" : ""}`}
        onClick={() => toggleAccordion(1)}
      >
        Section 2
      </button>
      <div className="panel" style={{ display: activeIndex === 1 ? "block" : "none" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <button
        className={`accordion ${activeIndex === 2 ? "active" : ""}`}
        onClick={() => toggleAccordion(2)}
      >
        Section 3
      </button>
      <div className="panel" style={{ display: activeIndex === 2 ? "block" : "none" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div> */}

       <div className="filter-category">
       <button
        className={`accordion ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => toggleAccordion(0)}
        style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
      >
        Type of Plants<FiPlus style={{marginLeft:"7px"}}/>
      </button>
      <div className="panel" style={{ display: activeIndex === 0 ? "block" : "none" }}>
         <div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
           

         </div>
      </div>
       </div>
       <div className="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Price<FiPlus style={{marginLeft:"7px"}}/></div>
       <div class="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Nursery<FiPlus style={{marginLeft:"7px"}}/></div>
       <div class="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Ideal Plants Location<FiPlus style={{marginLeft:"7px"}}/></div>
       <div class="filter-category">
       <button
        className={`accordion ${activeIndex === 1 ? "active" : ""}`}
        onClick={() => toggleAccordion(1)}
        style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}
      >
        Indoor/Outdoor<FiPlus style={{marginLeft:"7px"}}/>
      </button>
      <div className="panel" style={{ display: activeIndex === 1 ? "block" : "none" }}>
      <div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
            <div className="filter-category" style={{display:"flex"}}>
              <input type="checkbox"/>
              <label>Flowers(12)</label>
            </div>
           

         </div>
      </div>
        
       </div>
       <div class="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Maintenance<FiPlus style={{marginLeft:"7px"}}/></div>
       <div class="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Plant Size<FiPlus style={{marginLeft:"7px"}}/></div>
       <div class="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Water Schedule<FiPlus style={{marginLeft:"7px"}}/></div>
       <div class="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Color<FiPlus style={{marginLeft:"7px"}}/></div>
       <div class="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Seasonal<FiPlus style={{marginLeft:"7px"}}/></div>
       <div class="filter-category" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>Light Efficient<FiPlus style={{marginLeft:"7px"}}/></div>
           
      </div>

      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div className="product_list">
        {ProductList.map((item) => (
          <div key={item.id} className="productcard">
            <div className="product_image_container">
            <div>
              <button
                onClick={toggleHeart}
                style={{ backgroundColor: "transparent", marginLeft: "230px", border: "none", cursor: "pointer" }}
              >
                {isFilled ? (
                  <IoIosHeart style={{ fontSize: "20px", color: "red" }} />
                ) : (
                  <IoIosHeartEmpty style={{ fontSize: "20px" }} />
                )}
              </button>
            </div>
              <img src={item.image} alt={item.name} className="product_image" />
            </div>

            <button
              style={{
                backgroundColor: "#165315",
                width: "268px",
                height: "36px",
                color: "white"
              }}
            >
              <Link to="/ThankYou">View Product</Link>
            </button>

            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "500", height: "30px" }}>
                {item.name}
              </h3>
              <p style={{ color: "#838383", height: "20px" }}>{item.description}</p>

              <div className="all_horizontal_direction">
                <div style={{ display: "flex" }}>
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                </div>
                <div>
                  <p style={{ color: "#838383", marginLeft: "7px", height: "22px" }}>
                    {item.rating}
                  </p>
                </div>
              </div>

              <div className="all_horizontal_direction">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#5E5A5A",
                    fontSize: "16px",
                    fontWeight: "400",
                    marginRight: "10px",
                    textDecoration: "line-through",
                    height: "24px"
                  }}
                >
                  <FaIndianRupeeSign style={{ color: "#5E5A5A" }} />
                  {item.lowestprice}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#5E5A5A",
                    fontWeight: "bold",
                    fontSize: "20px",
                    height: "30px"
                  }}
                >
                  <FaIndianRupeeSign />
                  {item.highestprice}
                </div>
              </div>

              <div className="all_horizontal_direction" style={{ marginTop: "8px" }}>
                <div>
                  <button
                    style={{
                      backgroundColor: "#165315",
                      marginRight: "10px",
                      width: "149px",
                      height: "37px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "5px",
                      color: "white",
                      borderRadius: "10px"
                    }}
                  >
                    <RiSubtractFill style={{ color: "white" }} />
                    Add to Cart
                    <FiPlus style={{ color: "white" }} />
                  </button>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "white",
                      borderColor: "#165315",
                      color: "#165315",
                      borderWidth: "1px",
                      borderRadius: "10px",
                      borderStyle: "solid",
                      width: "114px",
                      height: "37px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "5px"
                    }}
                  >
                    Buy on Rent
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
              style={{
                backgroundColor: "#165315",
                width: "200px",
                height: "36px",
                borderRadius:"50px",
                color: "white",
                margin:"20px"
              }}
            >
              View More
            </button>

      </div>

    </div>
      
    

  
  );
};

export default Products;
