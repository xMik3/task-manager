import {TaskListItem} from "./TaskListItem";
import type {Task,TaskBase} from "../types/task";
import type {modals} from "../App";

type TaskListProps = {
    tasks: Task[];
    error: string | null;
    isLoading: boolean;
    setDisplayedModal: (modal : modals) => void;
    setSelectedTask: (task: Task) => void;
    editTask: (id:string,task:TaskBase) => void;
};

export function TaskList({tasks,error,isLoading,setDisplayedModal,setSelectedTask,editTask}:TaskListProps){

  if(error){
    return(
        <div>
            {error}
        </div>
    )
  }

  if(isLoading){
    return(
        <div>
            Loading
        </div>
    )
  }

  if(tasks.length===0){
    return(
        <div>
            No Tasks Yet
        </div>
    )
  }


  return(
    <ul>
        {
            tasks.map(task => (
                <TaskListItem key={task.id} task={task} setDisplayedModal={setDisplayedModal} setSelectedTask={setSelectedTask} editTask={editTask}/>
            ))
        }
    </ul>
  )

}