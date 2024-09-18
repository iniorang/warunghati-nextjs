import Image from "next/image";

export default function FoodCard({ makanan }) {
    return (
        <div className="rounded-xl shadow-md scale-100 hover:scale-105 transition-all">
            <Image src={(`/asset/${makanan.gambar}`)} alt={makanan.nama} width={1200} height={400} className="rounded-t-xl shadow-lg"></Image>
            <div className="px-5 my-5 text-center md:my-3">
                <h4 className="font-bold text-center text-[30px] mb-2 sm:mb-4 leading-none">{makanan.nama || "Unknown"}</h4>
                <p className="leading-snug">{makanan.deskripsi || "Unknown"}</p>
            </div>
        </div>
    );
}