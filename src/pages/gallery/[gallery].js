import siteConfig from '@/websiteconfig';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Link from 'next/link';
import TemplatePage from '@/reusable/TemplatePage';

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


  // Set up an interval to automatically switch images

  const imageItems = gallery.images.map((imageUrl) => ({
    original: imageUrl,
    thumbnail: imageUrl,
  }));

  return (
    <div>
      <Navbar />

      <div>
        <TemplatePage title={`Gallery - ${gallery.name}`}>
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
  
            <div className="mt-8">
              <h2 className="text-2xl font-bold">{gallery.name}</h2>
              <p className="text-gray-500">{gallery.dateInfo}</p>
              <p className="mt-4">{gallery.description}</p>
            </div>
          </div>
        </TemplatePage>
      </div>
    </div>
  );
}

export default GalleryViewer;
