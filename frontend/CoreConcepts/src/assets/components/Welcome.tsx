
type WelcomeProp = {
    name: string;
    age: number
}

function Welcome(props: WelcomeProp){
    return <h1>Welcome, {props.name} You are {props.age} years old</h1>
}
export default Welcome;