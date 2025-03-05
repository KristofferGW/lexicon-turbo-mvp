export default function VideoContainer({ videoUrl }) {
    return (
      <div className="flex justify-center items-center">
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  