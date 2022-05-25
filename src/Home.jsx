import { useEffect, useState } from "react"
import './Home.css'

function Home() {
  let [toDoList, setToDoList] = useState([])
  let [newItem, setNewItem] = useState('')

  useEffect (() => {
    setToDoList(['Item 1', 'Item 2'])
  }, [])

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="input-container">
    <input value={newItem} onChange={value => setNewItem(value.target.value)} type="text" />
    <button className="add-item-button" onClick={() => addNewItem()}>Add Item</button>
      </div>
    <ul>
      {toDoList.map((item, index) => ( 
      <li>
        {item}
        <button className="delete-item-button" onClick={() => deleteItem(index)}>
          Delete
        </button>
      </li>
      ))}
    </ul>
    </div>
  )

  function addNewItem() {
    setToDoList([...toDoList, newItem])
    setNewItem('')
  }

  function deleteItem(index) {
    let tempArray = [...toDoList]
    tempArray.splice(index, 1)

    setToDoList(tempArray)
  }

}

export default Home