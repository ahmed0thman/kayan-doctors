export interface message{
  senderName:string,
  title:string,
  read:boolean,
  date: Date

}

export const receivedMessages:message[] =[
  {
    senderName: "John Doe",
    title: "New Appointment",
    read: false,
    date: new Date("2022-01-01")
  },
  {
    senderName: "Jane Doe",
    title: "Medication Reminder",
    read: true,
    date: new Date("2022-02-01")
  },
  {
    senderName: "Alice",
    title: "Lab Results",
    read: false,
    date: new Date("2022-03-01")
  },
  {
    senderName: "Bob",
    title: "Follow-up Appointment",
    read: true,
    date: new Date("2022-04-01")
  },
  {
    senderName: "Charlie",
    title: "New Prescription",
    read: false,
    date: new Date("2022-05-01")
  },
  {
    senderName: "David",
    title: "Medical Test Results",
    read: true,
    date: new Date("2022-06-01")
  },
  {
    senderName: "Eve",
    title: "Appointment Cancellation",
    read: false,
    date: new Date("2022-07-01")
  },
  {
    senderName: "Frank",
    title: "Health Tips",
    read: true,
    date: new Date("2022-08-01")
  }
] 

export const sentMessages:message[] =[
  {
    senderName: "John Doe",
    title: "New Appointment",
    read: true,
    date: new Date("2022-01-01")
  },
  {
    senderName: "Jane Doe",
    title: "Medication Reminder",
    read: true,
    date: new Date("2022-02-01")
  },
  {
    senderName: "Alice",
    title: "Lab Results",
    read: true,
    date: new Date("2022-03-01")
  },
  {
    senderName: "Bob",
    title: "Follow-up Appointment",
    read: true,
    date: new Date("2022-04-01")
  },
  {
    senderName: "Charlie",
    title: "New Prescription",
    read: true,
    date: new Date("2022-05-01")
  },
  {
    senderName: "David",
    title: "Medical Test Results",
    read: true,
    date: new Date("2022-06-01")
  },
  {
    senderName: "Eve",
    title: "Appointment Cancellation",
    read: true,
    date: new Date("2022-07-01")
  },
  {
    senderName: "Frank",
    title: "Health Tips",
    read: true,
    date: new Date("2022-08-01")
  }
] 