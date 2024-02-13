import siteConfig from '@/websiteconfig';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Link from 'next/link';
import Head from 'next/head';
import TemplatePage from '@/reusable/TemplatePage';
import { useRouter } from 'next/router';


const galleryData = siteConfig.gallery;

export async function getStaticPaths() {
  const paths = galleryData.map((gallery) => ({
    params: { gallery: gallery.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const gallery = galleryData.find((gallery) => gallery.id === params.gallery);
  return { props: { gallery } };
}

function GalleryViewer({ gallery }) {
  const router = useRouter();

  if (gallery) {



    // Set up an interval to automatically switch images
    const imageItems = gallery.images.map((imageUrl) => ({
      original: imageUrl,
      thumbnail: imageUrl,
    }));
    
    const goBack = () => {
      console.log('Router Object:', router);
      router.back();
    };
    return (
      <div>
        <Head>
          <title>{gallery.name} | Kelpie Robotics</title>
        </Head>
        <Navbar />

        <div>
        <TemplatePage >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <button
            onClick={() => router.back()}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.3s ease-in-out',
              transformOrigin: 'center bottom',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
            <span style={{ marginLeft: '8px' }}></span>
          </button>
          <div style={{ marginLeft: '16px', fontWeight: 'bold', fontSize: '1.5rem' }}>{gallery.name}</div>
        </div>
        
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="relative h-100" style={{ overflow: 'hidden' }}>
                <ImageGallery
                  items={imageItems}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showThumbnails={gallery.images.length > 1}
                  autoPlay={true}
                  slideInterval={5000}
                  lazyLoad={true}

                />
              </div>
            </div>
          </TemplatePage>
        </div>
      </div>
    );
  }
}

export default GalleryViewer;
