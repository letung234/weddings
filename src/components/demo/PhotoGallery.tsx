import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  satu,
  dua,
  tiga,
  empat,
  lima,
  enam,
  tujuh,
  delapan,
  sembilan,
  spuluh,
  irfan,
  is,
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
} from "@/assets";

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const photos: Photo[] = [
  { id: 1, src: satu, alt: "Wedding photo 1", category: "Hiện Đại" },
  { id: 2, src: dua, alt: "Wedding photo 2", category: "Cổ Điển" },
  { id: 3, src: tiga, alt: "Wedding photo 3", category: "Hiện Đại" },
  { id: 4, src: empat, alt: "Wedding photo 4", category: "Hiện Đại" },
  { id: 5, src: lima, alt: "Wedding photo 5", category: "Hiện Đại" },
  { id: 6, src: enam, alt: "Wedding photo 6", category: "Hiện Đại" },
  { id: 7, src: tujuh, alt: "Wedding photo 7", category: "Hiện Đại" },
  { id: 8, src: delapan, alt: "Wedding photo 8", category: "Hiện Đại" },
  { id: 9, src: sembilan, alt: "Wedding photo 9", category: "Cổ Điển" },
  { id: 10, src: is, alt: "Wedding photo 10", category: "Hiện Đại" },
  { id: 11, src: spuluh, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 11, src: irfan, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 12, src: a1, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 13, src: a2, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 14, src: a3, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 15, src: a4, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 16, src: a5, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 17, src: a6, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 18, src: a7, alt: "Wedding photo 11", category: "Hiện Đại" },
  { id: 19, src: a8, alt: "Wedding photo 11", category: "Cổ Điển" },
  { id: 20, src: a9, alt: "Wedding photo 11", category: "Cổ Điển" },
];

const categories = ["Tất cả", "Cổ Điển", "Hiện Đại"];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setFilteredPhotos(
      currentCategory === "Tất cả"
        ? photos
        : photos.filter((photo) => photo.category === currentCategory)
    );
  }, [currentCategory]);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length
        : (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted rounded-xl">
      {/* content */}
      <div className="container mx-auto px-4">
        {/* title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Album Ảnh Cưới Của Chúng Tôi
        </motion.h2>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 space-x-1 lg:w-[400px] mx-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setCurrentCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <p className="text-white text-lg font-semibold">Xem</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* dialog modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[80vw] md:max-w-[20vw] max-h-[80vh] px-3  overflow-hidden ">
          <DialogHeader>
            <DialogTitle className="sr-only">Xem Ảnh</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute  top-4 right-4 z-10 bg-white/90"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Đóng</span>
            </Button>
            <AnimatePresence mode="wait">
              {selectedPhoto && (
                <motion.img
                  key={selectedPhoto.id}
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain"
                />
              )}
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={() => navigatePhoto("prev")}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Ảnh trước</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={() => navigatePhoto("next")}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Ảnh sau</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
