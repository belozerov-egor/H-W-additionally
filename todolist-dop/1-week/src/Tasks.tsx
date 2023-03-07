export type TasksDataType = {
    taskId: number
    title: string
    isDone: boolean
}

export type TaskType = {
    data: {
        title: string
        tasks: Array<TasksDataType>
        students: Array<string>
    }
}


export const Tasks = (props: TaskType) => {
    return (
        <>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map(t=>{
                   return(
                       <li key={t.taskId}>
                           <input type="checkbox" checked={t.isDone}/>
                           <span>{t.title}</span>
                       </li> )
                })}
            </ul>

            <ul>
                {props.data.students.map((s,index)=>{
                    return (
                        <li key={index}>{s}</li>
                    )
                })}
            </ul>

        </>
    )
}