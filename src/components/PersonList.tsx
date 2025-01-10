type PersonList = {
    names:{
        firstName: string,
        lastName: string
    }[]
}

const PersonList = (props:PersonList) => {
    return(
        <>
            {
                props.names.map((name=>{
                    return(
                        <h2>{name.firstName} {name.lastName}</h2>
                    )
                }))
            }
        </>
    )
}

export default PersonList;