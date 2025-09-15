import React from "react";

export default function Skills() {
  return (
    <div className="flex justify-center bg-slate-100 p-4 m-2 rounded-xl w-full">
      <div className="text-center bg-gray-200 shadow-lg border border-gray-300 rounded-lg p-4 mx-10">

        <h1 className="border-b border-t border-black">Front End</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2">JavaScript</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">HTML</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">CSS</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">Tailwind</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">Bootstrap</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">Next.js</h1>
        </div>

        <h1 className="border-b border-t border-black">Back End</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2">Node.js</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">Express.js</h1>
          <h1 className="p-2 my-2  border-l border-gray-400 ">C++</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">Python</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">Django</h1>
          <h1 className="p-2 my-2 border-l border-gray-400 ">Flask</h1>
        </div>

        <h1 className="border-b border-t border-black">Databases</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2 ">MySQL</h1>
          <h1 className="p-2 my-2 border-l border-gray-400"> PostgresSQL</h1>
        </div>

        <h1 className="border-b border-t border-black">Programming Languages</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2 ">Python</h1>
          <h1 className="p-2 my-2 border-l border-gray-400">C++</h1>
          <h1 className="p-2 my-2 border-l border-gray-400">JavaScript</h1>
        </div>

        <h1 className="border-b border-t border-black">Other</h1>
        <div className="flex justify-center text-purple-600">
          <h1 className="p-2 my-2 ">Git/Github</h1>
          <h1 className="p-2 my-2 border-l border-gray-400">REST API</h1>
          <h1 className="p-2 my-2 border-l border-gray-400">Agile Methodologies</h1>
        </div>
      </div>
    </div>
  );
}
