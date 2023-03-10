import React, { useState } from 'react';

import styles from './styles.module.scss'

 
function NavBarBtn({ title, onClick }) {
    // const [activeBarLink, setActiveBarlink] = useState(false)

    // const handleClick =() => {
    //     setActiveBarlink(!activeBarLink)
    // }

    // let toggleClassCheck = activeBarLink ? 'active' : null;

    return (
        <button
            className={styles.active}
            // className={activeBarLink ? `${styles.active}` : `${styles.barLink}`}
            onClick={onClick}
            // activeBarLink={activeBarLink}
            // handleClick={handleClick}
            // toggleClassCheck={toggleClassCheck}
        >{title}</button>

    )
}


export default NavBarBtn