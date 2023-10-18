import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsCodeSlash, BsPlay } from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';

const iconSize = 30;

const stackComponents = {
  ReactJS: <GrReactjs size={iconSize} color={"#61DAFB"} title="React JS" />,
  Tailwind: <SiTailwindcss size={iconSize} color={"#06B6D4"} title="Tailwind CSS" />,
  HTML: <AiFillHtml5 size={iconSize} color={"#FF5722"} title="HTML5" />
};

export default function ProjectCard({name, type, desc, stack, thumbnail, githubLink, demoLink}) {
  const stackArray = stack.split(',').map(item => item.trim());
  const jsxElements = stackArray.map((item, index) => {
    const StackComponent = stackComponents[item];
    return StackComponent ? React.cloneElement(StackComponent, { key: index }) : null;
  });

  return (
    <div className="flex gap-6 p-4 bg-slate-500/25">
      <img src={thumbnail} className="w-[340px] h-[190px] bg-[#f5f5f5] rounded-sm object-center border-2 border-zinc-400" />
      <div className="p-1 flex flex-col justify-between">
        <div>
          <div className="font-bold text-[18px] text-[#ffffff]">
            {name}
            <span className="ml-2 font-light">/</span>
            <span className="font-light italic text-[14px]">{type}</span>
          </div>
          <div className="mt-1">{desc}</div>
        </div>
        <div className="flex items-center gap-2">
          Stack: {jsxElements}
        </div>
        <div className="flex gap-4 text-[14px]">
          <a href={githubLink} target="_blank" className="flex gap-1 items-center p-2 rounded-sm border-[#f5f5f5] border-2 hover:text-black/80 hover:bg-[#14ffec] hover:border-[#14ffec]"><BsCodeSlash size={20} /> Source Code</a>
          <a href={demoLink} className="flex items-center p-2 rounded-sm border-[#f5f5f5] border-2 hover:text-black/80 hover:bg-[#14ffec] hover:border-[#14ffec]">
            <BsPlay size={25} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
