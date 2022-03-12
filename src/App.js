import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Photos from './components/Photos';
import Pagination from './components/Pagination'



function App() {
  const [photos,setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [photosPerPage] = useState(10)
  const [search, setSearch] = useState(Number)

  useEffect(()=>{
    const getPhotos = async () => {
      setLoading(true)
      const res = await axios.get("http://jsonplaceholder.typicode.com/photos")
      setPhotos(res.data)
      setLoading(false)
    }

    getPhotos()
  }, [])

  const lastPhotoIndex = currentPage * photosPerPage
  const firstPhotoIndex = lastPhotoIndex - photosPerPage
  const currentPhoto = photos.slice(firstPhotoIndex, lastPhotoIndex)

  const paginate = pageNumbers => setCurrentPage(pageNumbers)

  const handleDelete = async (id) => {
    await axios.delete(`http://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res=>{
      const del = photos.filter(photos => id !== photos.id)
      setPhotos(del)
    })
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value)
  } 
  
  return (
    <div className="container mt-10">
      <h1 className='text-primary'>Photos</h1>
      <Photos photos={currentPhoto} loading={loading} handleDelete={handleDelete} handleSearch={handleSearch} search={search}/>
      <Pagination photosPerPage={photosPerPage} totalPhotos={photos.length} paginate={paginate}/>
    </div>
  );
}

export default App;
