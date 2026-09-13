import {useState,useEffect} from "react";
import type {Analytics} from "../types/analytics";

export function useAnalytics(){

    const [isFetching, setIsFetching] = useState<boolean>(true);

    const [analytics,setAnalytics] = useState<Analytics | null>(null);
    const [error,setError] = useState<string>();
    const [showLoading, setShowLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!isFetching) return;

        const timeoutId = setTimeout(() => setShowLoading(true), 250);
        return () => clearTimeout(timeoutId);
    }, [isFetching]);

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
                setIsFetching(false);
                setShowLoading(false);
            })
            .catch((err: unknown) => {
                if(err instanceof Error) {
                    setError(err.message);
                }else{
                    setError('An unexpected error occurred');
                }

                setIsFetching(false);
                setShowLoading(false);
            });
        }, []);

    return {analytics, error, isLoading:showLoading};

}