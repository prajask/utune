const CreationDate = (props) => {
  return (
    <div
      className="creationdate"
    >
      <p>
        Created in
      </p>

      <p>
        {props.creationDate}
      </p>
    </div>
  );
};

export default CreationDate;
