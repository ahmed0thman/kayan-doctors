import { patientFollowing } from "../../FollowingUp/types"

export interface input{
  id:number
  title:string,
  total:number,
  date: Date
}


export interface patientExpense{
  code: string;
  name: string;
  gender: string;
  age: number;
  examinationType: string;
  total: number;
}

export const patients : patientExpense[] = [
  {
    code: "P101",
    name: "John Doe",
    gender: "Male",
    age: 30,
    examinationType: "New",
    total: 1000,
  },
  {
    code: "P102",
    name: "Jane Doe",
    gender: "Female",
    age: 25,
    examinationType: "Resumption",
    total: 800,
  },
  {
    code: "P103",
    name: "Alex Smith",
    gender: "Male",
    age: 40,
    examinationType: "New",
    total: 1200,
  },
  {
    code: "P104",
    name: "Emily Johnson",
    gender: "Female",
    age: 28,
    examinationType: "Resumption",
    total: 900,
  },
  {
    code: "P105",
    name: "Michael Brown",
    gender: "Male",
    age: 35,
    examinationType: "New",
    total: 1100,
  },
  {
    code: "P106",
    name: "Sarah Lee",
    gender: "Female",
    age: 32,
    examinationType: "Resumption",
    total: 1000,
  },
  {
    code: "P107",
    name: "William Taylor",
    gender: "Male",
    age: 38,
    examinationType: "New",
    total: 1300,
  },
  {
    code: "P108",
    name: "Olivia White",
    gender: "Female",
    age: 29,
    examinationType: "Resumption",
    total: 1050,
  },
  {
    code: "P109",
    name: "Benjamin Harris",
    gender: "Male",
    age: 42,
    examinationType: "New",
    total: 1250,
  },
  {
    code: "P110",
    name: "Ava Davis",
    gender: "Female",
    age: 31,
    examinationType: "Resumption",
    total: 1150,
  },
  {
    code: "P111",
    name: "Ethan Martin",
    gender: "Male",
    age: 39,
    examinationType: "New",
    total: 1350,
  },
  {
    code: "P112",
    name: "Isabella Garcia",
    gender: "Female",
    age: 27,
    examinationType: "Resumption",
    total: 950,
  },
  {
    code: "P113",
    name: "Lucas Rodriguez",
    gender: "Male",
    age: 41,
    examinationType: "New",
    total: 1400,
  },
  {
    code: "P114",
    name: "Sophia Miller",
    gender: "Female",
    age: 26,
    examinationType: "Resumption",
    total: 1000,
  },
  {
    code: "P115",
    name: "Mason Thompson",
    gender: "Male",
    age: 44,
    examinationType: "New",
    total: 1450,
  },
  {
    code: "P116",
    name: "Mia Walker",
    gender: "Female",
    age: 24,
    examinationType: "Resumption",
    total: 850,
  },
  {
    code: "P117",
    name: "Alexander Hall",
    gender: "Male",
    age: 45,
    examinationType: "New",
    total: 1500,
  },
  {
    code: "P118",
    name: "Julia Knight",
    gender: "Female",
    age: 23,
    examinationType: "Resumption",
    total: 800,
  },
  {
    code: "P119",
    name: "Gabriel Perry",
    gender: "Male",
    age: 46,
    examinationType: "New",
    total: 1550,
  },
  {
    code: "P120",
    name: "Evelyn Brooks",
    gender: "Female",
    age: 22,
    examinationType: "Resumption",
    total: 750,
  },
]