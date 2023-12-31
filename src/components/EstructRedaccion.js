import FetchGetEx from '../methods/FetchGetEx';

function EstructRedaccion (props){
    return (
            
        <>
            <FetchGetEx Id={props.Id} url={props.url}/>
        </>
    )}

export default EstructRedaccion;