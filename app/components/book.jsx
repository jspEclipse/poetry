"use client";

import { useEffect, useState } from "react";
import { Stage, Layer, Image as KImage, Text as KText, Group } from "react-konva";

export default function Book() {
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const [bookImg, setBookImg] = useState(null);
  const [poems, setPoems] = useState([]);

  // Poem generator word banks
  const place = ['land far, far away', 'kingdom far, far away', 'lonely tower in the woods', 
    'beautiful old castle', 'land with very little light', 'land with no sky', 
    'hidden menagerie', 'little village', 'quiet place in the middle of nowhere', 
    'magical forest', 'very dark place', 'war-torn kingdom', 'witch\'s kitchen'];
  
  const girl_adjective = ['wise', 'clever', 'hopeful', 'young', 'bright', 'beautiful', 
    'inquisitive', 'kind', 'gifted', 'generous', 'hungry', 'lonely', 'ambitious'];
  
  const girl_noun = ['angel', 'bird', 'robot', 'little', 'soldier'];
  
  const girl_verb = ['dream', 'sigh', 'daydream', 'wonder', 'ponder', 'wishe', 
    'scheme', 'pace', 'lament'];
  
  const want_verb = ['be so much more', 'do so much more', 'do great things', 
    'go to great places', 'be someone incredible', 'change history', 'change the world'];
  
  const travel_noun = ['quest', 'journey', 'voyage', 'pilgrimage'];
  
  const body1_active_verb = ['traverses', 'braves', 'crosses', 'travels', 'passes', 
    'discovers', 'meets', 'finds', 'befriends', 'helps', 'aids', 'loves'];
  
  const body1_place = ['neighbouring village', 'cavern', 'kingdom', 'palace', 'tower', 
    'enchanted forest', 'seaside town', 'farmlands', 'royal court'];
  
  const body1_noun = ['townspeople', 'king', 'queen', 'prince', 'dragon', 'valiant knight', 
    'maze', 'mirror', 'riddle', 'wizard', 'quest', 'key', 'fairy', 'mystery', 
    'talking animals', 'wise tree', 'old witch', 'kind old man', 'young twins', 'loyal hound'];
  
  const body1_passive_verb = ['conquered', 'mastered', 'overcome', 'defeated', 
    'vanquished', 'subdued', 'tamed', 'controlled', 'dominated', 'ruled', 'commanded'];
  
  const body1_time = ['sunset', 'twilight', 'daybreak', 'morning', 'noontime', 
    'suppertime', 'sunrise', 'moonrise', 'dawn', 'midnight'];
  
  const body1_verb = ['wait', 'dream', 'sigh', 'blink', 'sleep', 'rise', 
    'beckon', 'hide', 'laugh', 'sing'];
  
  const body1_speechtag = ['exclaim', 'praise', 'cry', 'whisper', 'fawn', 'laugh'];
  
  const body1_adjective = ['wise', 'clever', 'hopeful', 'young', 'bright', 'beautiful', 
    'inquisitive', 'kind', 'gifted', 'generous', 'ambitious', 'wonderful', 'helpful'];
  
  const body2_active_verb = ['traverses', 'braves', 'crosses', 'travels', 'passes', 
    'discovers', 'meets', 'finds', 'befriends', 'helps', 'aids', 'conquers', 'slays', 
    'destroys', 'cuts through', 'tramples', 'tricks', 'deceives', 'punishes', 'loves'];
  
  const body2_place = ['ocean', 'sea', 'depths', 'abyss', 'waters', 'currents', 
    'tides', 'waves', 'depths', 'underwater', 'marine', 'aquatic'];
  
  const body2_noun = ['ocean', 'sea', 'depths', 'waters', 'currents', 'waves', 
    'tides', 'abyss', 'marine', 'aquatic', 'underwater', 'depths'];
  
  const body2_passive_verb = ['explored', 'investigated', 'probed', 'examined', 
    'searched', 'hunted', 'sought', 'pursued', 'chased', 'tracked', 'followed'];
  
  const body2_time = ['Finally', 'At last', 'Eventually', 'In time', 'After much effort', 
    'After struggle', 'After perseverance', 'After determination', 'After persistence'];
  
  const body2_verb = ['reaches', 'attains', 'achieves', 'gains', 'wins', 'earns', 
    'obtains', 'secures', 'claims', 'conquers', 'masters', 'overcomes'];
  
  const body2_speechtag = ['exclaim', 'declare', 'proclaim', 'announce', 'cry out', 
    'shout', 'call out', 'voice', 'express', 'state', 'utter', 'pronounce'];
  
  const body2_adjective = ['brave', 'determined', 'strong', 'courageous', 'bold', 
    'fearless', 'valiant', 'heroic', 'mighty', 'powerful', 'resolute', 'persistent'];
  
  const body3_active_verb = ['enter', 'venture', 'explore', 'penetrate', 'delve', 
    'investigate', 'probe', 'examine', 'search', 'hunt', 'seek', 'pursue'];
  
  const body3_place = ['forest', 'woods', 'wilderness', 'jungle', 'thicket', 
    'grove', 'copse', 'woodland', 'trees', 'vegetation', 'foliage', 'undergrowth'];
  
  const body3_noun = ['forest', 'woods', 'wilderness', 'jungle', 'trees', 
    'vegetation', 'foliage', 'undergrowth', 'thicket', 'grove', 'copse', 'woodland'];
  
  const body3_passive_verb = ['explored', 'investigated', 'probed', 'examined', 
    'searched', 'hunted', 'sought', 'pursued', 'chased', 'tracked', 'followed'];
  
  const body3_time = ['Finally', 'At last', 'Eventually', 'In time', 'After much effort', 
    'After struggle', 'After perseverance', 'After determination', 'After persistence'];
  
  const body3_verb = ['reaches', 'attains', 'achieves', 'gains', 'wins', 'earns', 
    'obtains', 'secures', 'claims', 'conquers', 'masters', 'overcomes'];
  
  const body3_speechtag = ['exclaim', 'declare', 'proclaim', 'announce', 'cry out', 
    'shout', 'call out', 'voice', 'express', 'state', 'utter', 'pronounce'];
  
  const body3_adjective = ['brave', 'determined', 'strong', 'courageous', 'bold', 
    'fearless', 'valiant', 'heroic', 'mighty', 'powerful', 'resolute', 'persistent'];
  
  const body4_verb = ['encounter', 'meet', 'discover', 'find', 'spot', 'see', 
    'notice', 'observe', 'witness', 'behold', 'gaze upon', 'stare at'];
  
  const bird = ['bird', 'songbird', 'eagle', 'hawk', 'falcon', 'swallow', 
    'lark', 'thrush', 'wren', 'robin', 'cardinal', 'bluebird'];
  
  const interjection_speechtag = ['exclaim', 'cry out', 'shout', 'call out', 
    'declare', 'proclaim', 'announce', 'voice', 'express', 'state', 'utter'];
  
  const random_death = ['falls into a deep ravine', 'drowns in rushing waters', 
    'gets lost in the endless forest', 'perishes in the cold mountain air', 
    'disappears into the mist', 'vanishes without a trace', 'meets her end in the wilderness'];

  const pick = (array) => array[Math.floor(Math.random() * array.length)];

  const addLineBreaks = (text, maxLength = 50) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    
    for (const word of words) {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    
    return lines.join('\n');
  };

  const generatePoem = () => {
    const p = pick(place);
    const ga = pick(girl_adjective);
    const gn = pick(girl_noun);
    const gv = pick(girl_verb);
    const wv = pick(want_verb);
    const tn = pick(travel_noun);
    
    // Body 1 (mountain)
    const b1av = pick(body1_active_verb);
    const b1p = pick(body1_place);
    const b1n = pick(body1_noun);
    const b1pv = pick(body1_passive_verb);
    const b1t = pick(body1_time);
    const b1v = pick(body1_verb);
    const b1st = pick(body1_speechtag);
    const b1a1 = pick(body1_adjective);
    const b1a2 = pick(body1_adjective);
    
    // Body 2 (ocean)
    const b2av = pick(body2_active_verb);
    const b2p = pick(body2_place);
    const b2n = pick(body2_noun);
    const b2pv = pick(body2_passive_verb);
    const b2t = pick(body2_time);
    const b2v = pick(body2_verb);
    const b2st = pick(body2_speechtag);
    const b2a1 = pick(body2_adjective);
    const b2a2 = pick(body2_adjective);
    
    // Body 3 (forest)
    const b3av = pick(body3_active_verb);
    const b3p = pick(body3_place);
    const b3n = pick(body3_noun);
    const b3pv = pick(body3_passive_verb);
    const b3t = pick(body3_time);
    const b3v = pick(body3_verb);
    const b3st = pick(body3_speechtag);
    const b3a1 = pick(body3_adjective);
    const b3a2 = pick(body3_adjective);
    
    const b4v = pick(body4_verb);
    const b = pick(bird);
    const ist = pick(interjection_speechtag);
    const rd = pick(random_death);

    // Build poem with stanza breaks preserved
    const stanzas = [
      `Once upon a time,\nIn a ${p},\nThe ${ga} ${gn} girl ${gv}s.`,
      `Everyone tells her: 
      "A ${ga} girl like you could ${wv}!"`,
      `She wants to ${wv}.\nShe wants,\n\nAnd wants\nAnd wants\nAnd wants`,
      `And she thinks:\n"Perhaps if I go on a ${tn},"\n\n"I will find what I am looking for."`,
      `So she ${b1av}s the ${b1p}.\n${b1av}s the ${b1n}.\n${b1pv}s the ${b1n}.\nThe ${b1n}s ${b1av} the ${b1n}.\n${b1t} ${b1v}s.\nThe ${b1n}s ${b1st}:\n"What a ${b1a1} and ${b1a2} girl!"`,
      `But still, the girl remains dissatisfied –`,
      `So she ${b2av}s the ${b2p}.\n${b2av}s the ${b2n}.\n${b2pv}s the ${b2n}.\nThe ${b2n}s ${b2av} the ${b2n}.\n${b2t} ${b2v}s.\nThe ${b2n}s ${b2st}:\n"What a ${b2a1} and ${b2a2} girl!"`,
      `But still, the girl remains dissatisfied –`,
      `So she ${b3av}s the ${b3p}.\n${b3av}s the ${b3n}.\n${b3pv}s the ${b3n}.\nThe ${b3n}s ${b3av} the ${b3n}.\n${b3t} ${b3v}s.\nThe ${b3n}s ${b3st}:\n"What a ${b3a1} and ${b3a2} girl!"`,
      `But still, the girl remains dissatisfied –`,
      `So she ${b1av}s the ${b1p}.\nAnd she ${b4v}s a ${b} so beautiful, she ${ist}s –`,
      `"What a beautiful bird! I could be moved to tears! \n Surely, this must be what I have been looking for
       this entire time!"`,
      `But the ${b} begins to fly away.\nBlindly, the girl chases it –`,
      `${rd}.\n\nThe End.`
    ];

    // Join stanzas with proper breaks, no character limit
    return stanzas.join('\n\n');
  };

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
    const img = new window.Image();
    img.src = "/EndPage.PNG";
    img.onload = () => setBookImg(img);
  }, []);

  // Generate poems
  useEffect(() => {
    const generatePoems = () => {
      const fullPoem = generatePoem();
      setPoems([fullPoem]);
    };
    
    generatePoems();
    const interval = setInterval(() => {
      const fullPoem = generatePoem();
      setPoems([fullPoem]);
    }, 30000); // Longer interval since poems are much longer now

    return () => clearInterval(interval);
  }, []);

  if (stageSize.width === 0 || stageSize.height === 0) {
    return null;
  }

  // Split one poem into two pages
  const splitPoem = (poem) => {
    if (!poem) return { left: '', right: '' };
    
    const lines = poem.split('\n');
    const midPoint = Math.floor(lines.length / 2);
    
    return {
      left: lines.slice(0, midPoint).join('\n'),
      right: lines.slice(midPoint).join('\n')
    };
  };

  const currentPoem = poems[0] || '';
  const { left: leftPageText, right: rightPageText } = splitPoem(currentPoem);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Stage width={stageSize.width} height={stageSize.height} style={{ display: "block" }}>
        <Layer listening={false}>
          {bookImg && (() => {
            const imageAspect = bookImg.width / bookImg.height;
            const stageAspect = stageSize.width / stageSize.height;
            
            let imageWidth, imageHeight, imageX, imageY;
            
            if (imageAspect > stageAspect) {
              // Image is wider than stage - fit to width
              imageWidth = stageSize.width;
              imageHeight = stageSize.width / imageAspect;
              imageX = 0;
              imageY = (stageSize.height - imageHeight) / 2;
            } else {
              // Image is taller than stage - fit to height
              imageHeight = stageSize.height;
              imageWidth = stageSize.height * imageAspect;
              imageX = (stageSize.width - imageWidth) / 2;
              imageY = 0;
            }
            
            return (
              <KImage
                image={bookImg}
                x={imageX}
                y={imageY}
                width={imageWidth}
                height={imageHeight}
              />
            );
          })()}
        </Layer>
        <Layer>
          {/* Left Page Text */}
          <Group x={stageSize.width * 0.205} y={stageSize.height * 0.225}>
            <KText
              text={leftPageText}
              fontSize={12}
              fill="#000"
              x={0}
              y={0}
              width={stageSize.width * 0.35}
              height={stageSize.height * 0.8}
              align="left"
              verticalAlign="top"
              wrap="word"
            />
          </Group>
          
          {/* Right Page Text */}
          <Group x={stageSize.width * 0.65} y={stageSize.height * 0.225}>
            <KText
              text={rightPageText}
              fontSize={12}
              fill="#000"
              x={0}
              y={0}
              width={stageSize.width * 0.35}
              height={stageSize.height * 0.8}
              align="left"
              verticalAlign="top"
              wrap="word"
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}