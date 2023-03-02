function App() {
    const title = 'Blog post'
    const body = 'this is my blog post'
    const comments = [
        {id: 1, text: 'comment one'},
        {id: 2, text: 'comment two'},
        {id: 3, text: 'comment three'},
    ]
   
    const loading = false
// condition in javascript
    if (loading) return <h1>loading...</h1>

    const showComments = false

    const showBlocks = <div className="comments">
    <h3>Comments ({comments.length})</h3>
    <ul>
        {comments.map((comment,index) =>(
            <li key={index}>{comment.text}</li>
        ))}
    </ul>
 </div>
   
    return(
        <div className='container'>

             <h1>{title.toUpperCase()}</h1>
             <p>{body}</p>

             {showComments && showBlocks}

             
    
         </div>
        
    )
}

export default App