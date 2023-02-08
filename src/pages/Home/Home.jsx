import { HomeHeader } from "pages/Home/ui/HomeHeader"
// import { Menu } from "pages/Menu"
// import { MenuHeader } from "pages/Menu/ui/MenuHeader"
import { Info } from "./ui/Info"
import { MenuViews } from "./ui/MenuViews"
import { Stocks } from "./ui/Stocks"
import styles from './styles.module.scss'

function Home() {

    return <div className={styles.wrapper}>
        <div className={styles.content}>
        <HomeHeader />
        <Info/>
        <MenuViews/>
        <Stocks />
        </div>
       
        
    </div>
}

export default Home