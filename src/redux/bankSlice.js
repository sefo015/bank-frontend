import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bank';

const getAuthHeaders = () => {
    const token = localStorage.getItem('sefobank_token');
    return { headers: { Authorization: `Bearer ${token}` } };
};

export const fetchDashboardData = createAsyncThunk('bank/fetchData', async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${API_URL}/balance`, getAuthHeaders());
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Xəta baş verdi");
    }
});

export const processTransfer = createAsyncThunk('bank/transfer', async (transferData, thunkAPI) => {
    try {
        const response = await axios.post(`${API_URL}/transfer`, transferData, getAuthHeaders());
        thunkAPI.dispatch(fetchDashboardData());
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Xəta baş verdi");
    }
});

// Köhnə importların çökməməsi üçün alias export:
export const makeTransfer = processTransfer;

export const processLoan = createAsyncThunk('bank/loan', async (loanData, thunkAPI) => {
    try {
        const response = await axios.post(`${API_URL}/loan`, loanData, getAuthHeaders());
        thunkAPI.dispatch(fetchDashboardData());
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Xəta baş verdi");
    }
});

const bankSlice = createSlice({
    name: 'bank',
    initialState: {
        user: localStorage.getItem('sefobank_user') || 'Client',
        balance: 0,
        transactions: [],
        status: 'idle',
        error: null
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem('sefobank_token');
            localStorage.removeItem('sefobank_user');
            state.user = null;
            state.balance = 0;
            state.transactions = [];
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('sefobank_user', action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardData.fulfilled, (state, action) => {
                state.balance = action.payload.balance;
                state.transactions = action.payload.transactions;
            })
            .addCase(fetchDashboardData.rejected, (state, action) => {
                state.error = action.payload;
            });
    }
});

export const { logout, setUser } = bankSlice.actions;
export default bankSlice.reducer;