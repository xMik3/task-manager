import type {Task,TaskBase} from "../types/task";
import {Button} from "./Button";
import {Modal} from "./Modal";

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
        <Modal title="Edit Task">
                
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="flex flex-col pb-4">
                    Title
                    <input className="mt-1.5 w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg p-2.5" type="text" name="title" defaultValue={task.title} required />
                </label>
                
                <label className="flex flex-col pb-4">
                    Description
                    <textarea className="resize-none mt-1.5 w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg p-2.5" name="description" rows={6} defaultValue={task.description} />
                </label>
                
                <div className="w-3/4 sm:w-1/2 mx-auto flex justify-between pt-4">
                    <Button variant="secondary" type="button" onClick={onClose}>Cancel</Button>
                    <Button variant="primary" type="submit">Edit Task</Button>
                </div>
            </form>

        </Modal>
    );
}