import { createSlice } from "@reduxjs/toolkit";

interface EventState {
    navVisible: boolean;
    blogCardClicked: boolean;
    gearOpen: boolean;
    sideBarVisible: boolean;
    clientPortalClicked: boolean;
    searchResults: any[];
}

const eventsState: EventState = {
    // cardClicked: false,
    // crossClicked: false,
    // myClassName: "deactive",
    // animate: "",
    sideBarVisible: false,
    blogCardClicked: false,
    navVisible: false,
    gearOpen: false,
    clientPortalClicked: false,
    searchResults: [],
};

export const eventsSlice = createSlice({
    name: "events",
    initialState: eventsState,
    reducers: {
        setNavVisible: (state, action: { payload: boolean }) => {
            state.navVisible = action.payload;
        },
        setGearOpen: (state, action: { payload: boolean }) => {
            state.gearOpen = action.payload;
        },
        setBlogCardClicked: (state, action: { payload: boolean }) => {
            state.blogCardClicked = action.payload;
        },
        setSideBarVisible: (state, action: { payload: boolean }) => {
            state.sideBarVisible = action.payload;
        },
        setClientPortalClicked: (state, action: { payload: boolean }) => {
            state.clientPortalClicked = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        },
        // setCardClicked: (state, action) => {
        //     state.cardClicked = action.payload;
        // },
        // setCrossClicked: (state, action) => {
        //     state.myClassName = action.payload;
        // },
        // setMyClassName: (state, action) => {
        //     state.myClassName = action.payload;
        // },
        // setMyScrollbar: (state, action) => {
        //     state.myScrollbar = action.payload;
        // },
        // setAnimate: (state, action) => {
        //     state.animate = action.payload;
        // },
    },
});

export const {
    // setCardClicked,
    // setCrossClicked,
    // setMyClassName,
    // setAnimate,
    setGearOpen,
    setBlogCardClicked,
    setSideBarVisible,
    setNavVisible,
    setClientPortalClicked,
    setSearchResults,
} = eventsSlice.actions;

export default eventsSlice.reducer;
