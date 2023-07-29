import { MouseEvent } from "react"

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]

  // const getMessage = () => {
  //   return items.length === 0 ? <p> No items </p> : null
  // }

  // EVENT HANDLER
  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p> No items </p> : null} */}
      {items.length === 0 && <p> No items </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
