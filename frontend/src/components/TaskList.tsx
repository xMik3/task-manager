import {TaskListItem} from "./TaskListItem";
import type {Task,TaskBase} from "../types/task";
import type {Modals} from "../App";

type TaskListProps = {
    tasks: Task[];
    error: string | null;
    isLoading: boolean;
    setDisplayedModal: (modal : Modals) => void;
    setSelectedTask: (task: Task) => void;
    editTask: (id:string,task:TaskBase) => void;
};

export function TaskList({tasks,error,isLoading,setDisplayedModal,setSelectedTask,editTask}:TaskListProps){

  if(error){
    return(
        <div className="flex flex-col items-center justify-center py-12 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-sm font-medium text-slate-700">Unable to load tasks</p>
          </div>
        </div>
    )
  }

  if(isLoading){
    return(
        <div className="flex flex-col items-center justify-center py-12 space-y-6">
          <div className="text-center space-y-1">
            <p className="text-sm text-slate-400 font-medium animate-pulse">Loading tasks...</p>
          </div>
        </div>
    )
  }

  if(tasks.length===0){
    return(
      <div className="flex flex-col items-center justify-center py-64">
        <h3 className="text-xl font-semibold text-slate-700">No Tasks Yet</h3>
        <p className="text-slate-500">Click the "Add Task" button to get started.</p>
      </div>
    )
  }

  const statusPriority = {
    "In Progress": 1,
    "Pending": 2,
    "Completed": 3
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    return statusPriority[a.status] - statusPriority[b.status];
  });

  return(
    <ul>
        {
            sortedTasks.map(task => (
                <TaskListItem key={task.id} task={task} setDisplayedModal={setDisplayedModal} setSelectedTask={setSelectedTask} editTask={editTask}/>
            ))
        }
    </ul>
  )

}