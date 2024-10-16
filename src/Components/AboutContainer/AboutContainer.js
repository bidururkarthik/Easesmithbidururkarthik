import React from 'react';

import { AiOutlineStock } from "react-icons/ai";
import { IoWallet } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { FaHandsBound } from "react-icons/fa6";
import './AboutContainer.css'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-start p-4">
    <Icon className="w-8 h-8 text-cyan-400 mb-2" />
    <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
    <p className=" text-sm" style={{ color: "#B0F9FF" }}>{description}</p>
  </div>
);


export default function AboutContainer() {

  const features = [
    {
      icon: AiOutlineStock,
      title: "Stay Ahead",
      description: "No more guesswork—get clear, trustable insights."
    },
    {
      icon: IoWallet,
      title: "Know Your Assets",
      description: "Always stay on top of how your investments are performing."
    },
    {
      icon: SlSettings,
      title: "Simple, Not Overwhelming",
      description: "Our tools are designed to make complex market analysis easy to understand and act on."
    },
    {
      icon: FaHandsBound,
      title: "Future-Proof",
      description: "We're constantly improving, adding new features to help you make the most informed decisions possible."
    }
  ];

    return (
      <section style={{ backgroundColor: "#00161D" }}>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl" style={{color:"white"}}>About EthAi</h2>
          <p className="text-center text-base/7 font-semibold text-indigo-600"style={{ color: "#B0F9FF" }}>
          At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.
          </p>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                            <button className="WhitepaperButton">ReadMore</button>
                        </div>
          <div className="mt-10 grid gap-4 sm:mt-16">
          <div className="bg-[#08252A] p-8 rounded-lg">
      <div className="grid grid-cols-2 gap-6 features-grid features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
          </div>
        </div>
      </div>
      </section>
    )
  }
  