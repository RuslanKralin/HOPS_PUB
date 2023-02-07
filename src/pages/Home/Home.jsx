import { HomeHeader } from "pages/Home/ui/HomeHeader"
// import { Menu } from "pages/Menu"
// import { MenuHeader } from "pages/Menu/ui/MenuHeader"
import { Info } from "./ui/Info"
import { MenuViews } from "./ui/MenuViews"
import { Stocks } from "./ui/Stocks"


function Home() {

    return <div>
        <HomeHeader />
        <Info/>
        <MenuViews/>
        <Stocks />
        
    </div>
}

export default Home