import React from "react";

const Resource = ({ title, image, location }) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(
      "Section_2.1_-Why_be_an_Entrepreneur-LESSON_questions_(answers)"
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download =
          "Section_2.1_-Why_be_an_Entrepreneur-LESSON_questions_(answers)";
        alink.click();
      });
    });
  };

  return (
    <div className="resource grid">
      <button onClick={onButtonClick}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </button>
    </div>
  );
};

export default Resource;
