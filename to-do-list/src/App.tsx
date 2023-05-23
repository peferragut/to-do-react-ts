import { useState } from "react";
import styles from "./App.module.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [list, setList] = useState<string[]>([])

  const loadTask = (task: string) => {
    setList([...list, task])
  }

  return (
    <div className={styles.app}>
      <h1>To-do List</h1>
      <div className={styles.body_page}>
        <AddTask loadTask={loadTask}/>
        <TaskList list={list} />
      </div>
    </div>
  )
}

export default App
