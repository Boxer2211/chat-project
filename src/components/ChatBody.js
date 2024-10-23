import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Comment from 'src/components/Comment'
import { fetchComments, selectComments } from 'src/store/comments'

const ChatBody = () => {
  const dispatch = useDispatch()
  const { comments, status } = useSelector(selectComments)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchComments())
    }
  }, [status, dispatch])

  return (
    <div className='py-4 px-8'>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </div>
  )
}

export default ChatBody
