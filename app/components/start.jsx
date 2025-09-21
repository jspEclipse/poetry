"use client";

import { useEffect, useMemo, useState } from "react";
import { Stage, Layer, Image as KImage, Text as KText, Group } from "react-konva";

export default function Start({ pageChange }) {
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const [bgImg, setBgImg] = useState(null);
  const [btnImg, setBtnImg] = useState(null);

  const changePage = () => {
    pageChange(false);
  }

  // Load images once on client
  useEffect(() => {
    const onResize = () => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      setStageSize({ width: vw, height: vh });
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const b = new window.Image();
    b.src = "/StartBack.png";
    b.onload = () => setBgImg(b);

    const btn = new window.Image();
    btn.src = "/Once2.PNG";
    btn.onload = () => setBtnImg(btn);
  }, []);

  // Button render size (keep your chosen size)
  const buttonSize = { width: 1600, height: 900 };

  if (stageSize.width === 0 || stageSize.height === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Stage width={stageSize.width} height={stageSize.height} style={{ display: "block" }}>
        <Layer listening={false}>
          {bgImg && (
            <KImage
              image={bgImg}
              x={0}
              y={0}
              width={stageSize.width}
              height={stageSize.height}
            />
          )}
        </Layer>
        <Layer>
          {/* Group centered by offset so it stays at canvas center */}
          <Group
            x={stageSize.width / 2}
            y={stageSize.height / 2}
            offsetX={buttonSize.width / 2}
            offsetY={buttonSize.height / 2}
          >
            {btnImg && (
              <KImage
                image={btnImg}
                width={buttonSize.width}
                height={buttonSize.height}
              />
            )}
            <KText
              text="Enter"
              fontSize={40}
              fill="#000"
              x={0}
              width={buttonSize.width}
              align="center"
              y={buttonSize.height * 0.61}
              onClick={changePage}
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}


