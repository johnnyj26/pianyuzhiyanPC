import React, {
    Component
} from 'react'
import styles from '../sass/Header'
import {
    IndexLink,
    Link
} from 'react-router'
import logo from './logo.png'

class Header extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header className={styles.header}>
                <nav>
                    <IndexLink className={styles.link} activeClassName={styles.active} to="/">
                        <img src={logo} alt="" width="50px" height="50px"/>
                    </IndexLink>
                    <IndexLink className={styles.link} activeClassName={styles.active} to="/">首页</IndexLink>
                    <Link className={styles.link} activeClassName={styles.active} to="/choiceness">精选</Link>
                    <Link className={styles.link} activeClassName={styles.active} to="/columnWorks">专栏</Link>
                </nav>
            </header>
        )
    }
}

export default Header