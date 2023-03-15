import React, { useEffect, useState } from "react";
import Expense from "./expense";
import Transationhistory from "./history";
import Tractionform from "./trasationform";
import './style.css';

const transationData=[]
export default function Expensetracker(){
    const[income,setIncome]=useState(0);
    const[expense,setexpense]=useState(0);
    const[transaction,setTransaction]=useState(transationData);

    const calculation=()=>{
        let income=0,expense=0;
        transaction.forEach((data)=>{
            if(data.type ==='income'){
                income+=data.amount;
            }else if(data.type ==='expense'){
                expense+=data.amount;
            }
        })
        setIncome(income);
        setexpense(expense);
    }
    const handlenewtransation=item=>{
        let newTransations=[...transaction,item];
        setTransaction(newTransations);
    }
    useEffect(()=>{
        calculation();

    },[])
    useEffect(()=>{
        calculation();

    },[transaction])
    return(
        <div>
            <h1 className="heading">Expense Tracker-Basic</h1>
            <div className="container2">
            <Expense income={income} expense={expense}/>
            <Tractionform onnewtransation={handlenewtransation}/>
            </div><br/>
            <Transationhistory transation={transaction}/>
           <h2 className="thankyou"> Thanking You!!! </h2>
           <h3 className="thankyou1"> ~ Done by </h3>
           <h4 className="thankyou2"> Siva bala subramaniam P </h4>
        </div>
    )
}