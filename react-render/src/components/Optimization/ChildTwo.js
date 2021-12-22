import React from 'react';

const ChildTwo = () => {
  console.log('child render');
  return <div>Child component</div>;
};
export default React.memo(ChildTwo);
