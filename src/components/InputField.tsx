import React, { useRef } from 'react'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e : React.FormEvent) => void;

    
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form className='input' onSubmit={(e) => 
          {
            handleAdd(e);
           inputRef.current?.blur();
          }
         }
         >
         <input type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='add task' className='input_box' />
         <button className='go' type='submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField
