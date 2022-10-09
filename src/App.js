function App() {
    const title = 'Blog Post'
    const body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nihil amet quas omnis voluptatem accusantium rerum expedita tenetur, incidunt porro? Provident veniam neque eaque nulla dolore officia esse voluptates reiciendis!'
    const comments = [
        { id: 1, text: 'I like this' },
        { id: 2, text: 'I don\'t this' },
        { id: 3, text: 'I hate this' }
    ]

    const loading = false
    if (loading) return <h1>true</h1>

    const showComments = true

    const commentBlock =
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>

    return (
        <div className="container">
            <h2 className="title">{title.toUpperCase()}</h2>
            <p>{body}</p>
            {showComments && commentBlock}
        </div>
    )
}

export default App