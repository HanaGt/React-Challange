import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

// Create the API slice
export const actorsApi = createApi({
  reducerPath: 'actorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.py4e.com/api/' }),
  endpoints: (builder) => ({
    fetchActors: builder.query({
      query: () => 'people/',
    }),
  }),
});

export const { useFetchActorsQuery } = actorsApi;

// Create a slice for additional state management
const actorsSlice = createSlice({
  name: 'actors',
  initialState: {
    actors: [],
    status: 'idle',
  },
  reducers: {
    setActors: (state, action) => {
      state.actors = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setActors, setStatus } = actorsSlice.actions;

// Selectors
export const selectActors = (state) => state.actors.actors;
export const selectStatus = (state) => state.actors.status;

export default actorsSlice.reducer;