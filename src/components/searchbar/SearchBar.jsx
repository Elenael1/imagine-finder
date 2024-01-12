import { useState } from "react";
import s from './searchBar.module.css'

const SearchBar = ({plusInputValue, searchIcon}) => {
  const [dataInput, setDataInput] = useState("");

  const input = (e) => {
    setDataInput(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    plusInputValue(dataInput)
  }
  return (
    <header className={s.searchBar}>
         <form className={s.searchForm} onSubmit={onSubmit}>
           <button type="submit" className={s.SearchFormButton}>
             <span className={s.buttonLabel}>Search</span>
             <span className={s.searchIcon}>
              <img src={searchIcon} alt=""/>
              
              </span>
           </button>
      
           <input onChange={input}
            className={s.searchInput}
             type="text"
            autoComplete="off"
             autoFocus
             placeholder="Search images and photos"
           />
        </form>
       </header>
  )
}

export default SearchBar