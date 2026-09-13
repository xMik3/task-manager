import {useState} from "react";

import type {TaskBase,TaskStatus} from "../types/task";
import {Button} from "./Button";
import {Modal} from "./Modal";

type AddTaskModalProps = {
  onClose: () => void;
  onSubmit: (taskData: TaskBase) => void;
};

const statusColors = {
  "Pending": "text-amber-700 border-amber-200",
  "In Progress": "text-blue-700 border-blue-200",
  "Completed": "text-green-700 border-green-200"
};

export function AddTaskModal({onClose, onSubmit}: AddTaskModalProps){

  const [statusSelection, setStatusSelection] = useState<TaskStatus>("Pending");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);


      const title = formData.get("title") as string;
      if (!title.trim()) return;

      const description = formData.get("description") as string;
      const status = formData.get("status") as TaskStatus;


      onSubmit({title, description, status});
      onClose();
    };

  return (
    <Modal title="Add Task">

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="flex flex-col pb-4">
          Title
          <input className="mt-1.5 w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg p-2.5" type="text" name="title" required />
        </label>
        
        <label className="flex flex-col pb-4">
          Description
          <textarea className="resize-none mt-1.5 w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg p-2.5" name="description" rows={6} />
        </label>
        
        <label className="flex flex-col pb-4">
          Status
          <select onChange={(e)=>{setStatusSelection(e.target.value as TaskStatus)}} className={`h-9.5 mt-1.5 w-full border text-sm rounded-lg p-2.5 cursor-pointer font-bold block ${statusColors[statusSelection]}`} name="status" defaultValue="Pending">
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        
        <div className="w-3/4 sm:w-1/2 mx-auto flex justify-between pt-4">
          <Button variant="secondary" type="button" onClick={onClose}>Cancel</Button>
          <Button variant="primary" type="submit">Add Task</Button>
        </div>
      </form>

    </Modal>
  );
}
