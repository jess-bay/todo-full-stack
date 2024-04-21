import express from 'express'
import * as db from '../db/db.ts'
const router = express.Router()

// GET route - GET all todos
// /api/v1/todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.getAllTodos()
    res.json(todos)
  } catch (error) {
    console.error('Error on router.get all', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

// GET task/todo by id
// /api/v1/todos/:id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const todoId = await db.getTodoById(id)
    res.json(todoId)
  } catch (error) {
    console.error('Error on router.get id', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

// PATCH task
// /api/v1/todos/:id
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { task, priority, details, completed } = req.body
    const updatedTask = {
      task,
      priority,
      details,
      completed,
    }
    const update = await db.updateTask(id, updatedTask)
    res.json(update)
  } catch (error) {
    console.error('Error on router.patch id', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

//POST task
// /api/v1/todos
router.post('/', async (req, res) => {
  try {
    const newTask = req.body
    await db.addTask(newTask)
    res.sendStatus(200)
  } catch (error: any) {
    console.error('Error on router.post newTask', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

//DELETE task
// /api/v1/todos/:id
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteTask(id)
    res.sendStatus(200)
  } catch (error) {
    console.error('Error on router.patch id', error)
    res.sendStatus(500).send('Something went wrong')
  }
})

export default router
