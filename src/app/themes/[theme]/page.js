"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BgColorComponent from '@/app/components/BgColorComponent';
import FullWidthH2Container from '@/app/components/FullWidthH2Container';
import Header from '@/app/components/Header';
import VideoContainer from '@/app/components/VideoContainer';
import VocabularyContainer from '@/app/components/VocabularyContainer';
import VocabularyHeadings from '@/app/components/VocabularyHeadings';

export default function ThemePage() {
  // Parametern heter "theme" (från URL:en)
  const { theme } = useParams();
  const [themeData, setThemeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEnglish, setShowEnglish] = useState(true);

  const toggleEnglish = () => setShowEnglish((prev) => !prev);

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
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header />
        <BgColorComponent>
          <FullWidthH2Container headline={`${themeData.name}`} />
          <VideoContainer videoUrl={`${themeData.videoUrl}`} />
          <VocabularyHeadings onEyeClick={toggleEnglish} />
        </BgColorComponent>
      </div>
      <div className="pt-[480px]">
        <BgColorComponent bgColor="white">
        </BgColorComponent>
        <VocabularyContainer words={themeData.words} showEnglish={showEnglish} />
      </div>
    </div>
  );
}
