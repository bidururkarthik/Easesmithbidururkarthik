import React from "react";

const GridContainer = () => {
    return(
       
<section style={{ backgroundColor: "#00161D" }}>
  <div className="py-24 sm:py-32">
    <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-3">
        <div className="relative lg:row-span-2">
          <div
            className="absolute inset-px rounded-lg lg:rounded-l-[2rem]"
            style={{
              backgroundColor: "#0C2B2FB2",
              borderColor: "#B0FAFFB2",
              borderWidth: "1px",
            }}
          ></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
              <img className="w-full max-lg:max-w-xs" src="./image/o2.png" alt="" />
            </div>
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center" style={{ color: "white" }}>
                Trade Optimizer
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" style={{ color: "#B0F9FF" }}>
                Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>

        <div className="relative max-lg:row-start-1">
          <div
            className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem]"
            style={{
              backgroundColor: "#0C2B2FB2",
              borderColor: "#B0FAFFB2",
              borderWidth: "1px",
            }}
          ></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center" style={{ color: "white" }}>
                Market Insight
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" style={{ color: "#B0F9FF" }}>
                Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
              <img className="w-full max-lg:max-w-xs" src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png" alt="" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>

        <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div
            className="absolute inset-px rounded-lg"
            style={{
              backgroundColor: "#0C2B2FB2",
              borderColor: "#B0FAFFB2",
              borderWidth: "1px",
            }}
          ></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center" style={{ color: "white" }}>
                Our Features
              </p>
            </div>
            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
              <img
                className="h-[min(152px,40cqw)] object-cover object-center"
                src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                alt=""
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>

        <div className="relative lg:row-span-2">
          <div
            className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
            style={{
              backgroundColor: "#0C2B2FB2",
              borderColor: "#B0FAFFB2",
              borderWidth: "1px",
            }}
          ></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
              <img className="w-full max-lg:max-w-xs" src="./image/o1.png" alt="" />
            </div>
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 font-medium tracking-tight max-lg:text-center" style={{ color: "white" }}>
                Risk Guard
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" style={{ color: "#B0F9FF" }}>
                Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>

        {/* New Cards */}
        <div className="relative lg:row-span-2">
          <div
            className="absolute inset-px rounded-lg"
            style={{
              backgroundColor: "#0C2B2FB2",
              borderColor: "#B0FAFFB2",
              borderWidth: "1px",
            }}
          ></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center" style={{ color: "white" }}>
              Portfolio Sync 
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" style={{ color: "#B0F9FF" }}>
              Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>

        <div className="relative lg:col-span-2">
          <div
            className="absolute inset-px rounded-lg"
            style={{
              backgroundColor: "#0C2B2FB2",
              borderColor: "#B0FAFFB2",
              borderWidth: "1px",
            }}
          ></div>
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
           
            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center" style={{ color: "white" }}>
              Opportunity Scout 
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" style={{ color: "#B0F9FF" }}>
              Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
      </div>
    </div>
</div>
</section>

    )
}

export default GridContainer;