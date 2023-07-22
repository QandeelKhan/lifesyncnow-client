// already working fine implementation:
// import { useSelector } from "react-redux";
// import PageTemplate from "../components/PageTemplate";
// import { RootState } from "../redux/store";
// import CardAuthorStories from "../components/CardAuthorStories";
// import { setSearchResults } from "../redux/reducers/eventsSlice";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SearchResults = () => {
//     const { searchQuery, searchResults } = useSelector(
//         (state: RootState) => state.events
//     );
//     const { query } = useParams<{ query: string }>();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const fetchSearchResults = async () => {
//             const response = await fetch(
//                 `/api/blog/posts-list/?search=${searchQuery}`
//             );
//             const data = await response.json();
//             dispatch(setSearchResults(data));
//         };
//         fetchSearchResults();
//     }, [searchQuery]);

//     return (
//         <PageTemplate>
//             <div>
//                 <h1>Search Results for "{query}"</h1>
//                 {searchResults.map((post: any) => (
//                     <CardAuthorStories
//                         firstName={post.author.first_name}
//                         postTitle={post.title}
//                         postImage={post.cover_image}
//                         fullName={post.full_name}
//                         authorImage={post.author.profile_image}
//                         postSlug={post.slug}
//                         userSlug={post.author.user_slug}
//                     />
//                 ))}
//             </div>
//         </PageTemplate>
//     );
// };

// export default SearchResults;

// new implementation: testing phase
import { useSelector } from "react-redux";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import { RootState } from "../redux/store";
import CardAuthorStories from "../components/Cards/CardAuthorStories";
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
            try {
                const response = await fetch(
                    `/api/blog/posts-list/?search=${searchQuery}`
                );
                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch search results from server"
                    );
                }
                const data = await response.json();
                dispatch(setSearchResults(data));
            } catch (error) {
                console.error(error);
                // Handle error state here if needed
            }
        };
        fetchSearchResults();
    }, [searchQuery]);

    let content;
    if (searchResults.length > 0) {
        content = searchResults.map((post: any) => (
            <CardAuthorStories
                firstName={post.author.first_name}
                postTitle={post.title}
                postImage={post.cover_image}
                fullName={post.full_name}
                authorImage={post.author.profile_image}
                postSlug={post.slug}
                userSlug={post.author.user_slug}
            />
        ));
    } else if (searchQuery) {
        content = <p>Oops, no search results found for "{query}"</p>;
    } else {
        content = <p>Failed to fetch search results from server</p>;
    }

    return (
        <PageTemplate>
            <div>
                {searchQuery && <h1>Search Results for "{query}"</h1>}
                {content}
            </div>
        </PageTemplate>
    );
};
export default SearchResults;
