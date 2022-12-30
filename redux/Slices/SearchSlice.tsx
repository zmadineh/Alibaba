import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Login , LoginProps } from "../../data/auth/Login-Promise";
import { LoginType, AuthStateType } from "../../model/AuthType";
import {searchFromValue} from "../../model/searchFormValue.type";
import {emptySearchFormData} from "../../data/form/emptySearchForm.data";


const initialState: searchFromValue[] = [{...emptySearchFormData, formType: 0}]



export const SearchSlice = createSlice({
    name:'searches',
    initialState,
    reducers: {
        addRecent: (state, action) => {
            const recentData = action.payload
            const repeatedDataIndex = state.findIndex(item => JSON.stringify(item) === JSON.stringify(recentData) )
            if (repeatedDataIndex !== -1){
                state.splice(repeatedDataIndex, 1)
            }
            state.unshift(recentData)
        },
        removeAll: (state) => {
            state.splice(0, state.length)
        }
    },
})

export const {addRecent, removeAll} = SearchSlice.actions

export default SearchSlice.reducer


