"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

type CloudinaryImage = {
  public_id: string;
  secure_url: string;
};

type ApiResponse = {
  resources: CloudinaryImage[];
  next_cursor: string | null;
};

function shuffleArray<T>(arr: T[]) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Gallery() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const fetchImages = useCallback(async (cursor: string | null = null) => {
    setLoading(true);
    const url = cursor ? `/api/images?next_cursor=${cursor}` : "/api/images";
    const res = await fetch(url);
    const data: ApiResponse = await res.json();
    setImages((prev) => {
      const merged = [...prev, ...(data.resources || [])];
      return shuffleArray(merged);
    });
    setNextCursor(data.next_cursor || null);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // If more pages exist, fetch them in background (optional). You can remove this loop if you prefer only first page.
  useEffect(() => {
    if (!nextCursor) return;
    // load remaining pages but don't block UI; this keeps slideshow populated
    const loadAll = async () => {
      let cursor: string | null = nextCursor;
      while (cursor) {
        const url = `/api/images?next_cursor=${cursor}`;
        const res = await fetch(url);
        const data: ApiResponse = await res.json();
        setImages((prev) => shuffleArray([...prev, ...(data.resources || [])]));
        cursor = data.next_cursor || null;
      }
    };
    // run once in background
    loadAll().catch(() => {});
  }, [nextCursor]);

  // autoplay
  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!paused && images.length > 1) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((c) => (images.length ? (c + 1) % images.length : 0));
      }, 4000);
    }
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, images]);

  // ensure current index stays in bounds after shuffle/append
  useEffect(() => {
    if (images.length === 0) {
      setCurrent(0);
    } else {
      setCurrent((c) => Math.min(c, images.length - 1));
    }
  }, [images.length]);

  const prev = () => {
    if (images.length === 0) return;
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = () => {
    if (images.length === 0) return;
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-6xl mx-auto px-4 w-full"
      >
        <h1 className="text-5xl md:text-6xl font-light mb-2 text-[#800020]">
          Our Photos
        </h1>
        <div className="w-24 h-[1px] bg-[#800020] mx-auto my-6"></div>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          A collection of memories we've shared together
        </p>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden"
        >
          {images.length > 0 ? (
            <>
              {/* image container: fixed viewport area; image will scale to fit (no overflow) */}
              <div className="w-full h-[60vh] md:h-[70vh] bg-transparent flex items-center justify-center">
                <img
                  src={images[current].secure_url}
                  alt={images[current].public_id}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain transition-transform duration-700"
                />
              </div>

              {/* controls */}
              <button
                onClick={prev}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
              >
                ›
              </button>
            </>
          ) : loading ? (
            <div className="w-full h-64 flex items-center justify-center py-16">
              <div className="inline-block w-8 h-8 border-4 border-[#800020] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center py-16 text-[#800020] italic">
              Photos coming soon...
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}