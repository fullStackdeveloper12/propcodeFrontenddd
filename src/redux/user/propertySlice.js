import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { message } from "antd";

// Create Property Slice
const propertySlice = createSlice({
  name: "property",
  initialState: {
    loading: false,
    error: null,
    success: null,
    properties: [], // Array to hold multiple properties
    property: {}, // Single property for adding/updating
  },
  reducers: {
    // Add Property
    addRequest(state, action) {
      state.loading = true;
      state.error = null;
      state.property = {};
    },
    addSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.success = "Project created successfully";
      state.property = action.payload;
    },
    addFailed(state, action) {
      state.loading = false;
      state.property = {};
      state.error = action.payload || "Error creating project";
    },

    // Get Properties
    getRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getSuccess(state, action) {
      state.loading = false;
      state.properties = action.payload; // Set properties from payload
    },
    getFailed(state, action) {
      state.loading = false;
      state.error = action.payload || "Error fetching properties";
    },

    // Delete Property
    deleteRequest(state) {
      state.loading = true;
      state.error = null;
    },
    deleteSuccess(state, action) {
      state.loading = false;
      state.success = "Property deleted successfully";
      state.properties = state.properties.filter(
        (property) => property._id !== action.payload.id // Make sure you're using _id here
      );
    },
    deleteFailed(state, action) {
      state.loading = false;
      state.error = action.payload || "Error deleting property";
    },

    // Update Property
    updateRequest(state) {
      state.loading = true;
      state.error = null;
    },
    updateSuccess(state, action) {
      state.loading = false;
      state.success = "Property updated successfully";
      const index = state.properties.findIndex(
        (property) => property._id === action.payload._id // Change from `id` to `_id`
      );
      if (index !== -1) {
        state.properties[index] = action.payload; // Update the property in the array
      }
    },
    updateFailed(state, action) {
      state.loading = false;
      state.error = action.payload || "Error updating property";
    },
  },
});

// Export actions
export const {
  addRequest,
  addSuccess,
  addFailed,
  getRequest,
  getSuccess,
  getFailed,
  deleteRequest,
  deleteSuccess,
  deleteFailed,
  updateRequest,
  updateSuccess,
  updateFailed,
} = propertySlice.actions;

// Add Property
export const addProperty = (formData, navigate, form) => async (dispatch) => {
  try {
    dispatch(addRequest());

    const response = await axios.post(
      "https://propcodebackendadminpaneltesting.onrender.com/api/property/addproperty",
      formData
    );
    dispatch(addSuccess(response.data));
    message.success("Project created successfully");
    form.resetFields();
    navigate("/allproperty");
  } catch (error) {
    dispatch(addFailed(error.message)); // Corrected from `err.message` to `error.message`
    message.error("Error creating project");
  }
};

// Get Properties
export const getProperties = () => async (dispatch) => {
  try {
    dispatch(getRequest());
    const response = await axios.get(
      "https://propcodebackendadminpaneltesting.onrender.com/api/property/getproperties"
    );
    dispatch(getSuccess(response.data));
  } catch (error) {
    dispatch(getFailed(error.message));
    message.error("Error fetching properties");
  }
};

// Delete Property
export const deleteProperty = (id) => async (dispatch) => {
  try {
    dispatch(deleteRequest());
    await axios.delete(
      `https://propcodebackendadminpaneltesting.onrender.com/api/property/deleteproperty/${id}`
    );
    dispatch(deleteSuccess({ id }));
    message.success("Property deleted successfully"); // Corrected typo here
  } catch (error) {
    dispatch(deleteFailed(error.message));
    message.error("Error deleting property");
  }
};

// Update Property
export const updateProperty = (id, formData) => async (dispatch) => {
  try {
    dispatch(updateRequest());
    const response = await axios.patch(
      `https://propcodebackendadminpaneltesting.onrender.com/api/property/updateproperty/${id}`,
      formData
    );
    dispatch(updateSuccess(response.data));
    message.success("Property updated successfully");
  } catch (error) {
    dispatch(updateFailed(error.message));
    message.error("Error updating property");
  }
};

export default propertySlice.reducer;
