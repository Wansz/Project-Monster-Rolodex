import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/Card-list.component';
import SearchField from './components/search-field/Search-field.component';


const App = () => {
  
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  
  console.log('rendered');

  useEffect(() => {
    console.log('effect fired')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));

  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }


  return (
    <div className="App">
      <h1 className='heading-title'>Monsters Rolodex</h1>
      <SearchField
        className='search-field-monsters'
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters' />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}



export default App;
