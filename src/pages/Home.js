import React from 'react'
import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from './../containers/ListOfPhotoCards'

const HomePage = ({ categoryId }) => {
  return (
    <>
      <Helmet>
          <title>Your pets photo app | Petgram🐶</title>
          <meta name='description' content='You can find photos on pretty animals' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
