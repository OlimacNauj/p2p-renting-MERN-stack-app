import Add from "./add";

const AddsList = ({ adds }) => {
  return (
    <div className="addList">
      {adds.map((e, i) => (
        <Add key={i} add={e} />
      ))}
    </div>
  );
};

export default AddsList;
