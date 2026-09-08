import {useState,useEffect} from "react";
import type {Analytics} from "../types/analytics";

export function useAnalytics(){

    const [analytics,setAnalytics] = useState<Analytics | null>(null);
    const [error,setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);


    //GET request to the /tasks/analytics endpoint
    useEffect(() => {
    fetch('http://localhost:3000/tasks/analytics')
        .then(res => {
            if(!res.ok){
                throw new Error('Backend failed');
            }

            return res.json();
        })
        .then(data => {
            setAnalytics(data);
            setIsLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        });
    }, []);

    return {analytics, error, isLoading};

}