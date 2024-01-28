import React from 'react';
import { Link } from 'react-router-dom';

function StatementsPage() {
    return (
        <main className="container">
            <ul>
                <li>
                    <Link to="/statements/1">
                        Statement 1
                    </Link>
                </li>
                <li>
                    <Link to="/statements/2">
                        Statement 2
                    </Link>
                </li>
            </ul>
        </main>
    )
}

export default StatementsPage;