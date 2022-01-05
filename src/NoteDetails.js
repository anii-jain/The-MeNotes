import { useParams, useHistory } from "react-router-dom";
// import NoteList from "./NoteList";
import useFetch from './usefetch';

const NoteDetails = () => {
    
    const { id } = useParams();
    const { data: note, error, isPending } = useFetch('http://localhost:8000/notes/' + id);
    const history = useHistory();

    const  handleClick = () => {
        fetch('http://localhost:8000/notes/' + note.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="note-details">
            { isPending && <div>LOADING...</div> }
            { error && <div>{ error }</div> }
            { note && (
                <article>
                    <h2>{note.title}</h2>
                    <p>Written By - {note.author}</p>
                    <div>{note.body}</div>
                    <button onClick={handleClick}>Delete Note</button>
                </article>
            )}
        </div>
    );
}
 
export default NoteDetails;