'use client'

import { useState } from 'react';
import Start from "./components/start";
import Book from "./components/book";

export default function Home() {
  const [isStart, setIsStart] = useState(false);

  return (
    <div className="relative flex justify-center items-center w-full h-screen px-12">
      {isStart ? <Start/> : <Book/>}
    </div>
  );
}