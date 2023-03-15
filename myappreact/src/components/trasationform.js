import React, { useState } from "react";
import './style.css';

export default function Tractionform({onnewtransation}){

    const[amountvalue,setamount]=useState("");
   
    const addTransation=(type,evnt)=>{
        
        evnt.preventDefault();
        if(amountvalue===''){
            return <h2>Enter the value</h2>
        }else{
            const data={ amount:parseInt(amountvalue),type:type};
        onnewtransation(data)
        }
    }
    return(
        <div>
            <h2>
                
            </h2>
            <form>
               
                <label>
                
                    <div>
                        <input className="input" type="text" value={amountvalue} onChange={(e)=>setamount(e.target.value)}/>
                    </div>
                </label><br></br>
                <div>
                    <button className="button" onClick={(e)=>addTransation('income',e)}>Income</button>
                    <button className="button1" onClick={(e)=>addTransation('expense',e)}>Expense</button>
                </div>
            </form>
        </div>
    )
}