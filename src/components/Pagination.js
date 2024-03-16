import React from 'react'

const Pagination = ({totalPosts, postPerPage , paginate }) => {

  const pageNumber = [];

  for(let i=0; i< (totalPosts/ postPerPage) ; i++){
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
     {
        pageNumber.map((number)=>(
          <li className='page-item'>
            <a onClick={()=>paginate(number)} className='page-link' href='#'>{number}</a>
          </li>
        ))
      }
    
    </ul>
    </nav>
    
      
  )
}

export default Pagination