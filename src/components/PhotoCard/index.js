
import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from './../FavButton/index'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMG }) => {
  const [show, ref] = useNearScreen()
  

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {
                (toggleLike) => {
                  const handleFavButton = () => {
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    })
                  }
                  return <FavButton liked={liked} likes={likes} onClick={handleFavButton} />
                }
              }
            </ToggleLikeMutation>
          </>
      }
    </Article>
  )
}
