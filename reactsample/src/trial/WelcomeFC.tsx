import React from 'react';
interface Props {
    msg?:string
}
const defaultWelcomeProps:Props = {
    msg:"Good morning"
}

const WelcomeFC:React.FC<Props> = ({msg, children}):React.ReactElement | null => {
    return <h1> Hello {msg} <br /> {children} </h1>
}
WelcomeFC.defaultProps = defaultWelcomeProps;

export default WelcomeFC;
 