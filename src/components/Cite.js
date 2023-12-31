import FetchJoker from "../methods/FetchJoker";

function Cite () {

return <div class="card" style={{'paddingTop':'2%'}}>
        <div class="card-header" style={{'padding':'2%', 'font-size':'2em'}}>
            Joker
        </div>
        <div class="card-body" style={{'padding':'2%'}}>
            <blockquote class="blockquote mb-0">
                
            <FetchJoker />

            <footer class="blockquote-footer">Chistes generados por API <cite title="Source Title">JokerAPI</cite></footer>
            </blockquote>
        </div>
        </div>
}

export default Cite;