import { useState } from 'react'
import * as api from '../apis/apiClient.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TaskData } from '../../models/task.ts'

// eslint-disable-next-line no-unused-vars
function AddTodo() {
  const [newTask, setNewTask] = useState('')
  const [submittedTask] = useState('')
  const [priority, setPriority] = useState('')
  const [details, setDetails] = useState('')

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (newTask: TaskData) => api.addTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPriority(event.target.value)
  }

  const handleDetailsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDetails(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const task = {
      task: newTask,
      priority: priority,
      details: details,
    }
    mutation.mutate(task)
    setNewTask('')
    setPriority('')
    setDetails('')
  }

  return (
    <>
      <p>Submitted Tasks: {submittedTask}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input
          onChange={handleTaskChange}
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTask}
          required
          id="task"
        />
        <br />
        <label htmlFor="priority">Priority</label>
        <select id="priority" value={priority} onChange={handlePriorityChange}>
          <option value="selection">Select Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <br />
        <label htmlFor="details">Details</label>
        <input
          onChange={handleDetailsChange}
          type="text"
          id="details"
          value={details}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AddTodo
