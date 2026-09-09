import {useAnalytics} from "../hooks/useAnalytics";
import {AnalyticsCard} from "./AnalyticsCard";
import {Button} from "./Button";
import {Modal} from "./Modal";

export function AnalyticsModal({onClose}:{onClose:()=>void}){

    const {analytics,error,isLoading} = useAnalytics();

    if(error){
        console.error("Analytics fetch failed:", error);

        return (
            <Modal title="Analytics">
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                    
                    <div className="text-center space-y-1">
                        <p className="text-sm font-medium text-slate-700">Unable to load analytics</p>
                    </div>
                    
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                </div>
            </Modal>
        );
    }

    if(isLoading){
        return (
            <Modal title="Analytics">
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                    
                    <p className="text-sm text-slate-400 font-medium animate-pulse">
                        Loading...
                    </p>

                    <Button variant="secondary" onClick={onClose}>Close</Button>
                </div>
            </Modal>
        );
    }

    return(
        <Modal title="Analytics">
                <AnalyticsCard name="Pending" count={analytics?.pendingCount || 0} total={analytics?.taskCount || 0} colorClass="bg-amber-600"/>
                <AnalyticsCard name="In Progress" count={analytics?.inProgressCount || 0} total={analytics?.taskCount || 0}  colorClass="bg-blue-600"/>
                <AnalyticsCard name="Completed" count={analytics?.completedCount || 0} total={analytics?.taskCount || 0} colorClass="bg-green-600"/>
                <div className="flex justify-center">
                    <Button variant="secondary" onClick={onClose}>Close</Button>
                </div>
        </Modal>
    );

}