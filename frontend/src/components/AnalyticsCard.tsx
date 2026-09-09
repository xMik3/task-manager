type AnalyticsCardProps = {
  name: string;
  count: number;
  total: number;
  colorClass: string;
};

export function AnalyticsCard({ name, count, total, colorClass}: AnalyticsCardProps) {
  // Prevent dividing by zero if there are no tasks yet
  let percentage;
  if(total===0){
    percentage=0;
  }
  else{
    percentage=Math.round((count/total)*100);
  }

  return (
    <div className="p-4 rounded-xl">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-500">{name}</span>
        <span className="text-2xl font-bold text-slate-800">{count}</span>
      </div>
      
      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
        
        <div 
          className={`h-1.5 rounded-full ${colorClass}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="mt-1.5 text-right text-xs font-medium text-slate-400">
        {percentage}%
      </div>
    </div>
  );
}