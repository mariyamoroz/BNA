import React from 'react';
import { useParams } from 'react-router-dom';

function PostPage() {
    const { id } = useParams();

    return (
        <main className="container">
            This is a statement {id}
         </main>
    )
}

export default PostPage;