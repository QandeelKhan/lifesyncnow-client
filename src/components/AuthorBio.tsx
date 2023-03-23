import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import "./css/authorbio.css";
const AuthorBio = () => {
    const selectedPost = useSelector(
        (state: RootState) => state.data.selectedPost
    );

    const [author, setAuthor] = useState<any>(null);
    const { slug } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/profile/${slug}/`
                );
                const data = response.data;
                setAuthor(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="author-bio-container">
            {/* {`${console.log(author)}`} */}
            {author !== null && (
                <div>
                    {author.map((author: any) => (
                        <div className="content-container">
                            <span className="img-container">
                                {/* <h1>Left</h1> */}
                                <img
                                    className="author-img"
                                    src={`${author.profile_image}`}
                                    alt=""
                                />
                            </span>
                            <div className="author-info">
                                <h1>{author.full_name}</h1>
                                {/* <h5>SENIOR BEAUTY EDITOR</h5> */}
                                <h5>{author.role_name}</h5>
                                <p>{author.bio}</p>
                                <div className="author-social-info">
                                    <a href="">
                                        <div className="social-container">
                                            <i className="fab fa-instagram social-icon"></i>
                                            <span>{author.instagram_acc} </span>
                                        </div>
                                    </a>

                                    <a href="">
                                        <div className="social-container">
                                            <i className="fab fa-twitter social-icon"></i>
                                            <span>{author.twitter_acc} </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default AuthorBio;
//     return (
//         <section className="author-bio-container">
//             {`${console.log(author)}`}
//             {author !== null && (
//                 <div className="content-container">
//                     <span className="img-container">
//                         {/* <h1>Left</h1> */}
//                         <img
//                             className="author-img"
//                             src={`${
//                                 !selectedPost
//                                 ? "https://www.wellandgood.com/wp-content/uploads/2022/03/ZW-Headshot-500x500.jpg"
//                                 : `${selectedPost.cover_image}`
//                             }`}
//                             alt=""
//                             />
//                     </span>
//                     <div className="author-info">
//                         <h1>{author.full_name}</h1>
//                         <h5>SENIOR BEAUTY EDITOR</h5>
//                         <p>
//                             Zoë Weiner is senior beauty editor at Well+Good,
//                             where she guides coverage of skin care, hair care,
//                             cosmetics, and the beauty industry at large. A
//                             versatile writer and editor, she is also the host of
//                             Well+Good YouTube series Zoë Tries It All, testing
//                             the latest and greatest wellness experiences, beauty
//                             products, physical fitness routines, home
//                             technology, and more. <br />
//                             Before joining the team at W+G in 2018, Zoë covered
//                             a wide range of lifestyle topics for Glamour,
//                             Allure, Marie Claire, SELF, Teen Vogue, CNN, and
//                             Bustle. She received a bachelor’s degree from
//                             Georgetown University and master’s degree from
//                             Columbia University’s Graduate School of Journalism.
//                             She lives in New York City.
//                         </p>
//                         <div className="author-social-info">
//                             <a href="">
//                                 <div className="social-container">
//                                     <i className="fab fa-instagram social-icon"></i>
//                                     <span>@zoeweinerrr </span>
//                                 </div>
//                             </a>

//                             <a href="">
//                                 <div className="social-container">
//                                     <i className="fab fa-twitter social-icon"></i>
//                                     <span>@zoeweinerrr </span>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default AuthorBio;
