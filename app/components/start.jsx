import Image from "next/image";

export default function Start() {
  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/StartBack.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Start Button Container */}
      <div className="relative flex justify-center items-center">
        {/* Start Button Image */}
        <div className="relative w-350 h-350"> {/* Adjust size as needed */}
          <Image
            src="/Once2.PNG"
            alt="start"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <span className="text-center text-8xl font-bold text-white drop-shadow-2xl" style={{fontSize: '6rem'}}>
            Enter
          </span>
        </div>
      </div>
    </div>
  );
}