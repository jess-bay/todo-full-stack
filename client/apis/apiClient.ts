import request from 'superagent'
import { Task } from '../../models/task'

const urlPath = '/api/v1/todos'

export async function getTodos(): Promise<Task[]> {
  const res = await request.get(urlPath)
  return res.body
}

export async function getTaskById(id: number): Promise<Task> {
  const res = await request.get(`${urlPath}/${id}`)
  return res.body
}

export async function addTask(task: Partial<Task>) {
  try {
    await request.post(urlPath).send(task)
  } catch (error) {
    console.error('failed on api add task', error)
  }
}

export async function deleteTask(id: number) {
  const res = await request.delete(`${urlPath}/${id}`)
  return res.body
}

export async function updateTask(
  id: number,
  newTask: Partial<Task>,
): Promise<Task> {
  const res = await request.put(`${urlPath}/${id}`).send({ newTask })
  return res.body
}
