import { useState } from "react";
import { motion } from "framer-motion";
import marketImg from "../../assets/images/market.png";
import financeImg from "../../assets/images/finance.png";
import analyticsImg from "../../assets/images/analytics.png";
import contentImg from "../../assets/images/content.png";
import supportImg from "../../assets/images/customer.png";

const cards = [
  {
    id: "market",
    label: "Market Prediction",
    title:
      "Use AI insights for smarter business decisions and stay competitive.",
    buttonText: "Learn More",
    image: marketImg,
  },
  {
    id: "finance",
    label: "Finance",
    title: "Our AI models analyze financial data for confident investments.",
    buttonText: "Learn More",
    image: financeImg,
  },
  {
    id: "analytics",
    label: "Analytics",
    title:
      "Transform data into insights with AI analytics that enhance decisions.",
    buttonText: "Learn More",
    image: analyticsImg,
  },
  {
    id: "content",
    label: "Content Generation",
    title:
      "Create quality content easily with AI that knows your brand and audience.",
    buttonText: "Learn More",
    image: contentImg,
  },
  {
    id: "support",
    label: "Customer Support",
    title: "Use AI chatbots for instant, personalized customer support.",
    buttonText: "Learn More",
    image: supportImg,
  },
];

const ModelCategory = () => {
  const [activeCard, setActiveCard] = useState(cards[0].id);

  return (
    <div className="flex flex-col items-center w-full px-6
     pb-32 mt-16">
      {/* Buttons */}
      <div className="flex space-x-4 mb-6 border border-gray-200 rounded-lg py-1">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setActiveCard(card.id)}
            className={`px-4 py-2 text-sm font-semibold rounded transition-all ${
              activeCard === card.id
                ? "bg-[#03217f] text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {card.label}
          </button>
        ))}
      </div>

      {/* Card Container */}
      <div className="relative w-full h-72 space-x-6 flex
       items-center justify-center border mt-16">
        {cards.map((card, index) => {
          const activeIndex = cards.findIndex((c) => c.id === activeCard);
          const position = index - activeIndex;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeCard === card.id ? 1 : 0.9,
                x: position * 250,
                scale: activeCard === card.id ? 1 : 0.85,
                zIndex: activeCard === card.id ? 10 : 5,
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-[90%] h-96 max-w-7xl 
             flex justify-between bg-[#f6faf3] shadow-lg 
              rounded-lg"
            >
              {/* Left Content */}
              <div className="w-1/2 py-12 px-6 flex flex-col justify-center">
                <p className="text-sm text-gray-500 text-start">{card.label}</p>
                <div className="w-[100%] py-6">
                  <h3 className="text-2xl font-semibold my-2 text-gray-800 text-start">
                    {card.title}
                  </h3>
                  <div className="flex justify-start">
                    <button
                      className="mt-4 px-4 py-2 bg-[#03217f] text-white 
                rounded"
                    >
                      {card.buttonText}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className=" w-1/2 flex items-end">
                <img
                  src={card.image}
                  alt={card.label}
                  className=" object-cover h-80 w-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ModelCategory;