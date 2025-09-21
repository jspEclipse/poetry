'use client'

import { useState } from 'react';
import Start from "./components/start";
import Book from "./components/book";

export default function Home() {
  const [isStart, setIsStart] = useState(true);

  return (
    <div className="relative flex justify-center items-center w-full h-dvh">
      <div>
        
      </div>
      {isStart ? <Start pageChange={setIsStart}/> : <Book/>}
    </div>
  );
}