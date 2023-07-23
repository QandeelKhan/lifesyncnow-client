import "./css/authorbio.css";

const AuthorBio = (props: any) => {
    return (
        <section className="author-bio-container">
            <div>
                <div className="content-container">
                    <span className="img-container">
                        <img
                            className="author-img"
                            src={props.profileImage}
                            alt=""
                        />
                    </span>
                    <div className="author-info">
                        <h1>{props.fullName}</h1>
                        {/* <h5>SENIOR BEAUTY EDITOR</h5> */}
                        <h5>{props.roleName}</h5>
                        <p>{props.bio}</p>
                        <div className="author-social-info">
                            <a href={props.instagramAccount}>
                                <div className="social-container">
                                    <i className="fab fa-instagram social-icon"></i>
                                    <span>{props.instagramAccount} </span>
                                </div>
                            </a>

                            <a href={props.TwitterAccount}>
                                <div className="social-container">
                                    <i className="fab fa-twitter social-icon"></i>
                                    <span>{props.TwitterAccount} </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorBio;
