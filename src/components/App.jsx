import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import axios from 'axios';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallary from './ImageGallary/ImageGallary';

const API_KEY = 'aK8HPseKZIXZIZbPdDbmdVjgvbFJ-gF6psHpwi1mgjo';
const BASE_URL = 'https://api.unsplash.com/photos/';

axios.defaults.baseURL = BASE_URL;

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // 1. Встановлюємо індикатор в true перед запитом
        setLoading(true);
        const response = await axios.get(`?client_id=${API_KEY}`);
        setArticles(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);
  return (
    <div className={css.container}>
      <SearchBar />
      <h1>Latest articles</h1>
      {loading && <PulseLoader color="#ff3b70" margin={2} size={22} />}
      {<ImageGallary items={articles} />}
    </div>
  );
};

export default App;
