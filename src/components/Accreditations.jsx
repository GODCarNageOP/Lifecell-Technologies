import iaf from "../assets/iaf.png";
import iso from "../assets/iso.png";
import gmp from "../assets/gmp.png";
import back from "../assets/back.png"
import arrows from "../assets/arrows.png"

export default function Accreditation() {
  const client = [
    {
      id: 1,
      imageSrc: iso,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      imageSrc: iaf,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      imageSrc: gmp,
      imageAlt: "Front of men's Basic Tee in black.",
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32 relative">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl leading-8 uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
        Accreditations
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 p-10">
          {client.map((client) => (
            <div key={client.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-slate-100 p-5 lg:aspect-none lg:h-40">
                <img
                  src={client.imageSrc}
                  alt={client.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
