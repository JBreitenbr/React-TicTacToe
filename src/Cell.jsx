export function Cell(props) {
    return (
     <button id={props.id} className="square" onClick={() => props.onClick()} disabled={props.dis}>{props.value}
        </button>
    )
}
