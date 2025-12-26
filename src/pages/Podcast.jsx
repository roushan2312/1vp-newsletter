import React from "react";
import { Podcasts } from "../utils/Constants.js";
import PodcastCard from "../components/PodcastCard.jsx";

const Podcast = () => {
  return (
    <div className="mb-auto max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-black mb-10 border-b-4 border-green-500 inline-block">
        Podcasts
      </h1>

      {Podcasts.length > 0 ? (
        <div className="space-y-6">
          {Podcasts.map((podcast, index) => (
            <PodcastCard key={index} {...podcast} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-lg">No podcasts available.</p>
      )}
    </div>
  );
};

export default Podcast;
