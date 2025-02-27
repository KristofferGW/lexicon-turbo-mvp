"use client";
import DonutWheel from './components/DonutWheel';
import Header from './components/Header';
import StudentName from './components/StudentName';
import ProgressContainer from "./components/ProgressContainer";
import H2Container from './components/H2Container';
import WordCategories from './components/WordCategories';

// export default function RootLayout({ children }) {
export default function Page({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <ProgressContainer>
          <StudentName name="John Doe" />
          <H2Container headline="👇 Overall learning progress 👇" />
          <WordCategories />
          <DonutWheel />
        </ProgressContainer>
        {children}
      </body>
    </html>
  );
}