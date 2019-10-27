import React from 'react';
import './Expandable.css';

const Expandable = props => {

  const myRef = React.useRef(null);

  React.useEffect(() => {
    const handleClick = (e) => {
      const addContentElement = props.btnRef.current;
      if (!addContentElement.contains(e.target)) { 
        // if clicked outside add content
        props.onHide();
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  })

  return <div
    ref={myRef}
    className={`expandable ${props.expanded ? 'expanded': ''}`}>
    { props.children }
  </div>
};

export default Expandable;