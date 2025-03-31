"use client";
import { useParams } from 'next/navigation';
import { useContext, useState } from 'react';
import BgColorComponent from '@/app/components/BgColorComponent';
import FullWidthH2Container from '@/app/components/FullWidthH2Container';
import Header from '@/app/components/Header';
import VideoContainer from '@/app/components/VideoContainer';
import VocabularyContainer from '@/app/components/VocabularyContainer';
import VocabularyHeadings from '@/app/components/VocabularyHeadings';
import { ThemeContext } from '@/app/contexts/ThemeContext';

export default function ThemePage() {
  const { theme } = useParams();
  const { themes, loading, error, updateThemeWordStatus } = useContext(ThemeContext);
  const [showEnglish, setShowEnglish] = useState(true);

  const toggleEnglish = () => setShowEnglish((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const themeData = themes.find((t) => t.themeUrl === theme);
  if (!themeData) return <p>Theme not found</p>;

  const handleUpdateWordStatus = (index, newStatus) => {
    updateThemeWordStatus(themeData.themeUrl, index, newStatus);
  }

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
        <BgColorComponent bgColor="white" />
        <VocabularyContainer
          words={themeData.words}
          showEnglish={showEnglish}
          onUpdateWordStatus={handleUpdateWordStatus}  
        />
      </div>
    </div>
  );
}
