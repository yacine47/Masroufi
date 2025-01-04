import { Transaction } from "@/app/types/transaction";

function TransactionCard(params: Transaction) {

    
   


    return (
        <div>
       
        <ul className="mt-4 space-y-2">
          <li className="border p-4 flex justify-between">
            <div className="text-left">
              <p>{params.name}</p>
              <small>{params.category} - {params.date}</small>
            </div>
            <div className={params.amount >= 0 ? "text-green-500" : "text-red-500"}>{params.amount >= 0 ? `+${params.amount}` : params.amount}</div>
          </li>
          {/* Repeat for other transactions */}
        </ul>
      </div>
    );
}

export default TransactionCard;