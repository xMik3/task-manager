import {useState} from "react";
import {useTasks} from "./hooks/useTasks";

import {Button} from "./components/Button";
import {AnalyticsModal} from "./components/AnalyticsModal";
import {TaskList} from "./components/TaskList";
import {AddTaskModal} from "./components/AddTaskModal";
import {EditTaskModal} from "./components/EditTaskModal";
import {DeleteTaskModal} from "./components/DeleteTaskModal";

import type {Task} from "./types/task";

export type Modals = "none" | "add" | "edit" | "delete" | "analytics";

function App(){

  const {tasks,error,isLoading,addTask,editTask,deleteTask} = useTasks();

  const [displayedModal,setDisplayedModal] = useState<Modals>("none");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const closeModal = () => setDisplayedModal("none");


  return(
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans p-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Task Manager</h1>
          <div className="flex gap-5">
            <Button  onClick={() => setDisplayedModal("add")}>Add Task</Button>
            <Button onClick={() => setDisplayedModal("analytics")}>Analytics</Button>
          </div>
        </header>
        <main>
          <TaskList tasks={tasks} error={error} isLoading={isLoading} setDisplayedModal={setDisplayedModal} setSelectedTask={setSelectedTask} editTask={editTask}/>
          {(displayedModal === "add") && (<AddTaskModal onClose={closeModal} onSubmit={addTask}/>)}
          {(displayedModal === "edit" && selectedTask !== null) && (<EditTaskModal onClose={closeModal} onSubmit={editTask} task={selectedTask}/>)}
          {(displayedModal === "delete" && selectedTask !== null) && (<DeleteTaskModal onClose={closeModal} onSubmit={deleteTask} task={selectedTask}/>)}
          {(displayedModal === "analytics") && (<AnalyticsModal onClose={closeModal}/>)}
        </main>
    </div>
  )
}

export default App;