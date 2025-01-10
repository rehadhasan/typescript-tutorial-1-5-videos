type GreetProps = {
    name:string
    messageCount?:number
    isLogin:boolean
}

const Greet = (props:GreetProps) => {
    const {messageCount = 0} = props
    return(
        <>
            {
                props.isLogin ? <h2>Welcome {props.name} ! You have {messageCount} unread messages</h2> : <h2>Welcome Guest !</h2>
            }
        </>
    )
}

export default Greet;