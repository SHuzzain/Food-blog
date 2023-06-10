import { createSlice } from "@reduxjs/toolkit";

export const HeaderNavData = createSlice({
  name: "headerNav",
  initialState: {
    menuBar: false,
    searchBar: false,
  },
  reducers: {
    headerNavSearchBar: (state, action) => {
      state.searchBar = action.payload;
    },
    headerNavMenuBar: (state, action) => {
      state.menuBar = action.payload;
    },
  },
});

export const { headerNavMenuBar, headerNavSearchBar } = HeaderNavData.actions;
export const HeaderNavSearch = (state) => state.counterNav.searchBar;
export const HeaderNavMenu = (state) => state.counterNav.menuBar;

export default HeaderNavData.reducer;
