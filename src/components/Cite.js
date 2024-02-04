import FetchJoker from "../methods/FetchJoker";
import "./styles/cite.css"
function Cite () {

return <div className="Cita">
        <div class="card-body" className="Cite">
            <div class="card-header">
                <h2>Humor</h2>
            </div>
            <blockquote class="blockquote mb-0">
            <FetchJoker />

            <footer class="blockquote-footer">Chistes generados por API <cite title="Source Title">JokerAPI</cite></footer>
            </blockquote>
        </div>
        </div>
}

export default Cite;