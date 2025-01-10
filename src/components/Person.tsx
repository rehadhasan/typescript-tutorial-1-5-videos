type PersonProps = {
    names:{
        firstName:string
        lastName:string
    }
}

const Person = (props:PersonProps) => {
    return(
        <>
            <h2>{props.names.firstName} {props.names.lastName}</h2>
        </>
    )
}

export default Person;