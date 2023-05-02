import siteConfig from '@/websiteconfig';
import Link from 'next/link'
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-4">Gallery</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteConfig.gallery.map(album => (
            <li key={album.id}>
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <Link href={`/gallery/${album.id}`}>
                {/* <a className="block rounded-lg overflow-hidden shadow-lg"> */}
                <img src={album.coverImage} alt={album.name} className="w-full h-64 object-cover" />
                <div className="p-4 bg-white">
                  <h2 className="text-xl mb-2 text-black">{album.name}</h2>
                  <h3 className="text-black">{album.dateInfo}</h3>
                </div>
                {/* </a> */}
              </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}
