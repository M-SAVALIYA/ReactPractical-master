import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {
    data: [],
    isLoading: false,
    isError: null,
  },
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  try {
    const res = await axios.get(process.env.REACT_APP_BASE_URL);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("No response received");
    } else {
      throw new Error("Request Setup Error");
    }
  }
});
export const PostData = createAsyncThunk("postData", async ({ payload }) => {
  console.log("🚀 ~ PostData ~ payload:", payload);
  try {
    const res = await axios.post(process.env.REACT_APP_BASE_URL, payload);
    console.log("🚀 ~ PostData ~ res:", res.data);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("No response received");
    } else {
      throw new Error("Request Setup Error");
    }
  }
});
export const DeleteData = createAsyncThunk("deletedata", async ({ id }) => {
  try {
    const res = await axios.delete(process.env.REACT_APP_BASE_URL + id);
    console.log("🚀 ~ DeleteData ~ res:", res)
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("No response received");
    } else {
      throw new Error("Request Setup Error");
    }
  }
});
export const UpdateData = createAsyncThunk("updatedata", async ({payload , id}) => {
  try {
    const res = await axios.put(process.env.REACT_APP_BASE_URL + id ,payload);
    return res.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data);
    } else if (error.request) {
      throw new Error("No response received");
    } else {
      throw new Error("Request Setup Error");
    }
  }
});

export const reduxSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.product.isLoading = true;
        state.product.isError = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.product.isLoading = false;
        state.product.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.product.isLoading = false;
        state.product.isError = action.error.message;
      })
      .addCase(PostData.pending, (state) => {
        state.product.isLoading = true;
        state.product.isError = null;
      })
      .addCase(PostData.fulfilled, (state, action) => {
        console.log("🚀 ~ .addCase ~ action:", action);
        state.product.isLoading = false;
        state.product.data = state.product.data.concat(action.payload);
      })
      .addCase(PostData.rejected, (state, action) => {
        state.product.isLoading = false;
        state.product.isError = action.error.message;
      })
      .addCase(DeleteData.pending, (state) => {
        state.product.isLoading = true;
        state.product.isError = null;
      })
      .addCase(DeleteData.fulfilled, (state, action) => {
        console.log("🚀 ~ .addCase ~ action:", action);
        state.product.isLoading = false;
        state.product.data = state.product.data.filter(
          (val) => val.id !== action.payload.id
        );
      })
      .addCase(DeleteData.rejected, (state, action) => {
        state.product.isLoading = false;
        state.product.isError = action.error.message;
      })
      .addCase(UpdateData.pending, (state) => {
        state.product.isLoading = true;
        state.product.isError = null;
      })
      .addCase(UpdateData.fulfilled, (state, action) => {
        state.product.isLoading = false;
        const index = state.product.data.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.product.data[index] = action.payload;
        }
      })
      .addCase(UpdateData.rejected, (state, action) => {
        state.product.isLoading = false;
        state.product.isError = action.error.message;
      })
  },
});

export default reduxSlice.reducer;
