import ListGroup from "./Components/ListGroup"
import Alert from "./Components/Alert"
import Button from "./Components/Button"
import { useState } from "react"

function App() {
	const [alertVisible, setAlertVisibility] = useState(false)
	let items = ["Boise", "Meridian", "Eagle", "Middleton", "Nampa"]
	const handleSelectItem = (item: string) => {
		console.log(item)
	}
	return (
		<div>
			{alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
			)}
			<Button onClick={() => setAlertVisibility(true)}>Show alert</Button>
			<h1></h1>
			<ListGroup
				items={items}
				heading="Cities"
				onSelectItem={handleSelectItem}
			/>
		</div>
	)
}

export default App
