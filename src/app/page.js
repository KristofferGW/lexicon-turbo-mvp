"use client";
import dynamic from "next/dynamic";
import ThemeCard from './components/ThemeCard';
import Header from './components/Header';
import StudentName from './components/StudentName';
import BgColorComponent from "./components/BgColorComponent";
import H2Container from './components/H2Container';
import WordCategories from './components/WordCategories';

// Ladda DonutWheel endast på klienten
const DonutWheel = dynamic(() => import("./components/DonutWheel"), { ssr: false });

const ThemeCardsContent = [
  {number: "1", title: "Brief greetings", units: "33", mastered: "0"},
  {number: "2", title: "Interactions", units: "66", mastered: "0"},
  {number: "3", title: "Interactions", units: "99", mastered: "0"},
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
          <WordCategories 
            familiar={studentProgress[0].value} 
            mastered={studentProgress[1].value} 
            unfamiliar={studentProgress[2].value} 
          />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <DonutWheel studentProgress={studentProgress} />
          </div>

          <H2Container headline="👇 Learn more Swedish lexicon units by clicking on the interaction types below 👇" />
        </BgColorComponent>
        <BgColorComponent bgColor="white">
          {ThemeCardsContent.map((chapter) => (
            <ThemeCard
              key={chapter.number} 
              number={chapter.number}
              title={chapter.title}
              units={chapter.units}
              mastered={chapter.mastered}
            />
          ))}
        </BgColorComponent>
        {children}
      </body>
    </html>
  );
}
