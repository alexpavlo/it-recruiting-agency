import React from 'react'
import ModalImage from 'react-modal-image'

const Photos = ({photos, loading, handleDelete, handleSearch, search}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <ul className='list-group mb-2'>
        <input type='number' placeholder="search Photo ID" onChange={handleSearch}/>
        {
            photos.filter((photo)=>{
                if (search == '') {
                    return photo
                } else if(search == photo.albumId){
                    return photo
                }
            }).map((photo) => (
                <li key={photo.id} className='list-group-item'>
                    <h2>ID: {photo.id}</h2>
                    <ModalImage
                        small={photo.thumbnailUrl}
                        large={photo.url}
                        alt="Photo"/>
                    <button className='btn btn-danger' onClick={()=>handleDelete(photo.id)}>Delete photo</button>
                </li>
                
  ))
        }
    </ul>
  )
}

export default Photos