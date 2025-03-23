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
    buttonText: "Get Insights",
    image: financeImg,
  },
  {
    id: "analytics",
    label: "Analytics",
    title:
      "Transform data into insights with AI analytics that enhance decisions.",
    buttonText: "Explore Data",
    image: analyticsImg,
  },
  {
    id: "content",
    label: "Content Generation",
    title:
      "Create quality content easily with AI that knows your brand and audience.",
    buttonText: "Generate Now",
    image: contentImg,
  },
  {
    id: "support",
    label: "Customer Support",
    title: "Use AI chatbots for instant, personalized customer support.",
    buttonText: "Start Chat",
    image: supportImg,
  },
];

const ModelCategory = () => {
  const [activeCard, setActiveCard] = useState(cards[0].id);

  return (
    <div className="flex flex-col items-center w-full p-6 mt-7 border">
      {/* Buttons */}
      <div className="flex space-x-4 mb-6 border border-gray-200 rounded-lg py-1">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setActiveCard(card.id)}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
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
      <div className="relative w-full h-72 flex items-center justify-center border mt-16">
        {cards.map((card, index) => {
          const activeIndex = cards.findIndex((c) => c.id === activeCard);
          const position = index - activeIndex;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeCard === card.id ? 1 : 0.5,
                x: position * 250,
                scale: activeCard === card.id ? 1 : 0.85,
                zIndex: activeCard === card.id ? 10 : 5,
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-[80%] max-w-7xl h-60 p-6 flex items-center justify-between bg-[#f6faf3] shadow-lg rounded-lg"
            >
              {/* Left Content */}
              <div className="w-1/2">
                <p className="text-sm text-gray-500">{card.label}</p>
                <h3 className="text-2xl font-semibold my-2 text-gray-800">
                  {card.title}
                </h3>
                <button className="mt-4 px-4 py-2 bg-[#03217f] text-white rounded-lg">
                  {card.buttonText}
                </button>
              </div>

              {/* Right Side - Image */}
              <img
                src={card.image}
                alt={card.label}
                className="w-1/2 object-contain"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ModelCategory;