export interface Task {
  id: number
  task: string
  priority: string
  details: string
  completed: boolean
}

export interface TaskData {
  task: string
  priority: string
  details: string
}
