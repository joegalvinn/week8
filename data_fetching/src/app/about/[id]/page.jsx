import pg from "pg";
import { db } from "@/utils/dbConnection";
import { NotFound } from "next/navigation";

export default async function AboutPage({ params }) {
  const { id } = params;
  const coasters = await db.query(
    `SELECT * FROM coasterrollers WHERE id = ${params.id}`,
    [id]
  );
  if (!coasters) {
    <NotFound />;
  }
  console.log(coasters);
  const wrangledCoasters = coasters.rows;

  return (
    <div>
      {wrangledCoasters.map((coaster) => (
        <div className="text-yellow-500 font-bold flex flex-col items-center">
          <h2 key={coaster.id}>{coaster.coaster_name}</h2>
          <p>{coaster.location}</p>
          <h1>{coaster.height}</h1>
        </div>
      ))}
    </div>
  );
}
