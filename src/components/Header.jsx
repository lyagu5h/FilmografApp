import React from 'react'
import { Link } from '@chakra-ui/react'
const Header = () => {
  return (
    <header>
        <Link href='#'>Все фильмы</Link>
        <Link href='#'>Избранное</Link>
        <Link href='#'>Добавить фильм</Link>
    </header>
  )
}

export default Header
