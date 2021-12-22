import React from 'react'
import { useParams, useLocation} from 'react-router-dom'

const Post = () => {
  
  const slug = useParams();
  const location = new URLSearchParams( useLocation().search)

  console.log('line9', location);

  return (
    <div >
      <h2>
        Id is = {slug.id}
      </h2>
      <h2 >
        Search is = {location.get("name")}                                                                                                                                      
      </h2>
    </div>
  )
}

export default Post
