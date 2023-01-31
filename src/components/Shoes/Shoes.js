import React from 'react'
import  { add,mul } from '../utilities/Calculate'

function Shoes(){
    const a = 10;
    const b = 20;
    const total = add(a,b);
    const multiplication = mul(a,b);
    return(
        <div>  
            <p>Welcome to our shoe store</p>
            <p>Total Summation: {total}</p>
            <p>Total Multiplication: {multiplication}</p>

        </div>
    )
}

export default Shoes;