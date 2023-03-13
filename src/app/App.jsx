
import { BrowserRouter } from "react-router-dom"

import Router from "./Router"
import { Layout } from "./Layout"

import { useState } from "react"

function App() {
	const [store, setStore] = useState({
		user: {
			balance: '',
			email: '',
			username: '',
			day: '',
			month: '',
			year: '',
			password: ''
		},
		isUserLoggedIn: false
	})

	return <BrowserRouter> <div>
		<Router />
		<Layout />
	</div>
	</BrowserRouter>
}

export default App
