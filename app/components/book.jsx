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
  
  const body2_place = ['neighbouring village', 'cavern', 'kingdom', 'palace', 'tower', 
    'enchanted forest', 'seaside town', 'farmlands', 'royal court', 'dark forest', 
    'troll bridge', 'witch\'s hut', 'battlefield', 'war room', 'wastelands', 'graveyard'];
  
  const body2_noun = ['townspeople', 'king', 'queen', 'prince', 'dragon', 'valiant knight', 
    'maze', 'mirror', 'riddle', 'wizard', 'quest', 'key', 'fairy', 'mystery', 
    'talking animals', 'wise tree', 'old witch', 'kind old man', 'young twins', 'loyal hound'];
  
  const body2_time = ['sunset', 'twilight', 'daybreak', 'morning', 'noontime', 
    'suppertime', 'sunrise', 'moonrise', 'dawn', 'midnight'];
  
  const body2_verb = ['wait', 'dream', 'sigh', 'blink', 'sleep', 'rise', 
    'beckon', 'hide', 'laugh', 'sing', 'bleed', 'scorche', 'take', 'leave', 
    'die', 'scream', 'weep', 'shrivel', 'crumple', 'shiver', 'tremble'];
  
  const body2_speechtag = ['exclaim', 'praise', 'cry', 'whisper', 'fawn', 'laugh', 
    'frown', 'gasp', 'scoff', 'lament', 'weep', 'mock', 'shriek', 'tremble'];
  
  const body2_adjective = ['wise', 'clever', 'hopeful', 'young', 'bright', 'beautiful', 
    'inquisitive', 'kind', 'gifted', 'generous', 'ambitious', 'wonderful', 'helpful', 
    'confusing', 'violent', 'terrible', 'awful', 'unpleasant', 'wicked', 'dreadful', 
    'horrifying', 'wretched', 'fearsome'];
  
  const body3_active_verb = ['conquers', 'slays', 'destroys', 'cuts through', 'tramples', 
    'tricks', 'deceives', 'punishes', 'curses', 'defeats', 'vanquishes', 'surrenders', 
    'loves', 'grieves', 'mourns'];
  
  const body3_place = ['neighbouring village', 'cavern', 'kingdom', 'palace', 'tower', 
    'enchanted forest', 'seaside town', 'farmlands', 'royal court', 'dark forest', 
    'troll bridge', 'witch\'s hut', 'battlefield', 'war room', 'wastelands', 'graveyard'];
  
  const body3_noun = ['townspeople', 'king', 'queen', 'prince', 'dragon', 'valiant knight', 
    'maze', 'mirror', 'riddle', 'wizard', 'quest', 'key', 'fairy', 'mystery', 
    'talking animals', 'wise tree', 'old witch', 'kind old man', 'young twins', 'loyal hound'];
  
  const body3_time = ['sunset', 'twilight', 'daybreak', 'morning', 'noontime', 
    'suppertime', 'sunrise', 'moonrise', 'dawn', 'midnight'];
  
  const body3_verb = ['bleed', 'scorche', 'take', 'leave', 'die', 'scream', 'weep', 
    'shrivel', 'crumple', 'shiver', 'tremble', 'mourn'];
  
  const body3_speechtag = ['exclaim', 'praise', 'cry', 'whisper', 'fawn', 'laugh', 
    'frown', 'gasp', 'scoff', 'lament', 'weep', 'mock', 'shriek', 'tremble'];
  
  const body3_adjective = ['wise', 'clever', 'hopeful', 'young', 'bright', 'beautiful', 
    'inquisitive', 'kind', 'gifted', 'generous', 'ambitious', 'wonderful', 'helpful', 
    'confusing', 'violent', 'terrible', 'awful', 'unpleasant', 'wicked', 'dreadful', 
    'horrifying', 'wretched', 'fearsome'];
  
  const body4_verb = ['see', 'catche', 'discover', 'find', 'capture', 'spot'];
  
  const interjection_speechtag = ['weep', 'exclaim', 'shout', 'gasp', 'shout'];
  
  const random_death = ['And she tumbles off a cliff and dies.', 'And she falls into a trap and dies.', 
    'And she runs into a monster and dies.', 'And she ends up right back where she started and dies.', 
    'And she gets struck by an arrow and dies.', 'And she gets pushed off a ledge and dies.', 
    'And she tries to reach it, but she knows she will always die before she can.', 
    'And she is offered a poisoned apple, eats it, and dies.', 
    'And she pricks her finger on a spindle and dies.', 
    'And she falls from a great height into a bed of thorns and dies.', 
    'And she falls down and breaks her crown and dies.', 
    'And she falls off a beanstalk and dies.', 'And she falls down a well and dies.', 
    'And she dies chasing the bird, as she will over and over again.', 
    'And she dies chasing the bird, knowing in her heart she will never reach it.'];

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
    
    // Body 1 (first adventure)
    const b1av1 = pick(body1_active_verb);
    const b1av2 = pick(body1_active_verb);
    const b1av3 = pick(body1_active_verb);
    const b1p = pick(body1_place);
    const b1n1 = pick(body1_noun);
    const b1n2 = pick(body1_noun);
    const b1n3 = pick(body1_noun);
    const b1n4 = pick(body1_noun);
    const b1pv = pick(body1_verb);
    const b1t = pick(body1_time);
    const b1v = pick(body1_verb);
    const b1st = pick(body1_speechtag);
    const b1a1 = pick(body1_adjective);
    const b1a2 = pick(body1_adjective);
    
    // Body 2 (second adventure)
    const b2av1 = pick(body2_active_verb);
    const b2av2 = pick(body2_active_verb);
    const b2av3 = pick(body2_active_verb);
    const b2p = pick(body2_place);
    const b2n1 = pick(body2_noun);
    const b2n2 = pick(body2_noun);
    const b2n3 = pick(body2_noun);
    const b2n4 = pick(body2_noun);
    const b2pv = pick(body2_verb);
    const b2t = pick(body2_time);
    const b2v = pick(body2_verb);
    const b2st = pick(body2_speechtag);
    const b2a1 = pick(body2_adjective);
    const b2a2 = pick(body2_adjective);
    
    // Body 3 (third adventure)
    const b3av1 = pick(body3_active_verb);
    const b3av2 = pick(body3_active_verb);
    const b3av3 = pick(body3_active_verb);
    const b3p = pick(body3_place);
    const b3n1 = pick(body3_noun);
    const b3n2 = pick(body3_noun);
    const b3n3 = pick(body3_noun);
    const b3n4 = pick(body3_noun);
    const b3pv = pick(body3_verb);
    const b3t = pick(body3_time);
    const b3v = pick(body3_verb);
    const b3st = pick(body3_speechtag);
    const b3a1 = pick(body3_adjective);
    const b3a2 = pick(body3_adjective);
    
    const b4v = pick(body4_verb);
    const ist = pick(interjection_speechtag);
    const rd = pick(random_death);

    // Build poem with stanza breaks preserved
    const stanzas = [
      `Once upon a time,\nIn a ${p},\nThe ${ga} ${gn} girl ${gv}s.`,
      `Everyone tells her: 
      "A ${ga} girl like you could ${wv}!"`,
      `She wants to ${wv}.\nShe wants,\n\nAnd wants\nAnd wants\nAnd wants`,
      `And she thinks:\n"Perhaps if I go on a ${tn},"\n\n"I will find what I am looking for."`,
      `So she ${b1av1}s the ${b1p}.\n${b1av2}s the ${b1n1}.\n${b1pv}s the ${b1n2}.\nThe ${b1n3}s ${b1av3} the ${b1n4}.\n${b1t} ${b1v}s.\nThe ${b1n1}s ${b1st}:\n"What a ${b1a1} and ${b1a2} girl!"`,
      `But still, the girl remains dissatisfied –`,
      `So she ${b2av1}s the ${b2p}.\n${b2av2}s the ${b2n1}.\n${b2pv}s the ${b2n2}.\nThe ${b2n3}s ${b2av3} the ${b2n4}.\n${b2t} ${b2v}s.\nThe ${b2n1}s ${b2st}:\n"What a ${b2a1} and ${b2a2} girl!"`,
      `But still, the girl remains dissatisfied –`,
      `So she ${b3av1}s the ${b3p}.\n${b3av2}s the ${b3n1}.\n${b3pv}s the ${b3n2}.\nThe ${b3n3}s ${b3av3} the ${b3n4}.\n${b3t} ${b3v}s.\nThe ${b3n1}s ${b3st}:\n"What a ${b3a1} and ${b3a2} girl!"`,
      `But still, the girl remains dissatisfied –`,
      `So she ${b1av1}s the ${b1p}.\nAnd she ${b4v}s a bird so beautiful, she ${ist}s –`,
      `"What a beautiful bird! I could be moved to tears! \n Surely, this must be what I have been looking for
       this entire time!"`,
      `But the bird begins to fly away.\nBlindly, the girl chases it –`,
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

  // Split one poem into two pages more evenly
  const splitPoem = (poem) => {
    if (!poem) return { left: '', right: '' };
    
    // Split by lines first to get better control
    const lines = poem.split('\n');
    const totalLines = lines.length;
    
    // Find a good split point around the middle, preferring to break at empty lines (stanza breaks)
    let splitIndex = Math.floor(totalLines / 2);
    
    // Look for empty lines near the middle to make a cleaner break
    for (let i = Math.max(0, splitIndex - 3); i <= Math.min(totalLines - 1, splitIndex + 3); i++) {
      if (lines[i] === '') {
        splitIndex = i;
        break;
      }
    }
    
    return {
      left: lines.slice(0, splitIndex).join('\n'),
      right: lines.slice(splitIndex).join('\n').replace(/^\n+/, '') // Remove leading empty lines from right page
    };
  };

  const currentPoem = poems[0] || '';
  const { left: leftPageText, right: rightPageText } = splitPoem(currentPoem);


  const fontSize = 20;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Stage width={stageSize.width} height={stageSize.height} style={{ display: "block" }}>
        <Layer listening={false}>
          {/*{bookImg && (() => {
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
          })()}*/}
        </Layer>
        <Layer>
          {/* Left Page Text */}
          <Group x={stageSize.width * 0.15} y={stageSize.height * 0.05}>
            <KText
              text={leftPageText}
              fontSize={fontSize}
              fontFamily="Georgia"
              fill="#000000"
              x={0}
              y={0}
              width={stageSize.width * 0.42}
              height={stageSize.height * 1}
              align="left"
              verticalAlign="top"
              wrap="word"
              lineHeight={1}
            />
          </Group>
          
          {/* Right Page Text */}
          <Group x={stageSize.width * 0.58} y={stageSize.height * 0.05}>
            <KText
              text={rightPageText}
              fontSize={fontSize}
              fontFamily="Georgia"
              fill="#000000"
              x={0}
              y={0}
              width={stageSize.width * 0.42}
              height={stageSize.height * 1}
              align="left"
              verticalAlign="top"
              wrap="word"
              lineHeight={1}
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}