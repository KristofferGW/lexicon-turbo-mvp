import Header from './components/Header';

// export default function RootLayout({ children }) {
export default function Page({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}