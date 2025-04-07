import { useEffect, useState } from 'react';
import { fetchCats } from './services/CatService';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import './index.css';

function App() {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadCats = async () => {
    setLoading(true);
    const data = await fetchCats();
    setCats(data);
    setLoading(false);
  };

  const refreshCats = () => {
    loadCats();
  };

  useEffect(() => {
    loadCats();
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loading-text">Loading cats...</div>
      ) : (
        <Gallery cats={cats} onSelect={setSelectedCat} onRefresh={refreshCats} />
      )}

      {selectedCat && (
        <Modal cat={selectedCat} onClose={() => setSelectedCat(null)} />
      )}
    </div>
  );
}

export default App;
