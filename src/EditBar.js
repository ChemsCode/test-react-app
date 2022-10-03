import React from 'react'

export default function EditBar({editElement, itemId}) {

    let newId = itemId + "editInput"

  return (
    <div>
        <form>
        <label for="editInput">Edit input: </label>
        <input
          type="text"
          id={newId}
          name="editInput"
        //   onChange={(e) => setText({...text, data: e.target.value})}
        />
      </form>
      <button onClick={() => {
        let newText = document.getElementById(newId).value
        editElement(itemId, {id: itemId, taskOrder: 1, data: newText});
      }}>
        Edit in Storage
      </button>
    </div>
  )
}
