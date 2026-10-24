import React from 'react'

const Gallery = () => {
  return (
    <div>
        <div className='lg:flex'>
            {galleryData.map((gallery, index)=>(
 <img src={gallery.img} alt="" className='lg:w-1/4 w-full' />
            ))}
        </div>
    </div>
  )
}
const galleryData=[
    {id:1, img:"/slider-img1.png"},
    {id:2, img:"/slider-img2.png"},
    {id:3, img:"/slider-img3.png"},
    {id:4, img:"/slider-img4.png"},
]
export default Gallery