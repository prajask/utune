const ProjectLastUpdate = (props) => {
    return (
      <div
        className="project--last-updation-date"
      >
        <p>
          Last Updated
        </p>
  
        <p>
          {props.lastUpdate}
        </p>
      </div>
    );
  };
  
  export default ProjectLastUpdate;
  