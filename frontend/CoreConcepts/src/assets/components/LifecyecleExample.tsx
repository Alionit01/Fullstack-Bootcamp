import { useEffect, useState } from "react";

function LifecycleExample(){
    const [count, setCount] = useState(0)

 
    useEffect(() => {
    console.log(' Component Mounted or Updated');
    
    return () => {
    console.log(' Cleanup before next update or unmount');
    };
    }, [count]); 

    return (
        <div>
            <h1>Lifecyle example</h1>
            <p>Click Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )

}
export default LifecycleExample;