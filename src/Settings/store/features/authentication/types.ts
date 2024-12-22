export interface user{
  userName: string,
  ProfileName: string,
  isLoggedIn: boolean,
  role: userRole

}

export enum userRole{
  DOCTOR = 'doctor',
  ASSISTANT = 'assistant'
}