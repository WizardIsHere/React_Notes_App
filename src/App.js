import React,{useState} from 'react'

import './App.css'
import NavigationBar from './components/NavigationBar'

import Note from './components/Note/Note'

const App = () => {

    const [search, setSearch] = useState('');

    return (
        <div>
            <NavigationBar searchHandler ={setSearch}/>
            <Note search={search} />
        </div>
    )
}

export default App
