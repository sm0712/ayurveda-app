import Image from "next/image";

export default function AppBgImg() {
  return (
    <Image
      src="/bgimg.jpg"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
