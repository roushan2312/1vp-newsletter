import TickIcon from "../assets/icons8-tick.svg";
import cross from "../assets/cross.svg";

const ServiceCard = ({
  title,
  description,
  Icon,
  features,
  price,
  notIncluded,
}) => {
  return (
    <div className="w-full max-w-sm mx-auto sm:mx-4 mb-12 sm:mb-20">
      <div className="flex flex-col h-full bg-white rounded-2xl border border-indigo-100 shadow-xl hover:shadow-2xl hover:border-indigo-400 hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 group">
        
        

        {/* Title */}
        <h3 className="text-2xl font-bold text-center text-indigo-700 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base text-left mb-4">
          {description}
        </p>

        {/* Price */}
        <div className="mb-5 text-left">
          <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-gray-500 text-sm sm:text-base ml-1">per project</span>
        </div>

        {/* Included Features */}
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-gray-800 text-sm sm:text-base"
              title={feature}
            >
              <img
                src={TickIcon}
                alt=""
                className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Not Included Features */}
        {notIncluded && (
          <ul className="mb-8 space-y-2">
            {notIncluded.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-gray-500 line-through text-sm sm:text-base"
                title={`${feature} not included`}
              >
                <img
                  src={cross}
                  alt=""
                  className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <button
          className="w-full px-5 py-3 mt-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow hover:from-indigo-600 hover:to-purple-600 transition"
          aria-label={`Get started with ${title}`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
