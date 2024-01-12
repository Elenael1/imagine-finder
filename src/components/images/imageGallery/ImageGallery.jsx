import React from 'react'
import ImagegalleryItem from '../imageGalleryItem/ImagegalleryItem'
import s from './imageGallery.module.css'

const ImageGallery = ({data, getLargeImage}) => {
  return (
    <ul className={s.imageGallery}>
        {data.map(({id, webformatURL, largeImageURL}) => {

            return (
            <ImagegalleryItem  key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} getLargeImage={getLargeImage}/>
            )
        })}
    </ul>
  )
}

export default ImageGallery