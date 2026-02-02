import './globals.css';

export const metadata = {
  title: 'Louisville Basketball Analytics',
  description: 'Louisville Cardinals Synergy Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 min-h-screen">{children}</body>
    </html>
  );
}
