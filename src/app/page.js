"use client";
import { useContext, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from 'next/link';
import ThemeCard from './components/ThemeCard';
import Header from './components/Header';
import StudentName from './components/StudentName';
import BgColorComponent from "./components/BgColorComponent";
import H2Container from './components/H2Container';
import { ThemeContext } from "./contexts/ThemeContext";

// Ladda DonutWheel endast på klienten
const DonutWheel = dynamic(() => import("./components/DonutWheel"), { ssr: false });

export default function Page({ children }) {
  const { themes, loading, error } = useContext(ThemeContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const aggregatedStudentProgress = useMemo(() => {
    const progressCount = { Familiar: 0, Mastered: 0, Unfamiliar: 0 };

    themes.forEach((theme) => {
      theme.words.forEach((word) => {
        if (progressCount[word.status] !== undefined) {
          progressCount[word.status]++;
        }
      });
    });

    return [
      { category: "Familiar", value: progressCount.Familiar },
      { category: "Mastered", value: progressCount.Mastered },
      { category: "Familiar", value: progressCount.Unfamiliar },
    ];
  }, [themes]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <BgColorComponent>
          <StudentName name="John Doe" />
          <H2Container headline="👇 Overall learning progress 👇" />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <DonutWheel studentProgress={aggregatedStudentProgress} />
          </div>

          <H2Container headline="👇 Learn more Swedish lexicon units by clicking on the interaction types below 👇" />
        </BgColorComponent>
        <BgColorComponent bgColor="white">
          {themes.map((theme) => {
            const [number, title] = theme.name.split(" > ");
            const units = theme.words.length;
            const mastered = theme.words.filter(word => word.status === "Mastered").length;
            return (
              <Link key={theme.themeUrl} href={`/themes/${theme.themeUrl}`} passHref>
                <ThemeCard
                  key={theme.themeUrl}
                  number={number}
                  title={title}
                  units={units}
                  mastered={mastered}
                />
              </Link>
            )
          })}
        </BgColorComponent>
        {children}
      </body>
    </html>
  );
}
