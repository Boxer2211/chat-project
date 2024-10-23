import { useDispatch, useSelector } from 'react-redux'
import { addComment, setInputText } from 'src/store/comments'

const InputField = () => {
  const dispatch = useDispatch()

  const { inputText } = useSelector(state => state.comments)

  const handleAddComment = () => {
    const newComment = {
      id: new Date().getTime(),
      body: inputText
    }
    dispatch(addComment(newComment))
    dispatch(setInputText(''))
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 pb-4 px-12 bg-primary flex items-center'>
      <input
        type={'text'}
        className='w-full p-2 rounded-l-md'
        value={inputText}
        onChange={e => dispatch(setInputText(e.target.value))}
      />
      <button className='bg-blue-500 text-white p-2 rounded-r-md ml-2' onClick={handleAddComment}>
        Send
      </button>
    </div>
  )
}

export default InputField
