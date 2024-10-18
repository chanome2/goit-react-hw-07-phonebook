import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//Reference: https://mockapi.io
axios.defaults.baseURL = "https://65f2e435105614e6549f31b4.mockapi.io";

//GET @ /contacts
export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

//POST @ /contacts
export const addContact = createAsyncThunk("contacts/addContact",
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { name, number });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

//DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });



