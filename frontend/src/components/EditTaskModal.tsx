import type {Task,TaskBase} from "../types/task";

import {Button} from "./Button";

type EditTaskModalProps = {
  onClose: () => void;
  onSubmit: (id:string, taskData: TaskBase) => void;
  task: Task;
};

export function EditTaskModal({onClose, onSubmit, task}: EditTaskModalProps) {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
 
        const formData = new FormData(e.currentTarget);


        const title = formData.get("title") as string;
        if(!title.trim()) return;

        const description = formData.get("description") as string;


        onSubmit(task.id,{title, description, status:task.status});
        onClose();
    };
    
    return (
        <div>
            <div>
                <h2>Edit Task</h2>
                
                <form onSubmit={handleSubmit}>
                    <label>
                        Title
                        <input type="text" name="title" defaultValue={task.title} required />
                    </label>
                    
                    <label>
                        Description
                        <textarea name="description" rows={3} defaultValue={task.description} />
                    </label>
                    
                    <div className="modal-actions">
                        <Button type="button" onClick={onClose}>Cancel</Button>
                        <Button type="submit">Edit Task</Button>
                    </div>
                </form>

            </div>
        </div>
    );
}