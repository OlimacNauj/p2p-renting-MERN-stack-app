import UserRating from "./UserRating";

const AdDetails = ({ adDetails }) => {
  // Destructure the adDetails object
  const { img_url, title, price, description, user_reviews } = adDetails;

  return (
    <>
      <div className="DetailImageContainer">
        <img src={img_url} alt="item" />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>${price}</h3>
        <p>{description}</p>
        Lender ratings:
        <UserRating rating={user_reviews} />
      </div>
    </>
  );
};

export default AdDetails;
