import React, { useState } from "react";

function Input({ data }) {
    const [title, setTitle] = useState(""); // State to store the title input
    const [content, setContent] = useState(""); // State to store the content input

    function handleClick(event) {
        if (title && content) {
            // Only add a note if both title and content are non-empty
            data(prevNotes => [
                ...prevNotes,
                { title: title, content: content }
            ]);

            // Clear the input fields
            setTitle("");
            setContent("");
        }
        event.preventDefault();
    }


    return (
        <div className="inputSection">
            <form>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    value={title}
                    placeholder='Title' />

                <textarea
                    name="content"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={handleClick}>Add</button>
            </form>

        </div>
    );

}

export default Input;