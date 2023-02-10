// import { Home } from "pages/Home"
import { BrowserRouter } from "react-router-dom"
import { Layout } from "./Layout"
import Router from "./Router"

function App() {
  
    return <BrowserRouter> <div>
        {/* <Home/> */}
        <Router/>
        <Layout/>
    </div>
    </BrowserRouter>
}

export default App
