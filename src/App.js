import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { PhotoCardWithQuery } from './containers/photoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={1} />
            </>
      }
    </>
  )
}
