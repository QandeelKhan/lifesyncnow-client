import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTemplate";
import { RootState } from "../redux/store";
import CardAuthorStories from "../components/CardAuthorStories";
import { setSearchResults } from "../redux/reducers/eventsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
    const { searchQuery, searchResults } = useSelector(
        (state: RootState) => state.events
    );
    const { query } = useParams<{ query: string }>();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSearchResults = async () => {
            const response = await fetch(
                `/api/blog/posts-list/?search=${searchQuery}`
            );
            const data = await response.json();
            dispatch(setSearchResults(data));
        };
        fetchSearchResults();
    }, [searchQuery]);

    return (
        <PageTemplate>
            <div>
                <h1>Search Results for "{query}"</h1>
                {searchResults.map((post: any) => (
                    <CardAuthorStories
                        firstName={post.author.first_name}
                        postTitle={post.title}
                        postImage={post.cover_image}
                        fullName={post.full_name}
                        authorImage={post.author.profile_image}
                        postSlug={post.slug}
                        userSlug={post.author.user_slug}
                    />
                ))}
            </div>
        </PageTemplate>
    );
};

export default SearchResults;
