import siteConfig from '@/websiteconfig';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-900 text-white">
      <Link href='/' >
      <div className="flex items-center space-x-2">
        <Image src="/assets/branding/logo-small.svg" className={'logo-small'} alt="Logo" width="100" height="100"/>
        <h1 className="text-xl font-bold">Kelpie Robotics</h1>
        <h2 className="text-sm font-light">We&apos;re diving deeper</h2>
      </div>
      </Link>
      <nav className="space-x-4">
      <div className={'links'}>
        {
          siteConfig.navigation.map((nav) => (
            <Link key = {nav.url} href={nav.url} className="font-display max-w-sm leading-tight">
            <span className="link link-underline"> {nav.title} </span>
        </Link>
          ))

        }
      </div>
      </nav>
    </header>
  );
}

export default Navbar;