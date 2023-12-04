import { useState } from "react";

const CreateAdd = () => {
  const [image, setImage] = useState();

  function handlePictureUpload(event) {}

  return (
    <div>
      <h3>What do you want to rent? </h3>
      <p>Share what you have and make some money on the process </p>
      <form>
        <input type="text" placeholder="Title"></input>
        <input type="number" placeholder="$"></input>
        <br />
        <textarea placeholder="Describe what you rent..."></textarea>
        <h3>Upload a picture for your add</h3>
        <input type="file" onChange={() => handlePictureUpload()}></input>
      </form>
      <image src={image}></image>
    </div>
  );
};

export default CreateAdd;
