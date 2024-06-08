import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AduritePRO - Digital Goods Store"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1 className="text-3xl" style={{fontWeight:666}}>AduritePRO</h1>
          <nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/products">Products</a></li>
                  <li><a href="/contact">Contact</a></li>
              </ul>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2024 Adurite.pro All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
