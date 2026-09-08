export function AnalyticsCard({name,count,total}:{name:string,count:number,total:number}){
    return(
        <div>
            <h4>{name}</h4>
            <p>{count}/{total}</p>
        </div>
    )
}