import styles from "./App.module.css";
import AddTask from "./components/AddTask";

function App() {
  return (
    <div className={styles.app}>
      <h1>To-do List</h1>
      <div className={styles.body_page}>
      <AddTask />
      </div>
    </div>
  )
}

export default App
