import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    "data/fetchData", async () => {
        // const response = await axios.get('/src/data/data.json')
        // return response.data;
        return require('../data/data.json')
    }
);
