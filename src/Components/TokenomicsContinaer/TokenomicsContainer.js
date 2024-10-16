

export default function TokenomicsContainer() {
  return (
 
    <section style={{ backgroundColor: "#00161D" }}>
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl" style={{color:"white"}}>Tokenomics</h2>
     

<div className="flex flex-col md:flex-row items-center justify-between p-6">
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src="./image/t1.png" // Replace with your image URL
          alt="Description"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-6">
      <img
          src="./image/t2.png" // Replace with your image URL
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
