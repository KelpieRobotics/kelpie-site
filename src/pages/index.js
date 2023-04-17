import React from 'react';
import siteConfig from '@/websiteconfig';


function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/assets/branding/logo-small.svg" className={`logo`} alt="Logo" />
      <h1 className={'title'}>Kelpie Robotics</h1>
      <h2 className={'subtitle'}>We&apos;re diving deeper</h2>
      <div className={'links'}>
        {
          siteConfig.navigation.map((nav) => (
            <a key = {nav.url} href={nav.url} className="font-display max-w-sm leading-tight">
            <span className="link link-underline"> {nav.title} </span>
        </a>
          ))

        }
      </div>
    </div>
  );
};

export default HomePage;
