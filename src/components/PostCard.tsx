import React from 'react'

type PostType = {
  title: string
  excerpt: string
}

interface IPostCardProps {
  post: PostType
}

const PostCard = ({ post }: IPostCardProps) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
