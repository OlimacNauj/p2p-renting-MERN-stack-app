import UserRating from "./UserRating";

const AdDetails = ({
  adDetails: {
    id,
    title,
    img_url,
    user_reviews,
    description,
    location,
    price,
    type,
  },
}) => {
  return (
    <>
      <div className="DetailImageContainer">
        <img src=""></img>
      </div>
      <div>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
        Rating:
        <UserRating rating={rating} />
      </div>
    </>
  );
};

export default AdDetails;
