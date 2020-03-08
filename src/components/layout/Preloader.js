import React from "react";

const Preloader = () => {
  return (
    <div class="text-center mt-5">
      <div class="spinner-border text-info " style={{width: '4rem', height: '4rem'}} role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Preloader;
