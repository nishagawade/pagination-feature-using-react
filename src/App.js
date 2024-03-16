import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Posts from './components/Posts';
import Pagination from './components/Pagination';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postPerPage] = useState(10);
  const [currPage, setCurrPage] = useState(1)

  useEffect(()=>{
    const fetchPosts = async() =>{
      setLoading(true)
       const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
       console.log(res.data);
       setPosts(res.data);
       setLoading(false)
    }
    fetchPosts()
  } , [])

  const indexOfLastItem = currPage*postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currPosts = posts.slice( indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrPage(pageNumber) 

  return (
    <div className='container mt-5'>
    <h1 className='text-primary mb-3'>My Blog</h1>
    <Posts posts={currPosts} loading={loading} />
    <Pagination totalPosts = {posts.length} postPerPage = {postPerPage} paginate = {paginate}/>
  </div>
  )
}
