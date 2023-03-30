import Image from "next/image";

const Banner = (props: any) => {
  return (
    <div className="h-64 bg-slate-200">
      <Image
        fill
        style={{ objectFit: "cover" }}
        alt="Background Shoe"
        src="https://c1.wallpaperflare.com/preview/755/46/382/shoes-boots-nike-air.jpg"
      />
    </div>
  );
};

export default Banner;
