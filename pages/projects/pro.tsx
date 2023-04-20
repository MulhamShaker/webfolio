import React, { useEffect } from "react";
import $ from "jquery";

const Project = () => {
  useEffect(() => {
    // Fetch data from Next.js API route
    fetch("/api/projects.json")
      .then((response) => response.json())
      .then((data) => {
        var content = "";
        for (var x in data) {
          content += "<div>" + data[x].title + "</div>";
          content += "<div>" + data[x].description + "</div>";
          content += "<div>" + data[x].tech + "</div>";
          content += "<div>" + data[x].code + "</div>";
          content += "<div>" + data[x].live + "</div>";
          content += "<div>" + data[x].thumbnail + "</div>"; // Corrected typo
        }

        // Update DOM with fetched data
        $("#show").html(content);
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <div id="show">
        {/* Render fetched data here */}
      </div>
    </div>
  );
};

export default Project;


