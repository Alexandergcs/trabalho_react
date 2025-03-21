import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      onSearch("");
    }
  };

  return (
    <nav>
      <h2>Catálogo de Filmes</h2>
      
      <div className="nav-links">
        <Link to="/">Início</Link>
        
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Buscar filmes..."
            value={query}
            onChange={handleInputChange}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
