import {ReactNode } from "react";

export interface statsCard{
  icon: any,
  stats: stats

}

export type stats = {
  name:string,
  value?:number,
  summary?: number,
  rateChange?: "up" | "down"
}

