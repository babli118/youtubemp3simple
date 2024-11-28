import React from "react";

const CurrentTime = () => {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  return (
    <div>
      <span className="text-sm">Last updated: {currentDateTime}</span>
    </div>
  );
};

export default CurrentTime;
