import arrow from "../images/icons/arrow.png";

export const Button = ({className = '', label })=>{
    return(
        <>
            <button className={`buttons ${className}`}>{label}</button>
        </>
    )
}


export const Button2 = ()=>{
    return(
        <>
            <button className="buttons2">
            <img 
                src={arrow} 
                alt="" 
            />
            </button>
        </>
    )
}

export const Cardbutton = ({label})=>{
    return(
        <button className="card_button">{label}</button>
    )
}
