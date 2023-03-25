import "./css/recentCard.css";

interface props {
    cover_image: string;
    title: string;
    full_name: string;
    // takes function that returns no parameters, if not decided or having the exact logic in mind yet then simply pass the console.log() as function in the parent to make typescript happy, or add the question mark while defining the type in the interface to make the property optional like "onClick?: () => void;"
    // onClick: () => void;
    authorSlug: string;
}
// TODO: clean code for cards like on this component
// TODO: in the next projects we might hands on the css libraries like material ui, not confirmed yet for the reactive development as a lot of big companies are using these stacks these days.
// also use related things right next to each other acc to programming concept of cohesion, also coupling would be preferable by some developers.
const RecentCard = ({ cover_image, title, full_name, authorSlug }: props) => {
    return (
        <>
            <div className="recent-card">
                <img src={cover_image} className="recent-img" alt="Card" />
                <div className="recent-body">
                    <h3 className="recent-title">{title}</h3>
                    <a href={`/author/${authorSlug}`} className="recent-author">
                        By {full_name}{" "}
                    </a>
                </div>
            </div>
        </>
    );
};

export default RecentCard;
