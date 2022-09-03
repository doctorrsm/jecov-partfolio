import {createSlice} from '@reduxjs/toolkit';
import {fetchData} from './data.api';

type dataType = {
    pages: [
        {
            id: number,
            pageName: string,
            title: string,
            button: string
            specialisation: [],
        }
    ]
}

const initialState = {
    data: {} as dataType,
    dataStatus: 'Idle',
    myDaya: 'Привет',
    currentPage: 'main'
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        changeCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    },
    extraReducers: ((builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.dataStatus = 'Loaded';
        })
    })

})

export const {changeCurrentPage} = dataSlice.actions;

export default dataSlice.reducer;
