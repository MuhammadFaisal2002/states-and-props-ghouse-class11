import Parent from "./Parent";

export default function Child(props : any){ 
    return(
        <>
        <p>my name is {props.firstName}
        {props.lastName} </p>
        <p> and salary is {props.Salary}</p>
        <p>and timing is {props.classes}</p>
        </>
    )
}