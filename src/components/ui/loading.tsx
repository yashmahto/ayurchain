import * as React from "react";

export const Loading = ({ size = 6 }: { size?: number }) => {
  const dimension = `${size}rem`;
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"
        style={{ width: dimension, height: dimension }}
      />
    </div>
  );
};

export default Loading;
