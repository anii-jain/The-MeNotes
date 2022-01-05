import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Animesh');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = { title, body, author };
        setIsPending(true);

        fetch('http://localhost:8000/notes',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
            }).then(() => {
            // console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Add A New Note</h2>
            <form onSubmit={handleSubmit}>
                <label>Note Title:</label>
                <input 
                    type = "text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Notes's Body:</label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Notes's Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Animesh">Animesh</option>
                    <option value="Others">Others</option>
                </select>
                {!isPending && <button>Add Note</button>}
                {isPending && <button disabled>Adding Note...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}
 
export default Create;