import PropTypes from "prop-types";

const PodcastCard = ({ title, description, videoId }) => {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-md shadow-md"
      aria-label={`Podcast card: ${title}`}
    >
      <div className="w-full sm:w-80 flex-shrink-0 aspect-video bg-gray-200 rounded-md overflow-hidden">
        {videoId ? (
          <iframe
            loading="lazy"
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full bg-gray-300 animate-pulse" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-sm sm:text-base font-semibold leading-tight line-clamp-2"
          title={title}
        >
          {videoId ? (
            title
          ) : (
            <span className="bg-gray-300 text-transparent rounded w-40 h-4 inline-block animate-pulse" />
          )}
        </p>
        <p
          className="text-sm text-gray-600 mt-2 line-clamp-2"
          title={description}
        >
          {videoId ? (
            description
          ) : (
            <span className="bg-gray-200 text-transparent rounded w-52 h-3 inline-block animate-pulse" />
          )}
        </p>
      </div>
    </div>
  );
};

PodcastCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  videoId: PropTypes.string,
};

export default PodcastCard;
