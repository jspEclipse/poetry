import Image from "next/image";

export default function Start() {
  return (
    
      <div className="absolute w-full h-full">
        <div className="w-full h-full flex justify-center content-center z-10">
            <div>Welcome</div>
        </div>
        <div className="absolute -z-10">
            <Image
            src="/IMG_6462.png"
            alt="Background"
            fill
            className="object-contain object-center"
            />
        </div>
      </div>
  );
}