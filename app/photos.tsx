"use client";

import { useEffect, useState, useRef, useCallback } from 'react';

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
    <div ref={containerRef} className="h-[500px] overflow-y-scroll grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <img key={img.public_id} src={img.secure_url} alt={img.public_id} className="w-full object-cover" />
      ))}
      {loading && <div className="col-span-full text-center py-4">Loading...</div>}
    </div>
  );
}
