import { useState, useEffect } from "react";
import { client } from "../sanity/client";

export const useGalleryImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "galleryImage"] | order(order asc) {
          _id,
          title,
          alt,
          image,
          order,
          featured,
          category,
          publishedAt
        }`;

        const data = await client.fetch(query);
        setImages(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching gallery images:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading, error };
};
