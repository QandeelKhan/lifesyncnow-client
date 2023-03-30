import React from "react";
import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTemplate";
import { RootState } from "../redux/store";

const SearchResults = () => {
    const { navVisible, clientPortalClicked, searchResults } = useSelector(
        (state: RootState) => state.events
    );
    return (
        <PageTemplate>
            <div>
                {searchResults.map((post: any) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <img src={post.cover_image} alt="" />
                    </div>
                ))}
            </div>
        </PageTemplate>
    );
};

export default SearchResults;
