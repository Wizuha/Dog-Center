import React, { useState } from 'react'
import './GalleryPicture.css'
import PictureCard from '../Pictures/PictureCard';
import Pagination from '../Pagination/pagination';

function GalleryPicture({pictures}) {
  const[currentPage,setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8)

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =  pictures.slice(firstPostIndex , lastPostIndex)

  return (
    <div>
      <div className="gallery-content">
        {currentPosts.map((picture, index) => {
          return <PictureCard picture={picture} index={index} />;
        })}
      </div>
      <Pagination
        totalPosts={pictures.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default GalleryPicture
