import { useState } from "react";
import shortid from "shortid";
import Layout from "../components/layout/Layout";
import CreateTask from "../components/tasks/CreateTask";
import ShowTasks from "../components/tasks/ShowTasks";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  // const [visibility, setVisibility] = useState("all");

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  };

  return (
    <Layout>
      <h1>ToDo List</h1>
      <CreateTask addNewTask={addNewTask} />
      <ShowTasks tasks={tasks} />
    </Layout>
  );
};

export default Task;
