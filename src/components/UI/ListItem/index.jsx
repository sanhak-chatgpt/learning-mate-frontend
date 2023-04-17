export * from './ListItem';
import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

ReactDOM.render(
    <React.StrictMode>
        <ListItem />
    </React.StrictMode>,
    document.getElementById('root'));