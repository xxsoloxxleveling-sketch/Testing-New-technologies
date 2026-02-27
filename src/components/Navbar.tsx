import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-6 py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-foreground tracking-tighter mix-blend-difference">
          Aryan's <span className="text-sun-yellow">Energy</span>
        </Link>
        <div className="hidden md:flex space-x-8 mix-blend-difference">
          <Link href="#products" className="text-white hover:text-sun-yellow transition-colors font-medium">
            Products
          </Link>
          <Link href="#about" className="text-white hover:text-sun-yellow transition-colors font-medium">
            About
          </Link>
          <Link href="#contact" className="text-white hover:text-sun-yellow transition-colors font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
