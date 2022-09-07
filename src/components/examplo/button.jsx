import React, {useState} from "react";

const Button = () =>{
    const [count, setCount] = useState(0)

    return (
        <button
         type="button"
         onClick={()=> setCount((prevCount) => prevCount+1 )}>
            {count}
         </button>
    )
}

export default Button;