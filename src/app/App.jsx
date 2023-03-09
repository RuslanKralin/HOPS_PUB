// import { Home } from "pages/Home"
import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { Layout } from "./Layout"
import Router from "./Router"

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
        {/* <Home/> */}
        <Router/>
        <Layout/>
    </div>
    </BrowserRouter>
}

export default App
