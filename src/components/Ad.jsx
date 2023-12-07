import UserRating from "./UserRating";

const Ad = ({
  ad: { id, user_reviews, description, title, price, category, image },
}) => {
  const imageUrl = `http://localhost:5000/uploads/${image}`;
  return (
    <div className="image-container">
      <img src={imageUrl} />
      <p>
        {title} <br />
        <br></br>${price}, {category}
        <br />
        <UserRating rating={user_reviews} />
      </p>
    </div>
  );
};

export default Ad;
