import Button from "../components/button"
import PlusIcon from "../assets/icons/plus.svg?react"
import TaskItems from "./task-items"
import useTasks from "../hooks/use-tasks"

export default function TasksList(){
    
    const { tasks } = useTasks();
    console.log(tasks)

    return (
        <>
            <section>
                <Button icon={PlusIcon} className="w-full">Nova tarefa</Button>
            </section>      
            <section className="space-y-2">
                <TaskItems/>
                <TaskItems/>
                <TaskItems/>
                <TaskItems/>
                <TaskItems/>
            </section>      
        </>
    )
}