import cardsdata from "./Cardlist";
import Cards from "./EachModule"
import { Link } from "react-router-dom";
export default function ModuleCard() {
  // const history = u
  return (
    <>
      <Link to="/application-status" style={{textDecoration:"none"}}>
    <div className="redirect-check-status">
      <button >Check application status</button>
    </div>
      </Link>
      <Link to="/faculty-login" style={{textDecoration:"none"}}>
    <div className="redirect-check-status">
      <button >Faculty Login</button>
    </div>
      </Link>
    <div className="modules-frame">
    {cardsdata.map((card,index)=>(
      <Cards key={index} title={card.title} content={card.content}  />
    ))}
   </div>
   </>
  )
}
