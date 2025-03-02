"use client";
import ChapterCard from './components/ChapterCard';
import DonutWheel from './components/DonutWheel';
import Header from './components/Header';
import StudentName from './components/StudentName';
import BgColorComponent from "./components/BgColorComponent";
import H2Container from './components/H2Container';
import WordCategories from './components/WordCategories';

const chapterCardsContent = [
  {number: "1", title: "Brief greetings", units: "33", mastered: "0"},
  {number: "2", title: "Interactions", units: "66", mastered: "0"},
  {number: "3", title: "Interactions", units: "99", mastered: "0"},
]

const studentProgress = [
  { category: "Familiar", value: 12 },
  { category: "Mastered", value: 34 },
  { category: "Unfamiliar", value: 53 },
]

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
          {/* <DonutWheel /> */}
          <H2Container headline="👇 Learn more Swedish lexicon units by clicking on the interaction types below 👇" />
        </BgColorComponent>
        <BgColorComponent bgColor="white">
        {chapterCardsContent.map((chapter) => (
            <ChapterCard
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