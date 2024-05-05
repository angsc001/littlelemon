import React, { useState, useEffect } from 'react';

function ImageComponent({ url, fallbackUrl }) {
  const [imageUrl, setImageUrl] = useState(url);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setImageUrl(url);
      } catch (error) {
        console.error('Failed to fetch image from URL:', error);
        setImageUrl(fallbackUrl);
      }
    };

    fetchImage();
  }, [url, fallbackUrl]);

  return imageUrl;
}

export default ImageComponent;
