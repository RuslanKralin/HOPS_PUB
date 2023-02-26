import styles from './styles.module.scss'
import React, { useState } from 'react';


function NavBarBtn({ title, onClick }) {
    const [activBarLink, setActiveBarlink] = useState(false)

    const handleClick =() => {
        setActiveBarlink(activBarLink => !activBarLink)
    }

    let toggleClassCheck = activBarLink ? 'active' : null;

    return (
        <button
            className={activBarLink ? `${styles.active}` : `${styles.barLink}`}
            onClick={onClick}
            activBarLink={activBarLink}
            handleClick={handleClick}
            toggleClassCheck={toggleClassCheck}
        >{title}</button>

    )
}


export default NavBarBtn