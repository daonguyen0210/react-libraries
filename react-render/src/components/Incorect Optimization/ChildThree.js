import React from 'react';

const ChildThree = (props) => {
  const {children, name} = props;
  console.log('child render');
  return <div>{children} {name}</div>;
};
export const MemoChildThree = React.memo(ChildThree);
export default (ChildThree);
