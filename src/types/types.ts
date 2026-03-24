
export interface Register {
  name: string
  lastname: string
  email: string
  password: string
  cellphone: string
}

export interface Login {
  email: string
  password: string
}
export interface SessionData {
  token: string
  user: {
    id: number
    name: string
    lastname: string
    email: string
    cellphone: string
    active: boolean
    role: {
      id: number
      description: string
      created_at: string
      updated_at: string
    }
    created_at: string
    updated_at: string
  }}

  export interface GroupData{
   period_id:number,
   name:string
   description:string
}

export interface Group {
  id: number
  name: string
  description: string
  active: boolean
  owner: {
    id: number
    name: string
    lastname: string
    email: string
    cellphone: string
    active: boolean
    created_at: string | null
    updated_at: string | null
  }
  period: {
    id: number
    name: string
    year: number
    start_date: string
    end_date: string
    created_at: string | null
    updated_at: string | null
  }
  students_count: number
  assignments_count: number
  created_at: string | null
  updated_at: string | null
}
