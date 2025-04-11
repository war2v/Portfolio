import React from "react";

export default function Skills() {
  return (
    <div className="flex justify-center bg-slate-100 p-4 m-2 rounded-xl w-full">
      <div className="text-center bg-gray-200 shadow-lg border border-gray-300 rounded-lg p-4 mx-10">
        <h1 className="border-b border-black">Technical Skills</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2">Full Stack Web Development</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">Game Development</h1>
        </div>

        <h1 className="border-b border-black">Programming Languages</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2">Python</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">C++</h1>
          <h1 className="p-2 my-2  border-l border-gray-400 ">JavaScript</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">PHP</h1>
        </div>

        <h1 className="border-b border-t border-black">Relational Databases</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2 ">MySQL</h1>
          <h1 className="p-2 my-2 border-l border-gray-400"> PostgresSQL</h1>
        </div>

        <h1 className="border-b border-t border-black">Frameworks</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2 ">NextJs</h1>
          <h1 className="p-2 my-2 border-l border-gray-400">Django</h1>
          <h1 className="p-2 my-2 border-l border-gray-400">Flask</h1>
          <h1 className="p-2 my-2 border-l border-gray-400">Bootstrap</h1>
          <h1 className="p-2 my-2 border-l border-gray-400">Tailwind</h1>
        </div>
      </div>
    </div>
  );
}
