import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers:
    builder => builder
      .addCase(fetchContacts.fulfilled,
        (state, { payload }) => {
          state.items = payload;
        })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(isAnyOf(fetchContacts.pending, addContacts.pending, deleteContacts.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(fetchContacts.rejected, addContacts.rejected, deleteContacts.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addMatcher(isAnyOf(fetchContacts.fulfilled, addContacts.fulfilled, deleteContacts.fulfilled), state => {
        state.isLoading = false;
        state.error = null;
      })
  // {
  //   [fetchContacts.pending]: handlePending,
  //   [addContacts.pending]: handlePending,
  //   [deleteContacts.pending]: handlePending,

  //   [fetchContacts.rejected]: handleRejected,
  //   [addContacts.rejected]: handleRejected,
  //   [deleteContacts.rejected]: handleRejected,

  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },

  //   [addContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.push(action.payload);
  //   },

  //   [deleteContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  // },
});

export const contactReducer = contactSlice.reducer;
