import Child from "./Child"

export default function Parent(){ 
    let firstName : any = "Faisal "
    let lastName : any = "Abshar "
    let Salary : any =  20000 ;
    let classes : any = "Ghouse ";
    return (
        <>
            <Child firstName={firstName} lastName={lastName} Salary={Salary} classes={classes}/>
        </>
    )
}