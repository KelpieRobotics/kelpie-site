import siteConfig from '@/websiteconfig';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import TemplatePage from "@/reusable/TemplatePage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gallery | Kelpie Robotics</title>
      </Head>
      <div>
      <Navbar/>
    
        <TemplatePage title="Gallery">


          {/* Section for 2023 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-bold mb-4">2023</h1>
            <hr className="my-4" style={{ height: '1px', borderColor: 'gray' }} />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {siteConfig.gallery.filter(album => album.dateInfo.includes('2023')).map(album => (
                <li key={album.id} >
                   <div className="rounded-lg overflow-hidden shadow-lg bg-white album-card">
                    <Link href={`/gallery/${album.id}`}>
                      <img src={album.coverImage} alt={album.name} className="w-full h-64 object-cover" />
                      <div className="p-4 bg-white">
                        <h2 className="text-xl mb-2 text-black">{album.name}</h2>
                        <h3 className="text-black">{album.dateInfo}</h3>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>


          {/* Section for 2022 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-bold mb-4">2022</h1>
            <hr className="my-4" style={{ height: '1px', borderColor: 'gray' }} />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {siteConfig.gallery.filter(album => album.dateInfo.includes('2022')).map(album => (
                <li key={album.id}>
                   <div className="rounded-lg overflow-hidden shadow-lg bg-white album-card">
                    <Link href={`/gallery/${album.id}`}>
                      <img src={album.coverImage} alt={album.name} className="w-full h-64 object-cover" />
                      <div className="p-4 bg-white">
                        <h2 className="text-xl mb-2 text-black">{album.name}</h2>
                        <h3 className="text-black">{album.dateInfo}</h3>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </TemplatePage>
      </div>
    </div>
   
  );
}
