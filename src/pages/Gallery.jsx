import React, { useMemo } from 'react';
import GalleryFilter from '../components/gallery/GalleryFilter';
import GalleryGrid from '../components/gallery/GalleryGrid';
import LightboxModal from '../components/gallery/LightboxModal';
import { GALLERY_ITEMS } from '../data/galleryData';
import { useModal } from '../hooks/useModal';

export default function Gallery({ selectedCategory, setSelectedCategory, onOpenAppointment }) {
  const { isOpen, modalData, openModal, closeModal } = useModal();

  const activeCat = selectedCategory || 'All';

  // Compute category item counts
  const itemCounts = useMemo(() => {
    const counts = { All: GALLERY_ITEMS.length };
    GALLERY_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCat === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCat);
  }, [activeCat]);

  return (
    <div className="animate-fade-in bg-[#FAF7F2] min-h-screen pb-24">
      {/* Header */}
      <section className="pt-16 pb-6 sm:pt-24 sm:pb-8 text-center border-b border-[#C8B6A6]/25 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8E7B6C] font-medium block mb-3">
            THE LOOKBOOK
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F1B18] font-normal leading-tight">
            Curated Collections
          </h1>
          <p className="text-xs sm:text-sm text-[#6E665F] font-light mt-4 max-w-xl mx-auto font-sans">
            Explore our modest everyday casuals, handcrafted wedding & festive couture, and fine textile textures.
          </p>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-6" />
        </div>
      </section>

      {/* Filter and Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryFilter
          activeCategory={activeCat}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          itemCounts={itemCounts}
        />

        <GalleryGrid
          items={filteredItems}
          onSelectImage={(item) => openModal(item)}
        />

        {/* Custom Order Callout */}
        <div className="mt-20 p-8 sm:p-12 text-center bg-[#F5F3EF] border border-[#C8B6A6]/40 max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium block mb-2">
            BESPOKE COMMISSIONS
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1B18] font-normal">
            Seeking a Custom Colorway or Made-to-Measure Cut?
          </h3>
          <p className="text-xs text-[#6E665F] font-light mt-2 max-w-lg mx-auto font-sans">
            Every piece in our gallery can be personalized to your preferred modest proportions, fabric weights, or sleeve styles.
          </p>
          <div className="mt-6">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3 bg-[#1F1B18] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-[#C5A059] hover:text-[#FAF7F2] transition-colors"
            >
              Discuss Custom Order
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isOpen}
        item={modalData}
        onClose={closeModal}
      />
    </div>
  );
}
