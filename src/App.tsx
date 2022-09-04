import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import NotesProvider from "./context/NotesProvider";

const App = () => (
    <NotesProvider>
        <MainContent/>
    </NotesProvider>
);

export default App;
