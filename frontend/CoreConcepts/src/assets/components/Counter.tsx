import { useState } from "react";

function Counter(){
    const [count, setCount] =useState(0);
    return (
        <div>
            <p>You planted trees {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Plant tree
            </button>
        </div>
    )

}
export default Counter;