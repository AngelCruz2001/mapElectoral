import  { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { getCasillas } from "../firebase/config";
import { Casilla } from "../interfaces/MarkersInterfaces";


const casillasStartGet = createAsyncThunk(
    'casillas',
    async ( thunkAPI) => {
        // Fetch data from firetore
        // const data = getCasillas();
        // return data;

    }
  )


interface CasillasState {
    casillas: Casilla[] | null;
    casillasLoading: boolean;
    activeCasilla: Casilla | null;
}



export const casillasSlice = createSlice({
    name: 'casillas',
    initialState: {
        casillas: null,
        casillasLoading: false,
        activeCasilla: null
    } as CasillasState,

    reducers: {
        setCasillas: (state:CasillasState, action: PayloadAction<Casilla[]>) => {
            state.casillas = action.payload;
        }
    }, 
    

});

// Async actions

    
export const { setCasillas  } = casillasSlice.actions;


