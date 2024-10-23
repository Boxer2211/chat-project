import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
  const response = await axios.get('https://dummyjson.com/comments')
  return response.data.comments
})

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle',
    error: null,
    inputText: ''
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload)
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload)
    },
    setInputText: (state, action) => {
      state.inputText = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchComments.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.comments = action.payload
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectComments = state => state.comments

export const { addComment, deleteComment, setInputText } = commentsSlice.actions
export default commentsSlice.reducer
