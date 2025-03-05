"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BgColorComponent from '@/app/components/BgColorComponent';
import FullWidthH2Container from '@/app/components/FullWidthH2Container';
import Header from '@/app/components/Header';
import VideoContainer from '@/app/components/VideoContainer';

export default function ThemePage() {
  // Parametern heter "theme" (från URL:en)
  const { theme } = useParams();
  const [themeData, setThemeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!theme) return;

    fetch(`/api/themes/${theme}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setThemeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching theme:', err);
        setError(err);
        setLoading(false);
      });
  }, [theme]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!themeData) return <p>Theme not found</p>;

  return (
    <div>
      <Header />
      <BgColorComponent>
        <FullWidthH2Container headline={`${themeData.name}`} />
        <VideoContainer videoUrl={`${themeData.videoUrl}`} />
      </BgColorComponent>
      <iframe
        width="560"
        height="315"
        src={themeData.videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h2>Vocabulary</h2>
      <ul>
        {themeData.words.map((item, index) => (
          <li key={index}>
            <strong>{item.swedish}</strong> - {item.english}
          </li>
        ))}
      </ul>
    </div>
  );
}
