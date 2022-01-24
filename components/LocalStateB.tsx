import { VFC } from 'react'
import { todoVar } from '../cache'
import { useReactiveVar } from '@apollo/client'
import Link from 'next/link'

export const LocalStateB = () => {
  const todos = useReactiveVar(todoVar)
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <p key={index} className="mb-3">
            {todo.title}
          </p>
        )
      })}
      <Link href="/local-state-a">
        <a>Back</a>
      </Link>
    </>
  )
}
