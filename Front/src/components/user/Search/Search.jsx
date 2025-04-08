import { useState,useEffect } from "react";
import AdminApi from '../../../services/AdminApi'
const Search = () => {
  const [query, setQuery] = useState("")
const [products, setproducts] = useState([]);
const handleSearch = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      // setLoading(true);
      const data = await AdminApi.getProducts(query); // Passer le terme de recherche
      setproducts(data);
      // setLoading(false);
    };

    fetchProducts();
  }, [query]);

  return (
    <form className="d-flex me-5" role="search" >
        <input className="form-control me-2" value={query} onChange={handleSearch}  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}

export default Search