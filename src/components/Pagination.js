import React from 'react'

const Pagination = ({ photosPerPage, totalPhotos, paginate }) => {
const pageNumbers = []

for(let i=1; i<= Math.ceil(totalPhotos / photosPerPage); i++){
    pageNumbers.push(i)
}

if (totalPhotos === 0){
    return null
}

  return (
    <div>
        <ul className='pagination  d-flex flex-wrap'>
            {
                pageNumbers.map((number)=>(
                    <li className='page-item'>
                        <a href="#" className='page-link' onClick={()=> paginate(number)}>
                            {number}
                        </a>   
                    </li>
                ))
            }    
        </ul>
    </div>
  )
}

export default Pagination