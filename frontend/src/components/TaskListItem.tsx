import type {TaskBase,TaskStatus,Task} from "../types/task";
import type {modals} from "../App";
import {Button} from "./Button";

type TaskListItemProps = {
    task: Task;
    setDisplayedModal: (modal: modals) => void;
    setSelectedTask: (task: Task) => void;
    editTask: (id:string,task:TaskBase) => void;
}

export function TaskListItem({task,setDisplayedModal,setSelectedTask,editTask}:TaskListItemProps){

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value as TaskStatus;
        editTask(task.id, {title: task.title,description: task.description,status: newStatus});
    };

    const handleModalTrigger = (modalState: "edit" | "delete",task:Task) => {
        setDisplayedModal(modalState);
        setSelectedTask(task);
    }

    return(
        <li>
            <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <span>Created At: {new Date(task.timestamp).toLocaleString()}</span>
            </div>
            <div>
                <select defaultValue={task.status} onChange={handleStatusChange} >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <Button onClick={() => handleModalTrigger("edit",task)}>Edit</Button>
                <Button onClick={() => handleModalTrigger("delete",task)}>Delete</Button>
            </div>


        </li>
    );

}
