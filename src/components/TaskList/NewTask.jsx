import React from "react";

const NewTask = ({ data, index = 0 }) => {
  // alternate background color based on index (even/odd)
  const bgClass = index % 2 === 0 ? "bg-green-400" : "bg-green-300";

  return (
    <div className={`flex-shrink-0 h-full w-[360px] p-5 ${bgClass} rounded-xl`}>
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-2">
        <button className="bg-blue-500 w-full">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
