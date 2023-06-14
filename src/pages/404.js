import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import TemplatePage from '@/reusable/TemplatePage';
import siteConfig from '@/websiteconfig';
import Head from 'next/head';
const NotFound = () => {
    const router = useRouter();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        router.push('/');
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div>
          <Head>
        <title>404 | Kelpie Robotics</title>
      </Head>
        <Navbar />
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-4 text-white">Oops!</h1>
            <p className="text-2xl mb-8 text-white">
            Looks like you&apos;re treading in deep water. Don&apos;t worry, we&apos;ll get you back on track!
            </p>
            <div className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
          </div>
          </div>
      </div>
    );
  };
  
  export default NotFound;
  