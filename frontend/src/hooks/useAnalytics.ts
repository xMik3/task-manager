import {useState,useEffect} from "react";
import type {Analytics} from "../types/analytics";

export function useAnalytics(){

    const [isFetching, setIsFetching] = useState<boolean>(false);

    const [analytics,setAnalytics] = useState<Analytics | null>(null);
    const [error,setError] = useState<string>();
    const [showLoading, setShowLoading] = useState<boolean>(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        if (isFetching) {
            timeoutId = setTimeout(() => setShowLoading(true), 250);
        } else {
            setShowLoading(false);
        }

        return () => clearTimeout(timeoutId);
    }, [isFetching]);

    //GET request to the /tasks/analytics endpoint
    useEffect(() => {
        setIsFetching(true);
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
            })
            .catch(err => {
                setError(err.message);
                setIsFetching(false);
            });
        }, []);

    return {analytics, error, isLoading:showLoading};

}