import { useState } from 'react';
import Modal from './Modal';

const Gallery = ({ cats, onRefresh, onSelect }) => {
  const [selectedCat, setSelectedCat] = useState(null);

  return (
    <div className="gallery-container">
      <div className="header">
        <h1 className="title">Cats Gallery</h1>
        <button onClick={onRefresh} className="refresh-button">
          Refresh cats
        </button>
      </div>

      <div className="gallery-grid">
        {cats.map((cat) => (
          <div key={cat.id} className="cat-item">
            <img
              src={cat.url}
              alt="Cat"
              className="cat-image"
              onClick={() => onSelect(cat)}
            />
          </div>
        ))}
      </div>

      {selectedCat && (
        <Modal cat={selectedCat} onClose={() => setSelectedCat(null)} />
      )}
    </div>
  );
};

export default Gallery;
