import siteConfig from '@/websiteconfig';
import Link from 'next/link'
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import TemplatePage from "@/reusable/TemplatePage";

export default function Home() {
  return (
    <div>
       <Head>
        <title>Gallery | Kelpie Robotics</title>
      </Head>
      <Navbar />
      <div>
        <TemplatePage title="Gallery">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {siteConfig.gallery.map(album => (
                <li key={album.id}>
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                    <Link href={`/gallery/${album.id}`}>
                      {/* <a className="block rounded-lg overflow-hidden shadow-lg"> */}
                      <img src={album.coverImage} alt={album.name} className="w-full h-64 object-cover" width="100" height="100"/>
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
        </TemplatePage>
      </div>
    </div>

  )
}
