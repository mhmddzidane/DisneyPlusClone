import Image from "next/image";
import { useRouter } from "next/router";

function MovieThumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div
      className="group flex relative min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
      />

      <div className="hidden group-hover:flex absolute bg-gradient-to-t from-[#06202a] h-full w-full transition duration-1000 transform">
        <div className="mt-auto px-2 w-full pb-3">
          <p>{result.title}</p>
          <p>{result.release_date}</p>
          <p className="truncate text-xs text-gray-300">{result.overview}</p>
          <div>
            <div className="h-1/2 hover:bg-[#06202a] rounded px-1 transition duration-400 transform">
              <p>+</p>
              <p className="uppercase text-xs">Tambah ke daftar nonton</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieThumbnail;
