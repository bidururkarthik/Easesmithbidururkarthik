import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const RoadMap = () => {

  const items = [
    "Launch of EthAi Officially",
    "Development of Core AI Agents",
    "User Onboarding Campaign",
    "Community Engagement Initiatives"
  ]; 

  const items2 = [
    "Launch of EthAi Officially",
    "Development of Core AI Agents",
    "User Onboarding Campaign",
    "Community Engagement Initiatives"
  ];

  const items3 = [
    "Launch of EthAi Officially",
    "Development of Core AI Agents",
    "User Onboarding Campaign",
    "Community Engagement Initiatives"
  ];

  return (
    <section style={{ backgroundColor: "#00161D" }}>
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl" style={{color:"white"}}>RoadMap</h2>
     

<div className="flex flex-col md:flex-row items-center justify-between p-6" style={{color:"white"}}>
      {/* Left Image */}
      <div className="w-full md:w-1/2 md:pl-6">
     
      <div className="mb-4">
        <span className="bg-blue-500 text-xs font-semibold px-2 py-1 rounded">PHASE 1</span>
      </div>
      <h2 className="text-2xl font-bold mb-4">Kicking Off</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <FaRegCheckCircle className="text-green-400" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
   
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-6">
      <img
          src="./image/r1.png" // Replace with your image URL
          alt="Description"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between p-6" style={{color:"white"}}>
      {/* Left Image */}
      <div className="w-full md:w-1/2 md:pl-6">
      

        <img
          src="./image/r2.png" // Replace with your image URL
          alt="Description"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-6">
     
     <div className="mb-4">
       <span className="bg-blue-500 text-xs font-semibold px-2 py-1 rounded">PHASE 2</span>
     </div>
     <h2 className="text-2xl font-bold mb-4">Kicking Off</h2>
     <ul className="space-y-3">
       {items2.map((item, index) => (
         <li key={index} className="flex items-center space-x-3">
           <FaRegCheckCircle className="text-green-400" size={20} />
           <span>{item}</span>
         </li>
       ))}
     </ul>
  
     </div>
    </div>

   
<div className="flex flex-col md:flex-row items-center justify-between p-6" style={{color:"white"}}>
      {/* Left Image */}
      <div className="w-full md:w-1/2 md:pl-6">
     
      <div className="mb-4">
        <span className="bg-blue-500 text-xs font-semibold px-2 py-1 rounded">PHASE 3</span>
      </div>
      <h2 className="text-2xl font-bold mb-4">Kicking Off</h2>
      <ul className="space-y-3">
        {items3.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <FaRegCheckCircle className="text-green-400" size={20} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
   
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-6">
      <img
          src="./image/r3.png" // Replace with your image URL
          alt="Description"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>


    
   
    
      </div>
    </div>
    </section>
  )
}

export default RoadMap;
