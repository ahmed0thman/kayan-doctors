export interface physicalData{
    date: Date,
    height: number,
    weight: number,
    bloodPressure: number,
    heartbeats: number,
    sugarRandom: number,
    sugarBreakfast: number,
    sugarFasting: number,
    bloodType: string,
    oxygen: number
}

export interface physicalDataWomen extends physicalData{
    pregnancies: number,
    naturalBirths:number,
    cesareans: number,
    miscarriages: number
}

export interface physicalDataChildren extends physicalData{
    vision: number,
    hearing:number,
}

export const physicalInfoGeneral:physicalData[] = [
  {
    date: new Date('2023-01-15'),
    height: 175,
    weight: 70,
    bloodPressure: 120,
    heartbeats: 72,
    sugarRandom: 140,
    sugarBreakfast: 130,
    sugarFasting: 95,
    bloodType: "A+",
    oxygen: 98
  },
  {
    date: new Date('2023-03-22'), 
    height: 168,
    weight: 65,
    bloodPressure: 118,
    heartbeats: 75,
    sugarRandom: 135,
    sugarBreakfast: 125,
    sugarFasting: 90,
    bloodType: "O-",
    oxygen: 97
  },
  {
    date: new Date('2023-05-10'),
    height: 182,
    weight: 80,
    bloodPressure: 125,
    heartbeats: 68,
    sugarRandom: 145,
    sugarBreakfast: 135,
    sugarFasting: 98,
    bloodType: "B+",
    oxygen: 99
  },
  {
    date: new Date('2023-07-05'),
    height: 170,
    weight: 68,
    bloodPressure: 115,
    heartbeats: 70,
    sugarRandom: 138,
    sugarBreakfast: 128,
    sugarFasting: 92,
    bloodType: "AB+",
    oxygen: 98
  },
  {
    date: new Date('2023-09-18'),
    height: 178,
    weight: 75,
    bloodPressure: 122,
    heartbeats: 71,
    sugarRandom: 142,
    sugarBreakfast: 132,
    sugarFasting: 94,
    bloodType: "A-",
    oxygen: 97
  }
]

export const physicalInfoWomen:physicalDataWomen[] = [
  {
    date: new Date('2023-02-15'),
    height: 165,
    weight: 62,
    bloodPressure: 110,
    heartbeats: 75,
    sugarRandom: 130,
    sugarBreakfast: 120,
    sugarFasting: 88,
    bloodType: "O+",
    oxygen: 98,
    pregnancies: 2,
    naturalBirths: 1,
    cesareans: 1,
    miscarriages: 0
  },
  {
    date: new Date('2023-04-20'),
    height: 170,
    weight: 65,
    bloodPressure: 115,
    heartbeats: 72,
    sugarRandom: 135,
    sugarBreakfast: 125,
    sugarFasting: 90,
    bloodType: "A+",
    oxygen: 97,
    pregnancies: 3,
    naturalBirths: 2,
    cesareans: 0,
    miscarriages: 1
  }
]

export const physicalInfoChildren:physicalDataChildren[] = [
  {
    date: new Date('2023-03-10'),
    height: 120,
    weight: 25,
    bloodPressure: 90,
    heartbeats: 85,
    sugarRandom: 110,
    sugarBreakfast: 105,
    sugarFasting: 80,
    bloodType: "B+",
    oxygen: 99,
    vision: 20,
    hearing: 100
  },
  {
    date: new Date('2023-06-15'),
    height: 135,
    weight: 32,
    bloodPressure: 95,
    heartbeats: 82,
    sugarRandom: 115,
    sugarBreakfast: 108,
    sugarFasting: 82,
    bloodType: "A-",
    oxygen: 98,
    vision: 18,
    hearing: 95
  }
]