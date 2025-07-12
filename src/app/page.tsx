import Image from "next/image";

export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Welcome to the </h1>
      <Image
        src="/VPLogo.png"
        alt="Venting Portal Logo"
        width={400}
        height={400}
        className="mx-auto mb-5"></Image>
      <p className="max-w-[750px] mx-auto leading-8"></p>

    </main>
  );
}
