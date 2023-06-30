import React, { useEffect, useState } from 'react'

const Test = ({ newsItems, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, interval);

    return () => {
      clearInterval(tickerInterval);
    };
  }, [newsItems, interval]);

  return (
    <div className="news-ticker">
      <span className="news-item">
        {newsItems[currentIndex]}
      </span>
    </div>
  );
};

export default Test;
