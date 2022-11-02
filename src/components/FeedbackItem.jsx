import { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a feedback item.')
    const handleClick = () => {
        setRating( () => {
            return rating + 1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <text className="text-display">
                {text}
            </text>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FeedbackItem