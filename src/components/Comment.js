import { useDispatch } from 'react-redux'
import { deleteComment } from 'src/store/comments'

const Comment = ({ comment }) => {
  const dispatch = useDispatch()

  return (
    <div className='m-4 p-2 bg-gray-500 bg-opacity-10 rounded-lg w-fit flex gap-2'>
      <p className='text-gray-500'>{comment.body}</p>
      <button onClick={() => dispatch(deleteComment(comment.id))}>X</button>
    </div>
  )
}

export default Comment
