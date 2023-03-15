import './style.css';

export default function Transationhistory({transation}){
    const date=new Date().toLocaleString()
    
     
    return(
        <div className="container3">
            <h2 className='heading2'>Transactions</h2>
        <ul>
            {
                transation.map((data,index)=>(<li key={index}>{date} -{data.amount}- {data.type}</li>))
            }
            
        </ul>
        </div>
    )
}