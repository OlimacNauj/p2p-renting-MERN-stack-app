import UserRating from "./UserRating";

const Add = ({
  add: { id, user_reviews, description, title, price, type, location, img_url },
}) => {
  return (
    <div className="image-container">
      <img src={img_url} />
      <p>
        {title} <br />
        {location} <br></br>${price} , {type}
        <br />
        <UserRating rating={user_reviews} />
      </p>
    </div>
  );
};

export default Add;
