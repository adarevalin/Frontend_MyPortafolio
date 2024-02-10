import FetchJoker from "../methods/FetchJoker";
import "./styles/cite.css"

function Cite () {

return <div className="Cita">
        <div className="Cite card-body">
            <div className="card-header">
                <h2>Humor</h2>
            </div>
            <blockquote className="blockquote mb-0">
            <FetchJoker />

            <footer className="blockquote-footer">Chistes generados por API <cite title="Source Title">JokerAPI</cite></footer>
            </blockquote>
        </div>
        </div>
}

export default Cite;