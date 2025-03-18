"use client";
import { createContext } from "react";
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

const studentProgress = [
  { category: "Familiar", value: 12 },
  { category: "Mastered", value: 34 },
  { category: "Unfamiliar", value: 53 },
];

export default function Page({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <BgColorComponent>
          <StudentName name="John Doe" />
          <H2Container headline="👇 Overall learning progress 👇" />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <DonutWheel studentProgress={studentProgress} />
          </div>

          <H2Container headline="👇 Learn more Swedish lexicon units by clicking on the interaction types below 👇" />
        </BgColorComponent>
        <BgColorComponent bgColor="white">
          {ThemeCardsContent.map((chapter) => (
            <Link key={chapter.number} href={`/themes/${chapter.slug}`} passHref>
              <ThemeCard
                key={chapter.number} 
                number={chapter.number}
                title={chapter.title}
                units={chapter.units}
                mastered={chapter.mastered}
              />
            </Link>
          ))}
        </BgColorComponent>
        {children}
      </body>
    </html>
  );
}
