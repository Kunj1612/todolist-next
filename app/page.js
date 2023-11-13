"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc, completed: false }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  const completeHandler = (i) => {
    let copytask = [...mainTask];
    copytask[i].completed = !copytask[i].completed;
    setMainTask(copytask);
  };

  let renderTask = <h2>No Tasks Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className={`flex items-center justify-between ${
            t.completed ? "text-gray-500 line-through" : ""
          }`}
        >
          <div className="between">
            <h4 className="text-xl font-semibold">{t.title}</h4>
            <h6 className="text-s font-light mb-2">{t.desc}</h6>
          </div>
          <div>
            <button
              onClick={() => completeHandler(i)}
              className={`bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mr-2`}
            >
              {t.completed ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => deleteHandler(i)}
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-4xl font-bold text-white flex justify-center p-5">
        Pikachu's TODO LIST
      </h1>
      <div className="flex justify-center">
        <form onSubmit={submitHandler}>
          <input
            className="border-2 border-blue-800 m-3 p-1"
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
              required
          />
          <input
            className="border-2 border-blue-800 m-3 p-1"
            type="text"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Add Task
          </button>
        </form>
      </div>
      <hr />
      <div className="p-8 bg-slate-300 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
