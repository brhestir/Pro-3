import React from "react";

const Loading = () => {
  return (
    <div>
      <section className="hero is-medium is-info">
        <div className="hero-body">
          <p className="title">Loading</p>
          <p className="subtitle">One moment please...</p>
          <progress
            className="progress is-small is-primary"
            max="50"
          ></progress>
        </div>
      </section>
    </div>
  );
};

export default Loading;
