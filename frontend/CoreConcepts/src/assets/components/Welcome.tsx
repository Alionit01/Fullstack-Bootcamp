
type WelcomeProp = {
    name: string;
}

function Welcome(props: WelcomeProp){
    return <h1>Welcome, {props.name}</h1>
}
export default Welcome;