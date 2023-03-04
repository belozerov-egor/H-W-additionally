type StudentType = {
    id: number
    name: string
    age: number
}


type NewComponentType = {
    students: Array<StudentType>
}

export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        {manufacturer:"BMW",model:'m5cs'},
        {manufacturer:"Mercedes",model:'e63s'},
        {manufacturer:"Audi",model:'rs6'}
    ]

    return (
        <div>
            <ul>
                {props.students.map(s => {
                    return (

                        <li key={s.id}>
                            <span> {s.name}</span>
                            <span> {s.age}</span>
                        </li>)
                })}
            </ul>
<TopCars table={topCars}/>
        </div>
    )
}
type TopCarsItemType = {
    manufacturer:string
    model:string
}

type TopCarsType = {
    table: Array<TopCarsItemType>
}
const TopCars = (props: TopCarsType) => {
    return(
        <>
<table>

    {props.table.map((td, index)=> {
        return(
            <tr key={index}>
            <td>
                <span>{td.manufacturer}</span>
                <span>{td.model}</span>
            </td>
    </tr>
        )
    })}


</table>
        </>
    )
}