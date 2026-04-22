import Gallery from "@/gallary.json";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import TemplatePage from "@/reusable/TemplatePage";

// AlbumCard.jsx
function AlbumCard({ album }) {
  return (
    <li key={album.id}>
      <div className="rounded-lg overflow-hidden shadow-lg bg-white album-card">
        <Link href={`/gallery/${album.id}`}>
          <img
            src={album.coverImage}
            alt={album.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl mb-2 text-black">{album.name}</h2>
            <h3 className="text-black">{album.dateInfo}</h3>
          </div>
        </Link>
      </div>
    </li>
  );
}

// GallerySection.jsx
function GallerySection({ year, albums }) {
  const filtered = albums.filter((album) => album.dateInfo.includes(year));
  if (filtered.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">{year}</h1>
      <hr className="my-4" style={{ height: "1px", borderColor: "gray" }} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gallery | Kelpie Robotics</title>
      </Head>
      <div>
        <Navbar />
        <div className="bg-white p-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl md:text-5xl font-bold mt-20 text-gray-900 leading-tight">
              Gallery
            </h1>
          </div>
          {["2026", "2025", "2023", "2022"].map((year) => (
            <GallerySection key={year} year={year} albums={Gallery.gallery} />
          ))}
        </div>
      </div>
    </div>
  );
}
