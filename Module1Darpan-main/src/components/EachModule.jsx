// import React, { useState } from 'react';
import image from './exam-result.png';
import {Link} from 'react-router-dom';
export default function EachModule(props) {
  // const [isVisible, setVisible] = useState(true);
  // const domRef = React.useRef();
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(domRef.current);
  //   return () => observer.unobserve(domRef.current);
  // }, []);
  return (
    <Link to={`/${props.content.toLowerCase()}`}style={{textDecoration:"none",color:"black"}}>
    <div className="modules-card" >
        <img src={image} alt="illustrative" />
        <div className="module-content" >{props.content}</div>
    </div>
    </Link>
  )
}
