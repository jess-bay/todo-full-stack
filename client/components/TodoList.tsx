import * as api from '../apis/apiClient.ts'
import { useQuery } from '@tanstack/react-query'
import DeleteTask from './DeleteTask.tsx'

export function TodoList() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['todos'],
    queryFn: () => api.getTodos(),
  })

  if (isPending) {
    return <p>Wait</p>
  }

  if (isError) {
    return <p>Oops</p>
  }

  const todos = data

  return (
    <>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>
              <strong>Task: </strong>
              {todo.task}
            </li>
            <li>Priority: {todo.priority}</li>
            <li>Details: {todo.details}</li>
            <li>
              <DeleteTask id={todo.id} />
            </li>
          </ul>
        )
      })}
    </>
  )
}
