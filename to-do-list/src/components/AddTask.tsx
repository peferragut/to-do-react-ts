type AddTaskProps = {
    loadTask: (task: string) => void;
}

import { useState, KeyboardEvent } from 'react'
import styles from './AddTask.module.css'

function AddTask({loadTask}: AddTaskProps) {
    const [task, setTask] = useState('');

    const pressEnterKey = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            loadTask(task);
            setTask(''); // Clears the input text
        }
    };

    return (
        <div className={styles.input_container}>
            <input
                type="text" 
                placeholder="What do you have to do?" 
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={pressEnterKey}
                value={task}
            />
        </div>
    )
}

export default AddTask