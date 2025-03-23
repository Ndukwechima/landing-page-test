import logo1 from "../../assets/images/logo.png";
import logo2 from "../../assets/images/Logomark 2.png";
import logo3 from "../../assets/images/Logomark 3.png";
import logo4 from "../../assets/images/Logomark 4.png";
import logo5 from "../../assets/images/Logomark.png";

const logos = [
  { image: logo1, text: "Layers" },
  { image: logo2, text: "Sisyphus" },
  { image: logo3, text: "Circooles" },
  { image: logo4, text: "Catalog" },
  { image: logo5, text: "Quotie" },
];

const Scroll = () => {
  return (
    <div className="w-full lg:overflow-x-auto  overflow-x-hidden flex justify-between  space-x-6 px-4 py-2 scrollbar-hide">
      {logos.map((item, index) => (
        <div
          key={index}
          className="flex flex-row gap-1 items-center min-w-[120px]"
        >
          <img
            src={item.image}
            alt={item.text}
            className="w-8 h-8 object-contain"
          />
          <p className="mt-2 text-lg font-bold text-gray-700">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Scroll;
