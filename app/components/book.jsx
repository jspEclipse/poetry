import Image from "next/image";

export default function Book() {
  return (
      <div className="w-full h-full">
        <div className="absolute w-full h-full">
            <Image
            src="/StartPage.PNG"
            alt="Background"
            fill
            className="object-contain object-center"
            />
        </div>
      </div>
  );
}