import { Analytics } from '@vercel/analytics/dist/react';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <title>
        Feiyu Lin
      </title>
    </head>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
