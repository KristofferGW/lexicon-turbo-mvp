// export default function VideoContainer({ videoUrl }) {
//     return (
//       <div className="flex justify-center items-center">
//         <iframe
//           width="636"
//           height="315"
//           src={videoUrl}
//           title="YouTube video"
//           frameBorder="0"
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//     );
//   }

export default function VideoContainer({ videoUrl }) {
  return (
    <div className="flex justify-center items-center px-4">
      <div className="w-full max-w-[636px] aspect-video">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
