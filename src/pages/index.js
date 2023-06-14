import React from 'react';
import siteConfig from '@/websiteconfig';
import Image from 'next/image';
import Link from 'next/link'
import Head from 'next/head';
function HomePage() {
  return (
 <>
 <Head>
                <title>Home | Kelpie Robotics</title>
            </Head>
    <div className="flex flex-col items-center justify-center h-screen homepage">
      <img src="/assets/branding/logo-small.svg" className={`logo`} alt="Logo" width="100" height="100"/>
      <h1 className={'title text-white'}>Kelpie Robotics</h1>
      <h2 className={'subtitle text-white'}>We&apos;re diving deeper</h2>
      <div className={'links'}>
        {
          siteConfig.navigation.map((nav) => (
            <Link key = {nav.url} href={nav.url} className="font-display max-w-sm leading-tight">
            <span className="link link-underline text-white"> {nav.title} </span>
        </Link>
          ))

        }
      </div>
    </div>
    </>
  );
};

export default HomePage;
