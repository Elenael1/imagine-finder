import React from 'react'
import s from './imageGalleryItem.module.css'

const ImagegalleryItem = ({webformatURL, largeImageURL, getLargeImage}) => {
    return(
        <li className={s.imageGalleryItem} onClick={() => getLargeImage(largeImageURL)}>
             <img src={webformatURL} alt="" className={s.itemImage}/>
        </li>
    );

}

export default ImagegalleryItem