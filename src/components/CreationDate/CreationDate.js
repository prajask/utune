const CreationDate = (props) => {
  return (
    <div
      className="creationdate"
    >
      <p>
        Released in:
      </p>

      <p>
        {props.creationDate}
      </p>
    </div>
  );
};

export default CreationDate;
