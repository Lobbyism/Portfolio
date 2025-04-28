import React from "react";
function ProjectCarouselScreenshot({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        maxheight: "400px",
        objectFit: "contain",
        borderRadius: "8px",
      }}
    />
  );
}
export default ProjectCarouselScreenshot;
