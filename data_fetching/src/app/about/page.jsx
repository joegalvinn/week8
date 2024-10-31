import Image from "next/image";
import myImage from "/public/QmcWEQPZQGNV53WAGU2frSm1ycvi57zFRy4XTKaTtQ9ZYc.sz_12020.dims_800x800.anim_0.webp";
import { db } from "@/utils/dbConnection";
import Counter from "../components/CountButton";

export const metadata = {
  title: "About Page - Next.js",
  description: "A simple site built with Next.js",
};

export default async function AboutPage() {
  const coasters = await db.query(`SELECT * FROM coasterrollers`);
  console.log(coasters);
  const wrangledCoasters = coasters.rows;

  return (
    <div>
      <p className="bg-red-500 text-center p-10 underline">About page</p>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={myImage}
          alt="who said nfts are dead"
          placeholder="blur"
          className="w-2/4 flex flex-col items-center justify-center"
        />
      </div>
      {wrangledCoasters.map((coaster) => (
        <div
          key={coaster.id}
          className="border-lime-700 border-2 flex flex-col items-center"
        >
          <h2>{coaster.coaster_name}</h2>
          <h3>{coaster.location}</h3>
        </div>
      ))}
      <Counter />
    </div>
  );
}
