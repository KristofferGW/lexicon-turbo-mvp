"use client";
import { createContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from 'next/link';
import ThemeCard from './components/ThemeCard';
import Header from './components/Header';
import StudentName from './components/StudentName';
import BgColorComponent from "./components/BgColorComponent";
import H2Container from './components/H2Container';

// Ladda DonutWheel endast på klienten
const DonutWheel = dynamic(() => import("./components/DonutWheel"), { ssr: false });

export const UnitsContext = createContext();

const ThemeCardsContent = [
  {number: "1", title: "Brief greetings", units: "33", mastered: "0", slug: "brief-greetings"},
  {number: "2", title: "Applying for jobs", units: "66", mastered: "0", slug: "applying-for-jobs"},
  {number: "3", title: "Eating out", units: "99", mastered: "0", slug: "eating-out"},
];

function computeStudentProgress(themes) {
  const progressCount = {
    Familiar: 0,
    Mastered: 0,
    Unfamiliar: 0,
  };

  themes.forEach(theme => {
    theme.words.forEach(word => {
      if (progressCount.hasOwnProperty(word.status)) {
        progressCount[word.status]++;
      }
    });
  });

  return [
    { category: "Familiar", value: progressCount.Familiar },
    { category: "Mastered", value: progressCount.Mastered },
    { category: "Unfamiliar", value: progressCount.Unfamiliar},
  ]
}

export default function Page({ children }) {
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/themes')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Nätverksfel: Kunde inte hämta teman');
        }
        return res.json();
      })
      .then((data) => {
        setThemes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching themes:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>Error: {error.message}</p>

  const aggregatedStudentProgress = computeStudentProgress(themes);

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
