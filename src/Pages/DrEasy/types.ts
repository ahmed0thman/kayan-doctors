export interface drEasyPatient{
  code: string,
  name: string,
  gender: string,
  phone: number,
  dateOfVisit:Date,
  timeOfVisit: string,
  examinatonType: string

}

export const pateints:drEasyPatient[] =[
  {
    code: "P001",
    name: "John Doe",
    gender: "Male",
    phone: 1234567890,
    dateOfVisit: new Date("2022-01-01"),
    timeOfVisit: "10:00 AM",
    examinatonType: "General Checkup"
  },
  {
    code: "P002",
    name: "Jane Doe",
    gender: "Female",
    phone: 1234567891,
    dateOfVisit: new Date("2022-01-02"),
    timeOfVisit: "11:00 AM",
    examinatonType: "Follow-up"
  },
  {
    code: "P003",
    name: "Alice",
    gender: "Female",
    phone: 1234567892,
    dateOfVisit: new Date("2022-01-03"),
    timeOfVisit: "12:00 PM",
    examinatonType: "Vaccination"
  },
  {
    code: "P004",
    name: "Bob",
    gender: "Male",
    phone: 1234567893,
    dateOfVisit: new Date("2022-01-04"),
    timeOfVisit: "1:00 PM",
    examinatonType: "Surgery"
  },
  {
    code: "P005",
    name: "Charlie",
    gender: "Male",
    phone: 1234567894,
    dateOfVisit: new Date("2022-01-05"),
    timeOfVisit: "2:00 PM",
    examinatonType: "Consultation"
  },
  {
    code: "P006",
    name: "David",
    gender: "Male",
    phone: 1234567895,
    dateOfVisit: new Date("2022-01-06"),
    timeOfVisit: "3:00 PM",
    examinatonType: "Lab Test"
  },
  {
    code: "P007",
    name: "Eve",
    gender: "Female",
    phone: 1234567896,
    dateOfVisit: new Date("2022-01-07"),
    timeOfVisit: "4:00 PM",
    examinatonType: "Imaging"
  },
  {
    code: "P008",
    name: "Frank",
    gender: "Male",
    phone: 1234567897,
    dateOfVisit: new Date("2022-01-08"),
    timeOfVisit: "5:00 PM",
    examinatonType: "Therapy"
  },
  {
    code: "P009",
    name: "Grace",
    gender: "Female",
    phone: 1234567898,
    dateOfVisit: new Date("2022-01-09"),
    timeOfVisit: "6:00 PM",
    examinatonType: "General Checkup"
  },
  {
    code: "P010",
    name: "Heidi",
    gender: "Female",
    phone: 1234567899,
    dateOfVisit: new Date("2022-01-10"),
    timeOfVisit: "7:00 PM",
    examinatonType: "Follow-up"
  },
  {
    code: "P011",
    name: "Ivan",
    gender: "Male",
    phone: 1234567800,
    dateOfVisit: new Date("2022-01-11"),
    timeOfVisit: "8:00 PM",
    examinatonType: "Vaccination"
  },
  {
    code: "P012",
    name: "Jack",
    gender: "Male",
    phone: 1234567801,
    dateOfVisit: new Date("2022-01-12"),
    timeOfVisit: "9:00 PM",
    examinatonType: "Surgery"
  },
  {
    code: "P013",
    name: "Kathy",
    gender: "Female",
    phone: 1234567802,
    dateOfVisit: new Date("2022-01-13"),
    timeOfVisit: "10:00 PM",
    examinatonType: "Consultation"
  },
  {
    code: "P014",
    name: "Liam",
    gender: "Male",
    phone: 1234567803,
    dateOfVisit: new Date("2022-01-14"),
    timeOfVisit: "11:00 PM",
    examinatonType: "Lab Test"
  },
  {
    code: "P015",
    name: "Mia",
    gender: "Female",
    phone: 1234567804,
    dateOfVisit: new Date("2022-01-15"),
    timeOfVisit: "12:00 AM",
    examinatonType: "Imaging"
  },
]