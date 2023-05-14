import siteConfig from '@/websiteconfig';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react'
import Link from 'next/link'
import TemplatePage from "@/reusable/TemplatePage";


const galleryData = siteConfig.gallery;

export async function getStaticPaths() {
  const paths = galleryData.map((gallery) => ({
    params: { gallery: gallery.id }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const gallery = galleryData.find((gallery) => gallery.id === params.gallery);
  return { props: { gallery } };
}

function GalleryViewer({ gallery }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [slideInterval, setSlideInterval] = useState(null)

  // Set up an interval to automatically switch images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % gallery.images.length)
    }, 5000)

    setSlideInterval(interval)

    return () => clearInterval(interval)
  }, [currentImage])

  // Stop the automatic slideshow when the component is unmounted
  useEffect(() => {
    return () => clearInterval(slideInterval)
  }, [])

  // Go to the previous image
  const prevImage = () => {
    setCurrentImage((currentImage - 1 + gallery.images.length) % gallery.images.length)
  }

  // Go to the next image
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % gallery.images.length)
  }

  // Go to a specific image
  const goToImage = (index) => {
    setCurrentImage(index)
  }

  return (
    <div>
      <Navbar />

      <div>
        <TemplatePage title={`Gallery - ${gallery.name}`}>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative h-100" style={{ overflow: 'hidden' }}>
              <img src={gallery.images[currentImage]} alt="" layout="fill" objectFit="contain" width="100" height="100"/>
              <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md" onClick={prevImage}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md" onClick={nextImage}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {gallery.images.map((image, index) => (
                <button key={index} className={`mx-1 w-4 h-4 rounded-full ${index === currentImage ? 'bg-gray-800' : 'bg-gray-400'}`} onClick={() => goToImage(index)} />
              ))}
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
  )
}


export default GalleryViewer;