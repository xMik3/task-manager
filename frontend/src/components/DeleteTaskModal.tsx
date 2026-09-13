import {Button} from "./Button";
import type {Task} from "../types/task";
import {Modal} from "./Modal";

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
        <Modal title="Delete Task">
            <div className="flex flex-col">
                <h3 className="pb-8 justify-center">Are you sure you want to delete this task?</h3>

                <div className="w-3/4 sm:w-1/2 mx-auto flex justify-between">
                    <Button variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button variant="dangerOutline" onClick={handleDelete}>Delete Task</Button>
                </div>

            </div>
        </Modal>
    )

}