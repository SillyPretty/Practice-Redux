import { FC } from 'react'

import styles from './Header.module.scss'

const Header:FC = () => {
  return (
    <header className={styles.header}>
      <img src='/images/bg-header-desktop.svg' alt='' />
    </header>
  )
}

export default Header
