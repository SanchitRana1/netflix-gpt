import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch:false,
        movieResults:null,
        gptMovieNames:null
    },
    reducers:{
        toggleGPTSearch : (state)=>{
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {gptMovieNames, movieResults} = action.payload
            state.gptMovieNames = gptMovieNames;
            state.movieResults = movieResults;
        }
    }
})

export const {toggleGPTSearch, addGptMovieResult, addGptMovieNames} = gptSlice.actions;
export default gptSlice.reducer;