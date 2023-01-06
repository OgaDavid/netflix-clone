import Link from "next/link";
import { useState, useEffect } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 0) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    

  return (
    <header className={`${isScrolled && "glassmorphism header-padding"}`}>
        <div className="flex items-center space-x-2 md:space-x-10">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix logo" 
            className="w-24 object-contain cursor-pointer"
            />

            <ul className="hidden space-x-4 md:flex">
                <li className="menuLink">Home</li>
                <li className="menuLink">TV Shows</li>
                <li className="menuLink">Movies</li>
                <li className="menuLink">New & Popular</li>
                <li className="menuLink">My List</li>
            </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path className="hidden sm:inline" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <p className="hidden lg:inline">Kids</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clipRule="evenodd" />
            </svg>
            <Link href="/account">
                <img className="cursor-pointer rounded" src="https://rb.gy/g1pwyx" alt="profile icon" />
            </Link>
        </div>
    </header>
  )
}

export default Header