import React from "react";

export default function Parent({children} : {children:React.ReactNode}) : React.ReactElement | null {
    return <div> Parent {children} </div>
}

// <Parent> <Welcome msg="..." /> </Parent>

// <Parent> <h1> sdfsdf </h1> </Parent>