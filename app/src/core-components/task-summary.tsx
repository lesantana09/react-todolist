import Badge from "../components/badge"
import Text from "../components/text"
import useTasks from "../hooks/use-tasks";

export default function TaskSummary(){

    const { createdtasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

    return <>
        <div className="flex items-center gap-2">
            <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
            <Badge loading={isLoadingTasks} variant="secondary">{createdtasksCount}</Badge>
        </div>

        <div className="flex items-center gap-2">
            <Text variant="body-sm-bold" className="!text-gray-300">Concluídas</Text>
            <Badge loading={isLoadingTasks} variant="primary">{concludedTasksCount} de {createdtasksCount}</Badge>
        </div>        
    </>
}