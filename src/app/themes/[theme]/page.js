"use client";
import { useParams } from 'next/navigation';
import BgColorComponent from '@/app/components/BgColorComponent';
import Header from '@/app/components/Header';
import H2Container from '@/app/components/H2Container';

const themeData = {
  "brief-greetings": {
    title: "Brief Greetings",
    videoUrl: "https://www.youtube.com/embed/example_video_1",
    vocabulary: [
      { word: "Hello", translation: "Hej" },
      { word: "Good morning", translation: "God morgon" },
    ]
  },
  "eating-out": {
    title: "Eating Out",
    videoUrl: "https://www.youtube.com/embed/example_video_2",
    vocabulary: [
      { word: "Menu", translation: "Meny" },
      { word: "Waiter", translation: "Servitör" },
    ]
  },
  "applying-for-jobs": {
    title: "Applying for Jobs",
    videoUrl: "https://www.youtube.com/embed/example_video_3",
    vocabulary: [
      { word: "Resume", translation: "CV" },
      { word: "Interview", translation: "Intervju" },
    ]
  }
};

export default function ThemePage({ numOfUnits }) {
  const { theme } = useParams();
  console.log("Theme parameter: ", theme);
  
  // Hämta data baserat på URL-parametern
  const themeContent = themeData[theme];

  if (!themeContent) {
    return <p>Theme not found</p>;
  }

  return (
    <div>
      <Header />
      <BgColorComponent>
        <H2Container headline={`1 > Brief greetings (${numOfUnits} units)`} />
      </BgColorComponent>
      <iframe
        width="560"
        height="315"
        src={themeContent.videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h2>Vocabulary</h2>
      <ul>
        {themeContent.vocabulary.map((item, index) => (
          <li key={index}>
            <strong>{item.word}</strong> - {item.translation}
          </li>
        ))}
      </ul>
    </div>
  );
};
