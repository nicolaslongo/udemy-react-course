import MainHeader from '@/components/main-header/main-header.jsx';
import './globals.css';


// Medata can be redefined in other pages or layouts further down into the app.
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}
