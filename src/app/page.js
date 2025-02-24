import Header from './components/Header';
import StudentName from './components/StudentName';

// export default function RootLayout({ children }) {
export default function Page({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <StudentName name="John Doe" />
        {children}
      </body>
    </html>
  );
}