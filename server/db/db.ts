import { Task } from '../../models/task.ts'
import connection from './connection.ts'
const db = connection

// GET ALL TODOS
export async function getAllTodos(db = connection): Promise<Task[]> {
  return db('todos').select().orderBy('id')
}

// GET TODO BY ID
export async function getTodoById(id: number): Promise<Task> {
  return db('todos').where({ id: id }).select().first()
}

// ADD A TASK
export async function addTask(newTask: Task) {
  return await db('todos').insert(newTask).returning('*')
}

// DELETE A TASK
export async function deleteTask(id: number) {
  await db('todos').where({ id: id }).delete()
  const newList = await getAllTodos()
  return newList
}

// UPDATE A TASK
export async function updateTask(id: number, updatedTask: Partial<Task>) {
  return db('todos').where({ id }).update(updatedTask).returning('*')
}
