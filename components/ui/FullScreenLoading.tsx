import React from "react";

export const FullScreenLoading = () => {
  return (
    <div
      aria-label="loader"
      id="pause"
      className="d-flex align-items-center justify-content-center"
    >
      <div id="spinner"></div>
    </div>
  );
};
