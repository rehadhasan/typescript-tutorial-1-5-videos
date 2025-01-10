type StatusProps = {
    status: 'loading' | 'success' | 'error';
}

const Status = (props:StatusProps) => {
    let message;

    if(props.status === 'loading'){
        message = "Loading..."
    }else if(props.status === 'success'){
        message = 'Data fetching successfully !'
    }else if(props.status === 'error'){
        message = 'Error fetching data'
    }
    return(
        <>
            <h2>{message}</h2>
        </>
    )
}

export default Status;