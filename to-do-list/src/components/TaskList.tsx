type TaskListProps = {
    list: string[]
}

export default function TaskList({list}: TaskListProps) {
    return (
        <div>
            <ul>
                {
                list.map(task => {
                    return (
                        <li>{task}</li> 
                    )
                })
                }
            </ul>
        </div>
    )
}