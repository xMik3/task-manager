import type {TaskBase,TaskStatus} from "../types/task";

import {Button} from "./Button";

type AddTaskModalProps = {
  onClose: () => void;
  onSubmit: (taskData: TaskBase) => void;
};

export function AddTaskModal({onClose, onSubmit}: AddTaskModalProps){

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
    <div>s
          <div>
            <h2>Add Task</h2>
            
            <form onSubmit={handleSubmit}>
              <label>
                Title
                <input type="text" name="title" required />
              </label>
              
              <label>
                Description
                <textarea name="description" rows={3} />
              </label>
              
              <label>
                Status
                <select name="status" defaultValue="Pending">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </label>
              
              <div>
                <Button type="button" onClick={onClose}>Cancel</Button>
                <Button type="submit">Add Task</Button>
              </div>
            </form>

          </div>
        </div>
  );
}
