import { AmountCardType } from "@/app/types/AmountCardType";
import { Transaction } from "@/app/types/transaction";




function AmountCard({amount,type} : AmountCardType) {

   

    return (
        <div className="card bg-gray-300 p-10 w-64 m-2 h-48 flex items-center justify-center">
          <h1 className="text-2xl font-bold pr-2">{type}</h1>
          
          <h1 className= { amount >=0 ? "text-2xl text-green-500 font-bold" : "text-2xl text-red-500 font-bold "}>{amount >= 0 ? amount == 0  ?`${amount}` : `+${amount}`: amount    }</h1>
        </div>
    );
}


export default AmountCard;