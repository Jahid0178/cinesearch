import React from "react";
import Image from "next/image";
import { CastType } from "@/typescript/types";

interface CastCardProps {
  cast: CastType;
}

const CastCard = ({ cast }: CastCardProps) => {
  const imgUrl =
    (process.env.IMAGE_BASE_URL ?? "https://image.tmdb.org/t/p/w400") +
    (cast.profile_path || "/");

  return (
    <div className="border rounded-md overflow-hidden">
      <Image
        src={imgUrl || "/images/placeholder.png"}
        alt={cast.name}
        width={200}
        height={300}
        className="w-full"
      />
      <div className="p-2">
        <h3 className="text-lg font-semibold">{cast.name}</h3>
        <p className="text-sm">{cast.character || "unknown"}</p>
      </div>
    </div>
  );
};

export default CastCard;
