import "./styles.css";

export function Feedback(){
    return(
        <div className="container">
            <p>Deixe seu FeedBack</p>
            <div className="content">
                <form action="">
                    <textarea name="feedback" id="backfeed"></textarea>
                    <button type="submit">Publicar</button>
                </form>
            </div>
        </div>
    )
}