export interface medicine{
  name: string,
  dose:string,
  time:string,
  note?:string
}

export interface medicalFile{
  name: string,
  file:any,
  note?:string,
  date?:Date
}