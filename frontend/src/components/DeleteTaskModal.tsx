import {Button} from "./Button";
import type {Task} from "../types/task";

type DeleteTaskModalProps = {
    onClose:() => void;
    onSubmit:(id:string) => void;
    task: Task;
}

export function DeleteTaskModal({onClose,onSubmit,task}:DeleteTaskModalProps){
    
    const handleDelete = () => {
        onSubmit(task.id);
        onClose();
    }

    return(
        <div>
            <div>
                <h2>Delete Task</h2>

                <p>
                    Are you sure you want to delete {task.title}? 
                </p>

                <Button onClick={handleDelete}>Delete Task</Button>
                <Button onClick={onClose}>Cancel</Button>
            </div>
        </div>
    )

}