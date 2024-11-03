import React from 'react';
import FlappyBird from './FlappyBird';

function App() {
    const userId = 'test-user';
    return (
        <div className="App">
            <FlappyBird userId={userId} />
        </div>
    );
}

export default App;
