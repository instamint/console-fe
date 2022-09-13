import {useEffect, useState} from 'react'
import Avatar from '../images/avatar-user.jpeg'

export const useCheckImage = (url) => {
  const [img, setImg] = useState('')

  const checkUrl = async (url) => {
    try {
      const img = new Image(url)
      img.src = url
      img.onload = () => {
        setImg(url)
      }
      img.onerror = () => {
        setImg(Avatar)
      }
    } catch (error) {
      console.error({error})
      setImg(Avatar)
    }
  }

  useEffect(() => {
    checkUrl(url)
  }, [url])

  return img
}