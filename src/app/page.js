"use client";
import Header from './components/Header';
import StudentName from './components/StudentName';
import ProgressContainer from "./components/ProgressContainer";

// export default function RootLayout({ children }) {
export default function Page({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <ProgressContainer>
          <StudentName name="John Doe" />
        </ProgressContainer>
        {children}
      </body>
    </html>
  );
}