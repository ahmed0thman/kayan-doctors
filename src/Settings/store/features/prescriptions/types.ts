export interface prescription{
  name:string,
  phoneNumber:string,
  specialization:specialization,
  address?: string,
  description?: string,
  logo?:any,
  seal?:any
}

export enum specialization{
  GENERAL= 'general',
  PEDIATRICIAN= 'pediatrician',
  GYNECOLOGIST= 'gynecologist',
  DENTIST='dentist'
}