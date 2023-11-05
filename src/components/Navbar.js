import { useState, useEffect  } from 'react';
import siteConfig from '@/websiteconfig';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); 
  const router = useRouter();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => { //Set active section (match URL)
    const currentUrl = router.asPath;
    const activeNav = siteConfig.navigation.find((nav) => nav.url === currentUrl);
    if (activeNav) {
      setActiveSection(activeNav.title);
    }
  }, [router.asPath]);
  
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white" style={{ position: 'sticky', top: 0 }}>
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/branding/logo-small.svg"
            className={'logo-small'}
            alt="Logo"
            width="100"
            height="100"
          />
          <h1 className="text-xl font-bold">Kelpie Robotics</h1>
          <h2 className="text-sm font-light">We&apos;re diving deeper</h2>
        </div>
      </Link>
      <nav className="hidden md:block space-x-4">
        <div className="links">
          {siteConfig.navigation.map((nav) => (
            <Link legacyBehavior key={nav.url} href={nav.url}>
              <span
                className={`font-display max-w-sm leading-tight link-underline text-white ${
                  activeSection === nav.title ? 'active-link' : ''
                }`}
                onClick={() => setActiveSection(nav.title)}
              >
                {nav.title}
              </span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="md:hidden relative">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M0 3.5A1.5 1.5 0 0 1 1.5 2h17A1.5 1.5 0 0 1 20 3.5a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 3.5zm0 6A1.5 1.5 0 0 1 1.5 8h17A1.5 1.5 0 0 1 20 9.5a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 9.5zm0 6A1.5 1.5 0 0 1 1.5 14h17A1.5 1.5 0 0 1 20 15.5a1.5 1.5 0 0 1-1.5 1.5H1.5A1.5 1.5 0 0 1 0 15.5z"
            />
          </svg>
        </button>
        {menuOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 text-white z-50">
            <div className="flex flex-col p-4 space-y-4">
              <button onClick={toggleMenu} className="absolute top-0 right-0 p-3">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 11.414l5.657 5.657 1.414-1.414L11.414 10l5.657-5.657-1.414-1.414L10 8.586 4.343 2.929 2.93 4.343 8.586 10l-5.657 5.657 1.414 1.414L10 11.414z"
                  />
                </svg>
              </button>
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/branding/logo-small.svg"
                  className={'logo-small'}
                  alt="Logo"
                  width="100"
                  height="100"
                />
                <div>
                  <h1 className="text-xl font-bold">Kelpie Robotics</h1>
                  <h2 className="text-sm font-light">We&apos;re diving deeper</h2>
                </div>
              </div>
              {siteConfig.navigation.map((nav) => (
                <Link legacyBehavior key={nav.url} href={nav.url}>
                <span
                  className={`font-display max-w-sm leading-tight link-underline text-white ${
                    activeSection === nav.title ? 'active-link' : ''
                  }`}
                  onClick={() => setActiveSection(nav.title)}
                >
                  {nav.title}
                </span>
              </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
