import { createSlice } from "@reduxjs/toolkit";

interface BlogPost {
    id: string;
    title: string;
    content: string;
    cover_image: string;
    full_name: string;
    category: string;
    created_at: string;
    author: string;
    initial_paragraph: string;
    paragraph_heading: string;
    quote: string;
    quote_writer: string;
    second_paragraph: string;
    post_images: string[] | string | any;
    paragraph_after_image: string;
    comment_count: string;
    comments: [] | any;
    repliesData: [];
    slug: string;
}

interface DataState {
    selectedPost: BlogPost | null | any;
}

const initialState: DataState = {
    selectedPost: null,
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
    },
});

export const { setSelectedPost } = dataSlice.actions;
export default dataSlice.reducer;
