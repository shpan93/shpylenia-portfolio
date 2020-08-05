import React, { useEffect, useCallback } from 'react';
import verdansk from '../images/verdansk.jpg';
import '../styles/warzone/index.sass'

function regenerate() {

}

const NotFoundPage = () => {
  const wrapperRef = React.useRef();
  const [coords, setCoords] = React.useState({
    top: 0,
    left: 0,
  });
  const regenerate = useCallback(() => {
    const left = Math.random() * (window.innerWidth - 40) + 20;
    const top = Math.random() * (wrapperRef.current.offsetHeight - 40) + 20;
    window.scrollTo({ top})
    setCoords({left, top});
  }, []);
  useEffect(() => {
    regenerate();
  }, [wrapperRef]);
  return (
    <div className="verdansk-map">
      <div className="wrapper" ref={wrapperRef}>
        <img src={verdansk} alt="" />
        <div className="marker" style={{ top: `${coords.top}px`, left: `${coords.left}px`}}>
        </div>
      </div>
      <div role="button" className="regenerate-btn" onClick={regenerate}>
        Get new drop location
      </div>
    </div>
  )
};

export default NotFoundPage;
