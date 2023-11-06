"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);

    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  let renderTask = <h2>No Task Available</h2>;
  renderTask = mainTask.map((task, index) => {
    return (
      <div className="flex justify-between">
        <h5>{task.title}</h5>
        <h5>{task.desc}</h5>
      </div>
    );
  });
  return (
    <>
      <h2 className="bg-black text-white font-bold text-center text-5xl">
        Rushi ToDo List
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Task Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}></input>
        <input
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}></input>
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold  rounded m-5">
          Add Task
        </button>
      </form>
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
