import { useState } from "react";

const CreateAd = () => {
  const [image, setImage] = useState();

  function handlePictureUpload(event) {}

  return (
    <div>
      <h3>What do you want to rent? </h3>
      <p>Share what you have and make some money on the process </p>
      <form>
        <input type="text" name="title" placeholder="Title"></input>
        <input type="number" name="price" placeholder="$"></input>
        <br />
        <textarea
          name="description"
          placeholder="Describe what you rent..."
        ></textarea>
        <h3>Upload a picture for your ad</h3>
        <input type="file" onChange={() => handlePictureUpload()}></input>

        <select name="category">
          <option value="">Select a Rental Category</option>
          <option value="electronics">Electronics</option>
          <option value="tools">Tools</option>
          <option value="sports_equipment">Sports Equipment</option>
          <option value="outdoor_gear">Outdoor Gear</option>
          <option value="music_equipment">Music Equipment</option>
          <option value="party_supplies">Party Supplies</option>
          <option value="vehicles">Vehicles</option>
          <option value="fashion_accessories">Fashion Accessories</option>
          <option value="books">Books</option>
          <option value="furniture">Furniture</option>
          <option value="other">Other</option>
        </select>
        <input type="hidden" name="userID" value="Test123"></input>
      </form>
      <image src={image}></image>
    </div>
  );
};

export default CreateAd;
