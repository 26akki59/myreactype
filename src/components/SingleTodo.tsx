import React from 'react'
import { Todo } from '../model'
import {AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone } from 'react-icons/md'

type Props={
    todo:Todo;
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos}: Props) => {
  return (
    <div className='todo_single'>
      <form >
        <span className='todos_single-text'>{todo.todo}</span>
        <div>
            <span className='icon'>
                <AiFillEdit></AiFillEdit>
            </span>
            <span className='icon'>
                <AiFillDelete></AiFillDelete>
            </span>
            <span className='icon'>
                <MdDone  ></MdDone>
            </span>
        </div>
      </form>
    </div>
  )
}

export default SingleTodo
