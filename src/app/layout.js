import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'U-Tune',
  description: 'U-Tune',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
