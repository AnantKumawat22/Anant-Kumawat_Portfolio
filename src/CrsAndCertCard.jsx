const CrsAndCertCard = (props) => {
    return (
        <>
            <div className="big_card">
                <img className="img" alt="Loading Error" src={props.imgsrc}></img>
                <div className="small_div">
                    <h3 className="card_head">{props.title}</h3>
                    <span className="card_span">{props.sname}</span>
                    <a href={props.link} target="_blank">
                        <button className="card_btn">Open Certificate</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default CrsAndCertCard;