import {useAnalytics} from "../hooks/useAnalytics";
import {AnalyticsCard} from "./AnalyticsCard";
import {Button} from "./Button";

export function AnalyticsModal({onClose}:{onClose:()=>void}){

    const {analytics,error,isLoading} = useAnalytics();

    if(error){
        return(
            <div>
                <div>
                    {error}
                    <Button onClick={onClose}>Close</Button>
                </div>
            </div>
        )
    }

    if(isLoading){
        return(
            <div>
                <div>
                    Loading
                    <Button onClick={onClose}>Close</Button>
                </div>
            </div>
        )
    }

    return(
        <div>
            <div>
                <AnalyticsCard name="Pending" count={analytics?.pendingCount || 0} total={analytics?.taskCount || 0}/>
                <AnalyticsCard name="In Progress" count={analytics?.inProgressCount || 0} total={analytics?.taskCount || 0}/>
                <AnalyticsCard name="Completed" count={analytics?.completedCount || 0} total={analytics?.taskCount || 0}/>
                <Button onClick={onClose}>Close</Button>
            </div>
        </div>
    );

}