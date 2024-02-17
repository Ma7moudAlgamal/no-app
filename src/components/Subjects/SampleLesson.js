const SampleLesson = ({ link, title }) => {
  return (
    <div className="sample-lesson grid hover">
      <div className="video">
        <iframe
          //   width="300"
          //   height="200"
          src={link}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default SampleLesson;
