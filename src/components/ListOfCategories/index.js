import React, { useState, useEffect } from 'react'
import { Category } from './../Category/index'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.fetch('https://petgram-server-doblesesays.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {
                categories.map(category =>
                  <Item key={category.id}><Category {...category} /></Item>
                )
            }
    </List>
  )
}
