import ListGroup from "./Components/ListGroup"
import Alert from "./Components/Alert"
import Button from "./Components/Button"
import { useState } from "react"

function App() {
	const [alertVisible, setAlertVisibility] = useState(false)

	return (
		<div>
			{alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
			)}
			<Button onClick={() => setAlertVisibility(true)}>Show alert</Button>
		</div>
	)
}

export default App
