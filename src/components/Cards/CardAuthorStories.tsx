import "../../css/cardauthorstories.css";

const CardAuthorStories = (props: any) => {
    return (
        <section className="author-strories-section">
            <div className="stories-author">
                {/* TODO: WHAT IS THIS?, don't you see that when this gonna render inside the parent it can print out author name'Stories above each post! */}
                <h2 className="author-name">{props.firstName}'s Stories</h2>
                <hr className="break" />
            </div>
            <div className="story-card">
                <a
                    href={`/post/${props.postSlug}/`}
                    className="store-img-container"
                >
                    <img
                        src={props.postImage}
                        // className="story-img"
                        alt="Card"
                    />
                </a>
                <div className="story-body">
                    <a
                        style={{ display: "block" }}
                        href={`/post/${props.postSlug}/`}
                        className="story-category"
                    >
                        FOUNDATIONS & CONCEALERS
                    </a>
                    <a href={`/post/${props.postSlug}`} className="story-title">
                        {props.postTitle}
                    </a>
                    <p style={{ display: "block" }} className="story-line">
                        I'm in Love
                    </p>
                    <a
                        href={`/author/${props.userSlug}`}
                        className="story-author"
                    >
                        <img
                            src={props.authorImage}
                            className="author-img"
                            alt=""
                        />
                        <p className="author-name"> By {props.fullName}</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CardAuthorStories;
