import { statsCard } from "./types";
import inputsLogo from '../../assets/images/icons/inputs.svg'
import expenseLogo from '../../assets/images/icons/expense.svg'
import profitLogo from '../../assets/images/icons/net-profit.svg'

export const statsCardList:statsCard[] = [
  {
    icon: inputsLogo,
    stats:{
      name: "inputs",
      value: 40689,
      summary: 8.5,
      rateChange: "up"
    } 
  },
  {
    icon: expenseLogo,
    stats:{
      name: "expense",
      value: 10293,
      summary: 1.3,
      rateChange: "up"
    } 
  }
  ,
  {
    icon: profitLogo,
    stats:{
      name: "net profit",
      value: 89000,
      summary: 4.3,
      rateChange: "down"
    } 
  }
]