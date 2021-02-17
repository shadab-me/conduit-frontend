function Author(props) {
  const { username } = props;
  return (
    <div className="author ml-3">
      <div className="row d-flex flex-row">
        <img
          src="/img/profile.jpg"
          alt="avatar"
          style={{ width: "15px", height: "20px", borderRadius: "50%" }}
        ></img>
        <h6 className="ml-2 text-bold font-weight-light">{username}</h6>
      </div>
    </div>
  );
}

export default Author;
