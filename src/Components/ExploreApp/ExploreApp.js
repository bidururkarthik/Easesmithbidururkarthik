// const ExploreApp = () => {
//     return(
//         <section style={{ backgroundColor: "#00161D" }}>
//         <div className=" py-24 sm:py-32">
//           <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
//             <div className="mt-10 grid gap-4 sm:mt-16">
//             <div className=" p-8 rounded-lg">
//         <div className="grid grid-cols-2 gap-6 features-grid features-grid">
//          <h1>Explore Our dApp</h1>
//          <p>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
//          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
//                             <button className="WhitepaperButton">ReadMore</button>
//                         </div>
//         </div>
//       </div>
//             </div>
//           </div>
//         </div>
//         </section>
//     )
// }

// export default ExploreApp;





const ExploreApp = () => {
    return (
        <section style={{ backgroundColor: "#00161D" }}>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <div className="mt-10 grid gap-4 sm:mt-16">
                        <div className="bg-[#08252A] p-8 rounded-lg border border-[#00C2DB80] flex flex-col items-center text-center">
                            <h1 className="text-white text-xl font-bold mb-4">Explore Our dApp</h1>
                            <p className="text-gray-300 mb-6">
                                EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
                            </p>
                            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                                <button className="WhitepaperButton">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExploreApp;
