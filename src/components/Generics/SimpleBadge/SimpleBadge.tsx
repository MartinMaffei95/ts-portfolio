import React from 'react';

const SimpleBadge = ({ text }: { text: string }) => {
  return (
    <span className="text-xs font-normal p-2 border rounded-full">{text}</span>
  );
};

export default SimpleBadge;
