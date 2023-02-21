const Picture = (data) => {
  console.log(data);
  return (
    <div className="photo">
      <img src={data.src.large} alt="" />
      <h5 className="name">{data.photographer}</h5>
    </div>
  );
};

export default Picture;
