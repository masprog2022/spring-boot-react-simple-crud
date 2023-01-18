import React from 'react'

export default function Form() {
  return (
    <div>
         <form>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='brand' />

            <input type='button' value='Register' />
            <input type='button' value='Update' />
            <input type='button' value='Remove' />
            <input type='button' value='Cancel' />
         </form>
    </div>
  )
}
