import {useState,useEffect} from 'react';
import type {Task,TaskBase} from '../types/task';

const API = 'http://localhost:3000/tasks';

export function useTasks(){
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  //GET request at /tasks
  useEffect(() => {
    fetch(API)
      .then(res => {
        if(!res.ok){
          throw new Error('Backend failed');
        }

        return res.json();
      })
      .then(data => {
        setTasks(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  //POST request at /tasks, if the request is successful, we add the new task locally to the list without a new GET
  const addTask = async (taskData: TaskBase) => {
    try{
      const res = await fetch(API,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(taskData),
      });

      if(!res.ok){
        throw new Error('Failed to add task');
      }

      const newTask: Task = await res.json();

      setTasks(previousTasks => [...previousTasks, newTask]);

    }catch(err: any){
      setError(err.message);
    }
  };


  //PUT request to /tasks/:taskID, for now, each change replaces the whole task object,  if the request is successful, we add the edited task locally to the list without a new GET
  const editTask = async (id: string, updatedData: TaskBase) => {
    try{
      const res = await fetch(`${API}/${id}`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedData),
      });

      if(!res.ok){
        throw new Error('Failed to edit task');
      }

      const updatedTask: Task = await res.json();

      setTasks(prevTasks => prevTasks.map(task => {
          if(task.id === id){
            return updatedTask;
          }

          return task;
        })
      );

    }catch(err: any){
      setError(err.message);
    }
  };

  //DELETE request to /tasks/:taskID,  if the request is successful, we remove task locally to the list without a new GET
  const deleteTask = async (id: string) => {
    try {
      const res = await fetch(`${API}/${id}`,{
        method: "DELETE",
      });

      if(!res.ok){
        throw new Error('Failed to delete task');
      }

      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));

    }catch(err: any){
      setError(err.message);
    }
  };

  return {tasks,error,isLoading,addTask,editTask,deleteTask};
}