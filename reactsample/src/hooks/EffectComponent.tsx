import React from 'react';

export default function EffectComponent() {
    let [count, setCount] = React.useState<number>(0);
    let [user, setUser] = React.useState<string>("");
    
    // componentDidUpdate
    React.useEffect(() => {
        console.log("update 1 effect");
    });

    // componentDidMount
    React.useEffect(() => {
        console.log("mount effect");
    },[]);

    // componentDidUpdate for count
    React.useEffect(() => {
        console.log("update 2 effect");
    },[count]);

    return <>
        Count : {count} <br />
        User : {user} <br />
        <button onClick={() => setCount(count + 1)}>Click</button>
    </>
} 