import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </>
)
