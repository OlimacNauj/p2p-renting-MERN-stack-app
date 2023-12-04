import Ad from "./Ad";

const AdsList = ({ ads }) => {
  return (
    <div className="adList">
      {ads.map((e, i) => (
        <Ad key={i} ad={e} />
      ))}
    </div>
  );
};

export default AdsList;
