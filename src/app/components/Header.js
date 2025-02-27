import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-lexicon shadow-sm border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl text-white">
          LEXIKON TURBO
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/settings" className="text-white hover:text-gray-200">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/info" className="text-white hover:text-gray-200">
                Info
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;