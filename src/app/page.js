"use client";
import DonutWheel from './components/DonutWheel';
import Header from './components/Header';
import StudentName from './components/StudentName';
import BgColorComponent from "./components/BgColorComponent";
import H2Container from './components/H2Container';
import WordCategories from './components/WordCategories';

export default function Page({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <BgColorComponent>
          <StudentName name="John Doe" />
          <H2Container headline="👇 Overall learning progress 👇" />
          <WordCategories />
          <DonutWheel />
          <H2Container headline="👇 Learn more Swedish lexicon units by clicking on the interaction types below 👇" />
        </BgColorComponent>
        <BgColorComponent bgColor="white">
          Hello from bgcolor component
        </BgColorComponent>
        {children}
      </body>
    </html>
  );
}