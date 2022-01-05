import NoteList from './NoteList';
import useFetch from './usefetch';

const Home = () => {
    const { data: notes, IsPending, error} = useFetch('http://localhost:8000/notes');

    return (
        <div className="Home">
            {error && <div>{ error }</div>}
            {IsPending && <div>LOADING...</div>}
            {notes && <NoteList notes={notes} title="All Notes!" />}
        </div>
    );
}
 
export default Home;