import { statsCard } from "./types";
import inputsLogo from '../../assets/images/icons/inputs.svg'
import expenseLogo from '../../assets/images/icons/expense.svg'
import profitLogo from '../../assets/images/icons/net-profit.svg'
import { strings } from "../../Settings/localization/strings";

export const statsCardList = ():statsCard[] => [
  {
    icon: inputsLogo,
    stats:{
      name: strings.inputs,
      value: 40689,
      summary: 8.5,
      rateChange: strings.up
    } 
  },
  {
    icon: expenseLogo,
    stats:{
      name: strings.expense,
      value: 10293,
      summary: 1.3,
      rateChange: strings.up
    } 
  }
  ,
  {
    icon: profitLogo,
    stats:{
      name: strings.netprofit,
      value: 89000,
      summary: 4.3,
      rateChange: strings.down
    } 
  }
]