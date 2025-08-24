"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

type CloudinaryImage = {
  public_id: string;
  secure_url: string;
};

type ApiResponse = {
  resources: CloudinaryImage[];
  next_cursor: string | null;
};

export default function Gallery() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchImages = useCallback(async (cursor: string | null = null) => {
    setLoading(true);
    const url = cursor ? `/api/images?next_cursor=${cursor}` : '/api/images';
    const res = await fetch(url);
    const data: ApiResponse = await res.json();
    setImages((prev) => [...prev, ...(data.resources || [])]);
    setNextCursor(data.next_cursor || null);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el || loading || !nextCursor) return;
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100) {
        fetchImages(nextCursor);
      }
    };
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, [fetchImages, loading, nextCursor]);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-6xl mx-auto px-4 w-full"
      >
        <h1 className="text-5xl md:text-6xl font-light mb-2 text-[#800020]">Our Photos</h1>
        <div className="w-24 h-[1px] bg-[#800020] mx-auto my-6"></div>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">A collection of memories we've shared together</p>
        
        <div ref={containerRef} className="h-[500px] overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img) => (
            <div key={img.public_id} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src={img.secure_url} 
                alt={img.public_id} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" 
              />
            </div>
          ))}
          {loading && (
            <div className="col-span-full text-center py-8">
              <div className="inline-block w-8 h-8 border-4 border-[#800020] border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-2 text-[#800020]">Loading more memories...</p>
            </div>
          )}
          {images.length === 0 && !loading && (
            <div className="col-span-full text-center py-8 text-[#800020] italic">
              Photos coming soon...
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
