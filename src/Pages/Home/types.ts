export interface statsCard{
  icon: any,
  stats: stats

}

export type stats = {
  name:string,
  value?:number,
  summary?: number,
  rateChange?: string
}

