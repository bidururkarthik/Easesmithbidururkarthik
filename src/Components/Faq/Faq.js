import React from 'react';

const FAQItem = ({ question }) => (
  <div className="flex items-center space-x-2 text-gray-300">
    <span className="text-xl">+</span>
    <p>{question}</p>
  </div>
);

const Faq = () => {
  const questions = [
    "What is EthAI?",
    "How can EthAI can help me as a Trader?",
    "Who can use EthAI?",
    "How does EthAI track smart money flow?",
    "How does ensure data security?"
  ];

  return (
    <div className=" py-24 sm:py-32">
    <div className="flex flex-col md:flex-row items-center justify-between p-6" style={{color:"white"}}>
      {/* Left Image */}
      <div className="w-full md:w-1/2">
     
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
     
   
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-6">
      <div className="text-white p-6 rounded-lg">
       
       <div className="space-y-3">
         {questions.map((question, index) => (
           <FAQItem key={index} question={question} />
         ))}
       </div>
     </div>
      </div>
    </div>
    </div>
  );
};

export default Faq;