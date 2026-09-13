import type {TaskBase,TaskStatus,Task} from "../types/task";
import type {Modals} from "../App";
import {Button} from "./Button";

type TaskListItemProps = {
    task: Task;
    setDisplayedModal: (modal: Modals) => void;
    setSelectedTask: (task: Task) => void;
    editTask: (id:string,task:TaskBase) => void;
}

const statusColors = {
  "Pending": "text-amber-700 border-amber-200",
  "In Progress": "text-blue-700 border-blue-200",
  "Completed": "text-green-700 border-green-200"
};

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
        <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex flex-col w-2/3 pr-6">
                <h3 className="text-xl font-semibold text-gray-900 truncate">{task.title}</h3>
                <p className="text-m text-gray-500 mt-1 line-clamp-2">{task.description}</p>
                <span className="text-xs text-gray-400 mt-2 font-medium">Created At: {new Date(task.timestamp).toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
                <select defaultValue={task.status} onChange={handleStatusChange} className={`cursor-pointer h-9.5 font-bold bg-gray-50 border text-sm rounded-lg block p-2 ${statusColors[task.status]}`} >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <Button variant="secondary" onClick={() => handleModalTrigger("edit",task)}>Edit</Button>
                <Button variant="dangerFilled" onClick={() => handleModalTrigger("delete",task)}>Delete</Button>
            </div>
        </li>
    );

}
