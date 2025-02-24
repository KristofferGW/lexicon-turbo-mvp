"use client";
import Header from './components/Header';
import StudentName from './components/StudentName';
import ProgressContainer from "./components/ProgressContainer";
import H2Container from './components/H2Container';

// export default function RootLayout({ children }) {
export default function Page({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <ProgressContainer>
          <StudentName name="John Doe" />
          <H2Container headline="👇 Overall learning progress 👇" />
        </ProgressContainer>
        {children}
      </body>
    </html>
  );
}