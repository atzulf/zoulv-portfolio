import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let scrollActive = scroll ? "py-4 bg-white shadow" : "py-6";

  return (
    <div className={`navbar fixed w-full transition-all mt-0 bg-white shadow-md ${scrollActive}`}>
      <div className="container mx-auto px-8 md:px-8 lg:px-24 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold">Zoulv</h1>
        </div>
        <div className="hamburger md:hidden" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: '#000' }} /> : <FaBars size={20} style={{ color: '#000' }} />}
        </div>
        <ul className={click ? "flex flex-col items-center gap-6 fixed left-0 top-16 w-full py-8 z-50 font-bold transition-all rounded shadow-lg shadow-slate-300" : "hidden md:flex md:gap-12 lg:gap-16"}>
          <li>
            <a href="#" className="font-medium opacity-75">Beranda</a>
          </li>
          <li>
            <a href="#" className="font-medium opacity-75">Tentang saya</a>
          </li>
          <li>
            <a href="#" className="font-medium opacity-75">Project</a>
          </li>
        </ul>
        <div className="social hidden md:block">
          <a href="#" className="bg-sky-500 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-600 transition-all">
            Kontak Kami
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
