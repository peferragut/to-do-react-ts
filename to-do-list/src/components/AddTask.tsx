import { useState, KeyboardEvent } from 'react'
import styles from './AddTask.module.css'

function AddTask() {
    const [task, setTask] = useState('');

    return (
        <div className={styles.input_container}>
            <input
                type="text" 
                placeholder="What do you have to do?" 
                onChange={(e) => setTask(e.target.value)}
            />
        </div>
    )
}

export default AddTask