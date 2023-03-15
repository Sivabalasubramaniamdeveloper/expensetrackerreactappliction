import React from "react";
import './style.css';
export default function Expense({income,expense}){
    return(
        <div>
            <h2 className="heading2">Balance is ${income-expense}</h2>
        </div>
    )
}