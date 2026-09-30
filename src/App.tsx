/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Check, 
  Play, 
  X, 
  Calendar, 
  User, 
  Baby, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  ExternalLink,
  Award
} from 'lucide-react';

// Exact Direct Asset URLs (Including all 10 Real Photos)
const ASSETS = {
  logo: "https://i.ibb.co/gF7CsjG3/IMG-6641.jpg",
  photo1: "https://i.ibb.co/zH69xVQy/IMG-6642.jpg",   // Baby Room / Babies 0-2 yrs
  photo2: "https://i.ibb.co/LDQ8LjqV/IMG-6643.jpg",   // Preschool 3-5 yrs
  photo3: "https://i.ibb.co/Fq5mbFFY/IMG-6644.jpg",   // Playrooms / Caterpillar Room
  photo4: "https://i.ibb.co/2YN10WG4/IMG-6679.jpg",   // New Photo 1 (Baby Room sensory nook)
  photo5: "https://i.ibb.co/cKs0rcqz/IMG-6678.jpg",   // New Photo 2 (Outdoor garden play)
  photo6: "https://i.ibb.co/LD07wZtb/IMG-6677.jpg",   // New Photo 3 (STEM / Creative workspace)
  photo7: "https://i.ibb.co/Q3x9DckT/IMG-6676.jpg",   // New Photo 4 (Indoor reading circle)
  photo8: "https://i.ibb.co/MyWQWWcm/IMG-6675.jpg",   // New Photo 5 (Nursery details / Soft play)
  photo9: "https://i.ibb.co/r2yxMJ4w/IMG-6674.jpg",   // New Photo 6 (Fine-motor development desk)
  photo10: "https://i.ibb.co/1YFKWvQQ/IMG-6673.jpg"   // New Photo 7 (Botanical activity corner)
};

export default function App() {
  // Preloader State
  const [isLoading, setIsLoading] = useState(true);

  // Navigation active section
  const [activeTab, setActiveTab] = useState('Home');
  
  // Carousel State: EXACTLY the 7 New Photos for the main Hero Slideshow Carousel
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = [
    ASSETS.photo4, // New 1: IMG-6679
    ASSETS.photo5, // New 2: IMG-6678
    ASSETS.photo6, // New 3: IMG-6677
    ASSETS.photo7, // New 4: IMG-6676
    ASSETS.photo8, // New 5: IMG-6675
    ASSETS.photo9, // New 6: IMG-6674
    ASSETS.photo10 // New 7: IMG-6673
  ];

  const carouselCaptions = [
    "Enriching sensory exploration with tactile setups in our baby nursery stream.",
    "Joyful nature-play adventures in our leafy botanical yards.",
    "STEM exploration and creative fine-motor workspaces.",
    "Intimate, quiet circle storytelling corners to build vocabulary.",
    "Serene, supportive rest and soft playscapes for premium nurture.",
    "Fostering logical thinking and critical cognitive school-readiness.",
    "Interactive botanical craft projects inside our signature classroom."
  ];

  // Auto preloader countdown under 1.5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  // Auto play carousel (Airbnb Slow Zoom cycle)
  useEffect(() => {
    if (isLoading) return;
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isLoading]);

  // Lightbox State
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Tour Booking Modal State
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  
  // Virtual Tour Modal State
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [virtualTourStep, setVirtualTourStep] = useState(0);

  // Form State
  const [enrollForm, setEnrollForm] = useState({
    childName: '',
    childDob: '',
    parentName: '',
    parentPhone: '',
    preferredDate: '',
    room: 'Baby Room (0-2 yrs)'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Review Slider State (Sydney mum reviews)
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    {
      name: "Victoria Hargreaves",
      suburb: "Georges Fair, Moorebank",
      stars: 5,
      role: "Mother of Sienna (14 months)",
      quote: "As an executive, I visited six different daycares in Sydney's South West before finding Poppy's. The difference is night and day. The baby nursery maintains an impeccable standard of clean architectural design, and the sleep tracking matches our exact home routine. Sienna's primary educator is a qualified pediatric nurse who handles transition anxiety with so much poise. Worth every single dollar of our daily rate."
    },
    {
      name: "Dr. Catherine Thorne",
      suburb: "Wattle Grove, Sydney",
      stars: 5,
      role: "Mother of Harrison (4 years)",
      quote: "Poppy's school-readiness program operates on the level of elite private schools. Harrison is already engaging in advanced phonics and early stem concepts. The Caterpillar Room is a masterpiece of child-led learning, boasting beautiful timber materials and sensory setups. He has transitioned from a shy child to a confident, articulating little explorer. We couldn't be happier with our decision."
    },
    {
      name: "Amelie Bourassa",
      suburb: "Chipping Norton, Sydney",
      stars: 5,
      role: "Mother of Liam (2.5 years)",
      quote: "What captured our hearts was their philosophy that 'educators were once little ones too'. That respectful, warm, child-centric lens translates into everything they do. From the chef-prepared organic nutrition to the premium biodegradable nappies and the French immersion classes, they leave absolutely nothing to be desired. Poppy's is truly the benchmark of Australian premium early education."
    }
  ];

  // Then & Now Slider (Educators Story)
  const [educatorIndex, setEducatorIndex] = useState(0);
  const educators = [
    {
      name: "Miss Linda",
      role: "Director & Early Childhood Teacher",
      experience: "15+ Years Experience",
      childhoodAspiration: "Loved building wooden block castles & reading picture books aloud.",
      todayMission: "Guiding our senior preschool program with a research-backed school readiness framework.",
      image: ASSETS.photo2,
      quote: "I believe early learning is about instilling an unshakeable sense of confidence in children from day one."
    },
    {
      name: "Miss Chloe",
      role: "Baby Room Leader",
      experience: "8+ Years in Infant Care",
      childhoodAspiration: "Always found carrying baby dolls and putting them to sleep with sweet lullabies.",
      todayMission: "Crafting quiet, serene sensory playscapes and gentle, predictable routines for our under 2s.",
      image: ASSETS.photo1,
      quote: "A baby's day is perfect when they feel completely secure, heard, and deeply loved by their surroundings."
    },
    {
      name: "Miss Sarah",
      role: "Caterpillar Room & Creative Arts Leader",
      experience: "10+ Years in Arts Education",
      childhoodAspiration: "Painted her bedroom walls with finger paints and collected autumn leaves for collages.",
      todayMission: "Developing hands-on organic art projects, botanical outdoor plays, and musical sensory circles.",
      image: ASSETS.photo3,
      quote: "Every corner of our Caterpillar Room is designed to make little imaginations run wild with joyful discovery."
    }
  ];

  // Virtual Tour Timeline
  const virtualTourTimeline = [
    {
      time: "6:30 AM — Premium Morning Welcome",
      title: "Botanical Play & Cozy Soft Welcomes",
      description: "Our doors open to a warm, sunlit nursery. Babies enjoy quiet sensory play, while older children explore nature setups in the outdoor play garden.",
      image: ASSETS.photo5,
    },
    {
      time: "9:30 AM — Organic Morning Tea",
      title: "Chef-Prepared Wholefood Nutrition",
      description: "Organic ingredients crafted to fuel little minds. Seasonal fresh fruits, house-baked sugar-free oat cookies, and milk, catering to all allergy profiles.",
      image: ASSETS.photo1,
    },
    {
      time: "10:00 AM — Core Educational Projects",
      title: "STEM, Literacy, and Caterpillar Art",
      description: "Small group projects in the Caterpillar Room. Children engage in teacher-led STEM activities, school-readiness pre-writing, and open-ended canvas painting.",
      image: ASSETS.photo3,
    },
    {
      time: "12:00 PM — Gourmet Lunch & Mindfulness",
      title: "Nourishment & Quiet Rest Reflection",
      description: "After a rich, hot lunch (e.g., free-range chicken cacciatore), soft piano music plays. Children transition into gentle naps or mindfulness relaxation sessions.",
      image: ASSETS.photo8,
    },
    {
      time: "3:00 PM — Extracurricular Enrichment",
      title: "Languages, Dance & School Readiness",
      description: "Active physical coordination classes, children's French language play, or immersive mock-classroom transitions for our graduating preschool poppies.",
      image: ASSETS.photo2,
    }
  ];

  // Instagram Feed simulation using completely distinct real photos (strict zero-stock policy)
  const instagramFeed = [
    { id: 1, src: ASSETS.photo4, caption: "Immersive sensory mornings in our baby nursery 🧸 #PoppysNursery #EarlyLearning #Moorebank" },
    { id: 2, src: ASSETS.photo5, caption: "Our future explorers enjoying the beautiful botanical nature playscapes 🌿 #OutdoorPlay #SydneyKids" },
    { id: 3, src: ASSETS.photo6, caption: "Our custom Caterpillar Room is filled with endless creative canvases 🎨 #ReggioEmilia #ChildLedArt" },
    { id: 4, src: ASSETS.photo7, caption: "Morning library readings and early vocabulary circles 📚 #SchoolReadiness #EarlyLiteracy" },
    { id: 5, src: ASSETS.photo8, caption: "Soft play coordination and gentle milestone nurture 🧸 #BabyNursery #PremiumCare" },
    { id: 6, src: ASSETS.photo9, caption: "Developing precision fine-motor and spatial math capabilities 📐 #STEMMinds #CriticalThinking" }
  ];

  // Handle Form Submission with WhatsApp Link Generation
  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Select the correct contact phone based on Room choice
    const isBabyRoom = enrollForm.room.includes("Baby");
    const formattedWaNumber = isBabyRoom ? "61297302977" : "61297301106";
    
    // Build WhatsApp message
    const message = `Hello Poppy's Learning Daycare! 🌸\n\nI would love to book a luxury tour to enroll my child.\n\n*Details:*\n• *Parent Name:* ${enrollForm.parentName}\n• *Parent Phone:* ${enrollForm.parentPhone}\n• *Child Name:* ${enrollForm.childName}\n• *Child DOB:* ${enrollForm.childDob}\n• *Preferred Start Date:* ${enrollForm.preferredDate}\n• *Interested Room:* ${enrollForm.room}\n\nPlease let me know your availability for a private boutique tour! Thank you. ✨`;
    
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${formattedWaNumber}?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
  };

  const handleTourModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Poppy's Learning Daycare! 🌸\n\nI want to book a VIP Tour of your premium Moorebank facilities.\n\n*Parent:* ${enrollForm.parentName}\n*Phone:* ${enrollForm.parentPhone}\n*Interested Room:* ${enrollForm.room}\n\nPlease confirm my boutique tour! ✨`;
    const waUrl = `https://wa.me/61297301106?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setIsTourModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#1A1A1A] relative selection:bg-[#7A9A6A]/20 selection:text-[#1A1A1A]">
      
      {/* PRELOADER SCREEN */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#FFFBF5] z-[100] flex flex-col items-center justify-center"
          >
            <div className="space-y-6 text-center">
              <motion.div 
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative h-24 w-24 rounded-full overflow-hidden border border-[#7A9A6A]/20 shadow-md bg-white mx-auto"
              >
                <img 
                  src={ASSETS.logo} 
                  alt="Poppy's Daycare Logo" 
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A]">Poppy's</h2>
                <p className="text-[10px] tracking-widest text-[#7A9A6A] font-bold uppercase">Learning Daycares</p>
              </div>
              <div className="w-16 h-0.5 bg-neutral-200 mx-auto rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-8 bg-[#E53935]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HEADER: Sticky glass navigation */}
      <header className="sticky top-0 z-50 bg-[#FFFBF5]/90 backdrop-blur-md border-b border-[#1A1A1A]/5 px-4 md:px-8 py-3 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Zone */}
          <a href="#" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A9A6A] rounded-lg p-1">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#7A9A6A]/20 shadow-sm bg-white shrink-0">
              <img 
                src={ASSETS.logo} 
                alt="Poppy's Learning Daycares Logo" 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#E53935] transition-colors leading-none">
                Poppy's
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-[#7A9A6A] mt-0.5 leading-none">
                Learning Daycares
              </span>
            </div>
          </a>

          {/* Nav Links Zone (Center) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {[
              { label: 'Playrooms', href: '#playrooms' },
              { label: 'Extracurricular', href: '#extracurricular' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Celebrations', href: '#celebrations' },
              { label: 'Education', href: '#programs' }
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setActiveTab(link.label)}
                className={`relative py-1 text-sm transition-colors duration-300 hover:text-[#E53935] focus-visible:outline-none ${
                  activeTab === link.label ? 'text-[#E53935]' : 'text-[#1A1A1A]/80'
                }`}
              >
                {link.label}
                {activeTab === link.label && (
                  <motion.span 
                    layoutId="headerBubble"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E53935]" 
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Action Zone (Right) */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:0297301106"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#1A1A1A]/80 hover:text-[#E53935] transition-colors"
            >
              <Phone size={14} className="text-[#7A9A6A]" />
              <span>02 9730 1106</span>
            </a>
            <button 
              onClick={() => setIsTourModalOpen(true)}
              className="bg-[#1A1A1A] text-[#FFFBF5] text-xs font-semibold px-6 py-3 rounded-full hover:bg-[#1A1A1A]/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md tracking-wide shrink-0 whitespace-nowrap cursor-pointer"
            >
              Book Tour — 02 9730 1106
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO: Split Layout */}
      <section className="relative overflow-hidden pt-8 pb-16 md:py-24 px-4 md:px-8">
        
        {/* Soft background luxury shapes */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#7A9A6A]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E53935]/3 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="col-span-1 lg:col-span-6 space-y-8">
            
            {/* Elegant Exceeding NQS Tag */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#7A9A6A] tracking-wider uppercase">
              <span className="flex h-2 w-2 rounded-full bg-[#7A9A6A] animate-pulse" />
              <span>Moorebank's Most Loved — Exceeding NQS Rating</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] leading-[1.1] text-wrap">
              Where Little Poppies <span className="text-[#E53935] italic font-normal">Bloom</span> With Confidence
            </h1>

            {/* Sub-Headline with separations (Zero Pill) */}
            <div className="space-y-4">
              <p className="text-base text-[#1A1A1A]/70 leading-relaxed font-sans max-w-xl">
                Providing Sydney's finest, elite early learning and nurture. At Poppy's, your child's early milestone journey is structured, deeply personal, and completely supportive.
              </p>
              
              {/* Informational clean unboxed inline text metadata (Zero Pill Rule) */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-[#1A1A1A]/60 border-t border-[#1A1A1A]/5 pt-4">
                <span>Long Daycare 0–5yrs</span>
                <span className="text-[#7A9A6A]" aria-hidden="true">·</span>
                <a href="tel:0297302977" className="hover:text-[#E53935] transition-colors">Baby Room 02 9730 2977</a>
                <span className="text-[#7A9A6A]" aria-hidden="true">·</span>
                <a href="tel:0297301106" className="hover:text-[#E53935] transition-colors">Preschool 02 9730 1106</a>
                <span className="text-[#7A9A6A]" aria-hidden="true">·</span>
                <span className="text-[#7A9A6A] font-bold">CCS Approved</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#enroll-now"
                className="bg-[#1A1A1A] text-[#FFFBF5] px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 text-center transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Enroll or Book private Tour</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => {
                  setVirtualTourStep(0);
                  setIsVirtualTourOpen(true);
                }}
                className="bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 hover:bg-[#1A1A1A] hover:text-[#FFFBF5] text-center transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Play size={14} className="fill-current text-[#E53935] group-hover:text-inherit transition-colors" />
                <span>Watch Our Day</span>
              </button>
            </div>

            {/* Direct proof adjacency */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#1A1A1A]/5">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-[#FFFBF5] overflow-hidden">
                  <img src={ASSETS.photo1} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#FFFBF5] overflow-hidden">
                  <img src={ASSETS.photo2} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#FFFBF5] overflow-hidden">
                  <img src={ASSETS.photo3} className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#E53935] text-[#E53935]" />
                  ))}
                  <span className="text-xs font-bold text-[#1A1A1A] ml-1">5.0 / 5.0</span>
                </div>
                <p className="text-[11px] text-[#1A1A1A]/60 uppercase tracking-widest font-semibold mt-0.5">
                  Over 110+ Sydney Families recommendation
                </p>
              </div>
            </div>

          </div>

          {/* Right Image Carousel Column (Displaying EXACTLY the 7 New Images as slides) */}
          <div className="col-span-1 lg:col-span-6 relative">
            <div className="relative h-[480px] md:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={carouselIndex}
                  src={carouselImages[carouselIndex]} 
                  alt="Poppy's Daycare Scene" 
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.08, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    scale: { duration: 6, ease: "linear" },
                    opacity: { duration: 0.8 }
                  }}
                  referrerPolicy="no-referrer"
                  onClick={() => setLightboxImage(carouselImages[carouselIndex])}
                />
              </AnimatePresence>

              {/* Linear gradient scrim for slide caption legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* FLOATING BADGES WITH BLUR (Luxury Glassmorphism Style) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 bg-white/75 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#7A9A6A]/10 flex items-center gap-2"
              >
                <div className="h-2 w-2 rounded-full bg-[#7A9A6A]" />
                <span className="text-[11px] font-bold text-[#1A1A1A] tracking-wide uppercase">CCS Approved</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-20 right-6 bg-white/75 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#E53935]/10 flex items-center gap-2"
              >
                <Award size={14} className="text-[#E53935]" />
                <span className="text-[11px] font-bold text-[#1A1A1A] tracking-wide uppercase">Exceeding NQS</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 left-6 bg-[#1A1A1A]/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/10 flex items-center gap-2 text-white"
              >
                <Phone size={12} className="text-[#7A9A6A]" />
                <a href="tel:0297302977" className="text-[11px] font-bold tracking-wide uppercase hover:text-[#7A9A6A] transition-colors">02 9730 2977</a>
              </motion.div>

              {/* Carousel controls */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white z-10">
                <div className="space-y-1 max-w-[70%]">
                  <p className="text-xs text-[#7A9A6A] font-bold uppercase tracking-widest">Featured Story</p>
                  <p className="text-sm font-medium leading-snug text-white/90">
                    {carouselCaptions[carouselIndex]}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all active:scale-90 animate-none cursor-pointer"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselImages.length)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all active:scale-90 animate-none cursor-pointer"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Progress Bar Indicators */}
              <div className="absolute top-4 right-4 flex gap-1 z-10">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      carouselIndex === i ? 'w-6 bg-[#E53935]' : 'w-2 bg-white/50'
                    }`}
                    aria-label={`Go to slide ${i+1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. TRUST BAR: Infinite scroll */}
      <section className="bg-[#1A1A1A] py-6 overflow-hidden relative border-y border-white/5">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex space-x-12 animate-marquee py-2 text-sm text-[#FFFBF5]/90 font-medium tracking-wide">
            {[...Array(3)].map((_, batchIdx) => (
              <div key={batchIdx} className="flex items-center space-x-12 shrink-0">
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#7A9A6A] stroke-[3]" /> CCS Government Approved
                </span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#E53935] stroke-[3]" /> Exceeding National Quality Standard
                </span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#7A9A6A] stroke-[3]" /> Certified SunSmart Centre
                </span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#E53935] stroke-[3]" /> Allergy & Anaphylaxis Aware
                </span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-[#7A9A6A] stroke-[3]" /> 10+ Years Serving Moorebank NSW
                </span>
                <span className="text-white/20" aria-hidden="true">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS: 2 Premium Cards Side by Side */}
      <section id="programs" className="py-24 px-4 md:px-8 bg-[#FFFBF5] relative">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#7A9A6A] uppercase tracking-widest block">Educating & Nurturing</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] leading-tight">
              Two Exceptional Streams of Development
            </h2>
            <p className="text-sm text-[#1A1A1A]/70 max-w-lg mx-auto">
              Our locations are custom-tailored to match your child's developmental phase. We focus strictly on expert-led, intimate learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Card A: Baby 0-2 yrs */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-[#FFFBF5] rounded-2xl overflow-hidden border border-[#1A1A1A]/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={ASSETS.photo1} 
                  alt="Baby Nursery Room at Poppy's" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onClick={() => setLightboxImage(ASSETS.photo1)}
                />
                <div className="absolute top-4 left-4 bg-[#FFFBF5] px-3 py-1.5 rounded-full text-[10px] font-bold text-[#7A9A6A] uppercase tracking-wider shadow-sm">
                  Exceeding NQS Stream
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                      Baby Nursery Room (0–2 yrs)
                    </h3>
                    <Baby size={24} className="text-[#E53935]" />
                  </div>
                  
                  {/* Location & Contact */}
                  <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/60 mt-2 font-semibold">
                    <span>134 Nuwarra Road</span>
                    <span aria-hidden="true">·</span>
                    <a href="tel:0297302977" className="text-[#7A9A6A] hover:text-[#E53935] flex items-center gap-1">
                      <Phone size={12} /> 02 9730 2977
                    </a>
                  </div>

                  <p className="text-sm text-[#1A1A1A]/70 mt-4 leading-relaxed">
                    Designed for sensory-safe, beautiful discoveries. We create gentle rhythms that respect your baby's unique sleep, feeding, and play cycles in a home-away-from-home luxury nursery.
                  </p>

                  <div className="mt-6 border-t border-[#1A1A1A]/5 pt-6 space-y-3">
                    <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Premium Inclusions:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "1:4 Infant-to-Educator Ratio",
                        "Tailored Infant Sleep Routine",
                        "Nappies & Premium Wipes Included",
                        "Chef-Prepared Organic Purées",
                        "Sensory Exploration Play",
                        "Spacious Soft Indoor Play Areas"
                      ].map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-[#1A1A1A]/85">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E53935] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#1A1A1A]/5">
                  <a 
                    href="tel:0297302977" 
                    className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider hover:text-[#7A9A6A] transition-colors flex items-center gap-1.5"
                  >
                    Call Nursery Directly <ArrowRight size={14} />
                  </a>
                  <button 
                    onClick={() => {
                      setEnrollForm(prev => ({...prev, room: "Baby Room (0-2 yrs)"}));
                      document.getElementById("enroll-now")?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 hover:scale-105 active:scale-95 text-white text-xs font-semibold px-5 py-3 rounded-full transition-all cursor-pointer"
                  >
                    Enroll in Nursery
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card B: Preschool 3-5 yrs */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-[#FFFBF5] rounded-2xl overflow-hidden border border-[#1A1A1A]/5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={ASSETS.photo2} 
                  alt="Preschool Learning Center at Poppy's" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onClick={() => setLightboxImage(ASSETS.photo2)}
                />
                <div className="absolute top-4 left-4 bg-[#FFFBF5] px-3 py-1.5 rounded-full text-[10px] font-bold text-[#E53935] uppercase tracking-wider shadow-sm">
                  School Readiness Program
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                      Senior Preschool (3–5 yrs)
                    </h3>
                    <Sparkles size={24} className="text-[#7A9A6A]" />
                  </div>
                  
                  {/* Location & Contact */}
                  <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/60 mt-2 font-semibold">
                    <span>147 Nuwarra Road</span>
                    <span aria-hidden="true">·</span>
                    <a href="tel:0297301106" className="text-[#7A9A6A] hover:text-[#E53935] flex items-center gap-1">
                      <Phone size={12} /> 02 9730 1106
                    </a>
                  </div>

                  <p className="text-sm text-[#1A1A1A]/70 mt-4 leading-relaxed">
                    Fostering critical thinkers and lifelong learners. Our school-readiness curriculum builds literacy, mathematical foundations, creative arts skill, and key social-emotional strength.
                  </p>

                  <div className="mt-6 border-t border-[#1A1A1A]/5 pt-6 space-y-3">
                    <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">Premium Inclusions:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Structured School Readiness",
                        "Phonics & Numeracy Curriculum",
                        "Weekly French Language Play",
                        "Creative Fine Arts Projects",
                        "Incursion Science Excursions",
                        "Nutritious Chef-Prepared Meals"
                      ].map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-[#1A1A1A]/85">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#7A9A6A] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-[#1A1A1A]/5">
                  <a 
                    href="tel:0297301106" 
                    className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider hover:text-[#7A9A6A] transition-colors flex items-center gap-1.5"
                  >
                    Call Preschool Directly <ArrowRight size={14} />
                  </a>
                  <button 
                    onClick={() => {
                      setEnrollForm(prev => ({...prev, room: "Senior Preschool (3-5 yrs)"}));
                      document.getElementById("enroll-now")?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 hover:scale-105 active:scale-95 text-white text-xs font-semibold px-5 py-3 rounded-full transition-all cursor-pointer"
                  >
                    Enroll in Preschool
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. PLAYROOMS & EXTRACURRICULAR: Masonry gallery with all new real photos */}
      <section id="playrooms" className="py-24 px-4 md:px-8 bg-[#FFFBF5] relative overflow-hidden border-t border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold text-[#E53935] uppercase tracking-widest block">Signature Spaces</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A]">
                Boutique Early Learning Playscapes
              </h2>
              <p className="text-sm text-[#1A1A1A]/70">
                A gorgeous showcase of our actual classrooms, botanical playscapes, and indoor sensory lounges. Click any image to view in high resolution.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-[#1A1A1A]/70">
              <span className="text-[#E53935]">● Caterpillar Room</span>
              <span>·</span>
              <span className="text-[#7A9A6A]">● Botanical Gardens</span>
              <span>·</span>
              <span className="text-neutral-500">● Sensory Studios</span>
            </div>
          </div>

          {/* Expanded Masonry Gallery with Real Photos */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Card 1: Main featured Caterpillar Room (Photo 3) */}
            <div className="col-span-1 md:col-span-8 group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 shadow-sm h-[400px]">
              <img 
                src={ASSETS.photo3} 
                alt="Signature Caterpillar Playroom at Poppy's" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setLightboxImage(ASSETS.photo3)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A9A6A]">Signature Centerpiece</span>
                <h3 className="text-2xl font-serif font-bold">The Caterpillar Creative Studio</h3>
                <p className="text-xs text-white/80 max-w-lg">Our premier classroom layout centered on Reggio Emilia hands-on art projects, painting, and visual discovery.</p>
              </div>
            </div>

            {/* Card 2: Botanical Nature Gardens (Photo 5) */}
            <div className="col-span-1 md:col-span-4 group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 shadow-sm h-[400px]">
              <img 
                src={ASSETS.photo5} 
                alt="Boutique Outdoor Play Areas" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setLightboxImage(ASSETS.photo5)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E53935]">Outdoor Stream</span>
                <h3 className="text-xl font-serif font-bold">Botanical Nature Gardens</h3>
                <p className="text-xs text-white/80">Soft timber playhouses, sensory sandboxes, and safe organic gardens for plant explorations.</p>
              </div>
            </div>

            {/* Card 3: Creative Interactive Circle (Photo 7) */}
            <div className="col-span-1 md:col-span-4 group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 shadow-sm h-[320px]">
              <img 
                src={ASSETS.photo7} 
                alt="Sensory Reading Lounges" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setLightboxImage(ASSETS.photo7)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A9A6A]">Preschool Stream</span>
                <h3 className="text-lg font-serif font-bold">Interactive Reading Circle</h3>
                <p className="text-xs text-white/80">Spacious library setup for structured circle storytelling and language play.</p>
              </div>
            </div>

            {/* Card 4: Nursery Play Coordination (Photo 8) */}
            <div className="col-span-1 md:col-span-4 group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 shadow-sm h-[320px]">
              <img 
                src={ASSETS.photo8} 
                alt="Infant Play Coordination" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setLightboxImage(ASSETS.photo8)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E53935]">Nursery Detail</span>
                <h3 className="text-lg font-serif font-bold">Sensory Infant Nooks</h3>
                <p className="text-xs text-white/80">Plush baby carpets, soft motor activity centers, and custom teething structures.</p>
              </div>
            </div>

            {/* Card 5: Botanical Activity Corner (Photo 10) */}
            <div className="col-span-1 md:col-span-4 group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 shadow-sm h-[320px]">
              <img 
                src={ASSETS.photo10} 
                alt="Botanical Activity Corner" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setLightboxImage(ASSETS.photo10)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A9A6A]">Creative Corner</span>
                <h3 className="text-lg font-serif font-bold">Botanical Craft Lounges</h3>
                <p className="text-xs text-white/80">Hands-on organic materials and interactive floral discovery tables.</p>
              </div>
            </div>

            {/* Educational Extracurricular Info Card */}
            <div id="extracurricular" className="col-span-1 md:col-span-12 bg-[#1A1A1A] rounded-2xl p-8 md:p-12 text-[#FFFBF5] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#7A9A6A]/10 rounded-full blur-2xl" />
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#E53935]/10 rounded-full blur-2xl" />
              
              <div className="space-y-4 relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A9A6A] tracking-wider uppercase">
                  <Sparkles size={14} />
                  <span>Curricular Highlights</span>
                </div>
                <h3 className="text-2xl font-serif font-bold md:text-3xl max-w-xl leading-tight text-white">
                  Included Premium Extracurricular Classes
                </h3>
                <p className="text-sm text-white/80">
                  We believe every child deserves comprehensive exposure. Unlike typical daycares charging extra, Poppy's includes elite extracurricular programs in your standard daily fee.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-10 relative z-10 text-xs text-white/95 shrink-0">
                <div>
                  <h4 className="font-bold text-[#7A9A6A]">French Immersion</h4>
                  <p className="text-[11px] text-white/70 mt-0.5">Language & music play</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#E53935]">Phonics First</h4>
                  <p className="text-[11px] text-white/70 mt-0.5">Literacy foundation</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#7A9A6A]">Savage STEM</h4>
                  <p className="text-[11px] text-white/70 mt-0.5">Interactive science</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#E53935]">Eco-Wellness</h4>
                  <p className="text-[11px] text-white/70 mt-0.5">Botanical play & nutrition</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. THEN & NOW + EDUCATORS: Story Section */}
      <section id="celebrations" className="py-24 px-4 md:px-8 bg-[#FFFBF5] border-t border-[#1A1A1A]/5 relative overflow-hidden">
        
        <div className="absolute top-1/2 -left-16 w-32 h-32 bg-[#7A9A6A]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-[#7A9A6A] uppercase tracking-widest block">Inspired Educators</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A]">
              "Our educators were once little ones too"
            </h2>
            <p className="text-sm text-[#1A1A1A]/70 max-w-xl mx-auto">
              Every educator at Poppy's retains their childhood spark of pure curiosity. Read our teachers' stories of passion, dedication, and play.
            </p>
          </div>

          <div className="bg-[#FFFBF5] border border-[#1A1A1A]/5 rounded-2xl overflow-hidden shadow-sm p-6 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Image with interactive toggle */}
              <div className="col-span-1 lg:col-span-5 space-y-4">
                <div className="relative h-[320px] rounded-xl overflow-hidden shadow-md border-4 border-white bg-neutral-100 group">
                  <img 
                    src={educators[educatorIndex].image} 
                    alt={educators[educatorIndex].name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Indicator overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex justify-between items-end">
                    <div>
                      <p className="text-[10px] uppercase font-semibold text-[#7A9A6A]">Current Classroom</p>
                      <h4 className="text-base font-serif font-bold leading-tight">{educators[educatorIndex].name}</h4>
                    </div>
                    <span className="text-[10px] font-bold bg-[#7A9A6A] text-white px-2 py-1 rounded">
                      {educators[educatorIndex].experience}
                    </span>
                  </div>
                </div>
                
                {/* Educator Tabs Navigation */}
                <div className="flex justify-between items-center gap-2 p-1 bg-neutral-100 rounded-lg">
                  {educators.map((teacher, i) => (
                    <button
                      key={teacher.name}
                      onClick={() => setEducatorIndex(i)}
                      className={`flex-1 text-center py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                        educatorIndex === i ? 'bg-white text-[#1A1A1A] shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                      }`}
                    >
                      {teacher.name.split(" ")[1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Story Narrative */}
              <div className="col-span-1 lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#E53935] uppercase tracking-wider block">Educator Showcase</span>
                  <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
                    {educators[educatorIndex].name}
                  </h3>
                  <p className="text-xs font-semibold text-[#7A9A6A]">{educators[educatorIndex].role} · {educators[educatorIndex].experience}</p>
                </div>

                {/* Then & Now Concept Presentation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#1A1A1A]/5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#E53935]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#E53935]">Then (As a Child)</h4>
                    </div>
                    <p className="text-sm text-[#1A1A1A]/80 italic">
                      "{educators[educatorIndex].childhoodAspiration}"
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#7A9A6A]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A9A6A]">Now (At Poppy's)</h4>
                    </div>
                    <p className="text-sm text-[#1A1A1A]/80">
                      {educators[educatorIndex].todayMission}
                    </p>
                  </div>
                </div>

                {/* Personal quote banner */}
                <div className="bg-[#FFFBF5] border-l-4 border-[#7A9A6A] p-4 rounded-r-xl">
                  <p className="text-xs text-[#1A1A1A]/70 italic">
                    "{educators[educatorIndex].quote}"
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#E53935]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-current" />
                    ))}
                    <span className="text-[10px] font-bold text-[#1A1A1A] ml-1">100% Verified Educators</span>
                  </div>
                  <button 
                    onClick={() => {
                      document.getElementById("enroll-now")?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#7A9A6A] flex items-center gap-1 cursor-pointer"
                  >
                    Meet Educators in Person <ArrowRight size={14} />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. REVIEWS: Slider with 5-Star Google style */}
      <section id="reviews" className="py-24 px-4 md:px-8 bg-[#1A1A1A] text-white relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7A9A6A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1 text-xs font-bold text-[#E53935] uppercase tracking-widest">
              <Star size={14} className="fill-current text-[#E53935]" />
              <span>Reviews</span>
              <Star size={14} className="fill-current text-[#E53935]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Parent Testimonials
            </h2>
            <p className="text-xs text-white/60 tracking-widest uppercase font-semibold">
              Verified Google Reviews · Moorebank Sydney
            </p>
          </div>

          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-md">
            
            <span className="absolute top-4 right-10 text-8xl font-serif text-[#7A9A6A]/10 select-none">“</span>

            <AnimatePresence mode="wait">
              <motion.div 
                key={reviewIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(reviews[reviewIndex].stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[#E53935] text-[#E53935]" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg md:text-xl font-serif italic text-white/95 leading-relaxed">
                  "{reviews[reviewIndex].quote}"
                </blockquote>

                {/* Author profile metadata (Zero Pill) */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="h-10 w-10 rounded-full bg-[#7A9A6A]/20 flex items-center justify-center text-[#7A9A6A] font-bold">
                    {reviews[reviewIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {reviews[reviewIndex].name}
                    </h4>
                    <p className="text-xs text-white/60">
                      {reviews[reviewIndex].role} · {reviews[reviewIndex].suburb}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
              <button 
                onClick={() => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-all cursor-pointer active:scale-90"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => setReviewIndex((prev) => (prev + 1) % reviews.length)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-all cursor-pointer active:scale-90"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

          {/* Social Proof Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 text-center border-t border-white/10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#7A9A6A]">10+ Years</h3>
              <p className="text-xs text-white/60 mt-1">Nurturing Moorebank</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#E53935]">100%</h3>
              <p className="text-xs text-white/60 mt-1">Qualified Educators</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#7A9A6A]">1:4 Ratio</h3>
              <p className="text-xs text-white/60 mt-1">Baby Room Standard</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#E53935]">5.0 Star</h3>
              <p className="text-xs text-white/60 mt-1">Average Family Review</p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. ENROLLING BANNER & FORM */}
      <section id="enroll-now" className="py-24 px-4 md:px-8 bg-[#FFFBF5] relative">
        <div className="max-w-4xl mx-auto bg-white border border-[#1A1A1A]/5 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left side column */}
            <div className="col-span-1 md:col-span-5 bg-[#7A9A6A] p-8 md:p-10 text-white flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#FFFBF5]/80 block">Getting Started is Easy</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold leading-tight">
                  Enrolling at Poppy's
                </h3>
                <p className="text-xs text-white/90 leading-relaxed font-sans">
                  Private touring helps you inspect classrooms, review sleep safety layouts, and secure your place. Submit this premium intake to chat instantly with our Director on WhatsApp.
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10 text-xs">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-white shrink-0" />
                  <span>CCS Subsidy Calculations Approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-white shrink-0" />
                  <span>Baby Room: 02 9730 2977</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-white shrink-0" />
                  <span>Preschool: 02 9730 1106</span>
                </div>
              </div>
            </div>

            {/* Right side column: Form */}
            <div className="col-span-1 md:col-span-7 p-8 md:p-10 bg-white">
              <form onSubmit={handleEnrollSubmit} className="space-y-5">
                
                <h4 className="text-lg font-serif font-bold text-[#1A1A1A] pb-2 border-b border-[#1A1A1A]/5">
                  Private Boutique Tour Intake
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1A1A1A]/80 flex items-center gap-1">
                      <User size={12} className="text-[#7A9A6A]" /> Parent Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sarah Miller"
                      value={enrollForm.parentName}
                      onChange={(e) => setEnrollForm({...enrollForm, parentName: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-[#FFFBF5] focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1A1A1A]/80 flex items-center gap-1">
                      <Phone size={12} className="text-[#7A9A6A]" /> Mobile Phone *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 0400 123 456"
                      value={enrollForm.parentPhone}
                      onChange={(e) => setEnrollForm({...enrollForm, parentPhone: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-[#FFFBF5] focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1A1A1A]/80 flex items-center gap-1">
                      <Baby size={12} className="text-[#E53935]" /> Child Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Leo"
                      value={enrollForm.childName}
                      onChange={(e) => setEnrollForm({...enrollForm, childName: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-[#FFFBF5] focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1A1A1A]/80 flex items-center gap-1">
                      <Calendar size={12} className="text-[#E53935]" /> Child Date of Birth *
                    </label>
                    <input 
                      type="date" 
                      required
                      value={enrollForm.childDob}
                      onChange={(e) => setEnrollForm({...enrollForm, childDob: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-[#FFFBF5] focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1A1A1A]/80">
                      Preferred Start Date *
                    </label>
                    <input 
                      type="date" 
                      required
                      value={enrollForm.preferredDate}
                      onChange={(e) => setEnrollForm({...enrollForm, preferredDate: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-[#FFFBF5] focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1A1A1A]/80">
                      Interested Developmental Stream
                    </label>
                    <select 
                      value={enrollForm.room}
                      onChange={(e) => setEnrollForm({...enrollForm, room: e.target.value})}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-[#FFFBF5] focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                    >
                      <option>Baby Room (0-2 yrs) — 134 Nuwarra Rd</option>
                      <option>Senior Preschool (3-5 yrs) — 147 Nuwarra Rd</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 hover:scale-[1.03] active:scale-95 text-white py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book and Send via WhatsApp</span>
                  <ArrowRight size={14} />
                </button>

                <p className="text-[10px] text-center text-[#1A1A1A]/50">
                  By submitting, you agree to connect directly over official WhatsApp Business channels for secure and personal Australian daycare bookings.
                </p>

                {formSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-[#7A9A6A]/10 text-[#7A9A6A] rounded-lg text-xs font-semibold text-center"
                  >
                    🌸 Redirected to WhatsApp chat! Please review and click send.
                  </motion.div>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED IN FOOTER: 6 Images from our 10 Real Photos */}
      <section className="bg-[#FFFBF5] py-16 border-t border-[#1A1A1A]/5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <a 
              href="https://instagram.com/poppys.daycare" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E53935] uppercase tracking-widest hover:underline"
            >
              <Instagram size={14} />
              <span>@poppys.daycare</span>
            </a>
            <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">Curated Daily Journeys</h3>
            <p className="text-xs text-[#1A1A1A]/60 max-w-md mx-auto">1,087 posts · 296 followers · Real moments of sensory development and play in Sydney NSW.</p>
          </div>

          {/* 6 Grid layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramFeed.map((post) => (
              <motion.div 
                key={post.id}
                whileHover={{ y: -4 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-[#1A1A1A]/5 group cursor-pointer"
                onClick={() => setLightboxImage(post.src)}
              >
                <img 
                  src={post.src} 
                  alt="Poppy's Daycare Instagram Moments" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Dark premium overlay with Instagram details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white select-none">
                  <Instagram size={18} className="text-[#FFFBF5]" />
                  <p className="text-[10px] leading-snug line-clamp-3 text-white/90">
                    {post.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER: Dark Luxury Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-12 px-4 md:px-8 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Wordmark & Statement */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-white/10 bg-white">
                <img 
                  src={ASSETS.logo} 
                  alt="Poppy's Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white tracking-tight">Poppy's</h3>
                <p className="text-[9px] tracking-widest text-[#7A9A6A] font-bold uppercase">Learning Daycares</p>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Providing pristine care and school readiness for Moorebank, Sydney families since 2012. Our dual campuses offer specialised nursery nurture and graduating preschool readiness.
            </p>
            <div className="flex items-center gap-4 text-white/50">
              <a 
                href="https://lighthearted-basbousa-26b379.netlify.app" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-[#E53935] transition-colors text-xs flex items-center gap-1"
              >
                <ExternalLink size={14} />
                <span>Reference Netlify Portal</span>
              </a>
            </div>
          </div>

          {/* Col 2: Campus Locations */}
          <div className="col-span-1 md:col-span-4 space-y-4 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#7A9A6A]">Our Sydney Campuses</h4>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="font-bold text-white">Poppy's Early Learning Daycare (0–3 yrs)</p>
                <p className="text-white/60 flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#E53935]" /> 134 Nuwarra Road, Moorebank NSW 2170
                </p>
                <p className="text-white/60 flex items-center gap-1.5">
                  <Phone size={12} className="text-[#7A9A6A]" /> 02 9730 2977
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">Poppy's Learning Daycare Centre (3–5 yrs)</p>
                <p className="text-white/60 flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#E53935]" /> 147 Nuwarra Road, Moorebank NSW 2170
                </p>
                <p className="text-white/60 flex items-center gap-1.5">
                  <Phone size={12} className="text-[#7A9A6A]" /> 02 9730 1106
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Hours & Quick Actions */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <div className="space-y-2 text-xs">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#E53935]">Operating Hours</h4>
              <p className="text-white/80 flex items-center gap-1.5">
                <Clock size={12} className="text-[#7A9A6A]" /> Monday — Friday: 6:30 AM to 6:30 PM
              </p>
              <p className="text-white/50 italic text-[11px] pl-4">Closed on NSW Public Holidays</p>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Private Circle Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="e.g. mum@sydney.com"
                  className="flex-grow text-xs px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7A9A6A]"
                />
                <button 
                  onClick={() => alert("Thank you! You are subscribed to our private newsletter.")}
                  className="bg-white hover:bg-white/95 text-[#1A1A1A] hover:scale-105 active:scale-95 px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                >
                  Join
                </button>
              </div>
              <p className="text-[10px] text-white/40">Exclusive school readiness tips & nutrition advice.</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal line */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p>© {new Date().getFullYear()} Poppy's Learning Daycares. All Rights Reserved. Sydney Premium Childcare.</p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/poppys.daycare" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <Instagram size={14} className="text-[#E53935]" /> @poppys.daycare (1,087 posts · 296 followers)
            </a>
            <a href="#playrooms" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#programs" className="hover:text-white transition-colors">NSW Childcare Guidelines</a>
          </div>
        </div>
      </footer>

      {/* 10. LIGHTBOX GALLERY DIALOG */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#E53935] transition-colors p-2 animate-none"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>
            <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-xl border border-white/10 relative">
              <img 
                src={lightboxImage} 
                alt="Poppy's Daycare Detail" 
                className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 11. BOOK VIP TOUR MODAL */}
      <AnimatePresence>
        {isTourModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-[#FFFBF5] rounded-2xl p-8 max-w-md w-full relative border border-[#1A1A1A]/10 shadow-2xl space-y-6"
            >
              <button 
                onClick={() => setIsTourModalOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-black p-1.5"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="space-y-2 text-center">
                <span className="text-[10px] uppercase font-bold text-[#7A9A6A] tracking-widest block">Luxury Private Experience</span>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">Book Private Boutique Tour</h3>
                <p className="text-xs text-[#1A1A1A]/60">Select your preferred developmental room to continue booking via WhatsApp.</p>
              </div>

              <form onSubmit={handleTourModalSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1A1A1A]/80">Parent Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Rachel Adams"
                    value={enrollForm.parentName}
                    onChange={(e) => setEnrollForm({...enrollForm, parentName: e.target.value})}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1A1A1A]/80">Mobile Phone</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="e.g. 0422 123 456"
                    value={enrollForm.parentPhone}
                    onChange={(e) => setEnrollForm({...enrollForm, parentPhone: e.target.value})}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1A1A1A]/80">Developmental Stream</label>
                  <select 
                    value={enrollForm.room}
                    onChange={(e) => setEnrollForm({...enrollForm, room: e.target.value})}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                  >
                    <option>Baby Room (0-2 yrs) — 134 Nuwarra Rd</option>
                    <option>Senior Preschool (3-5 yrs) — 147 Nuwarra Rd</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 hover:scale-105 active:scale-95 text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Generate WhatsApp Booking
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 12. WATCH OUR DAY (VIRTUAL TOUR) MODAL */}
      <AnimatePresence>
        {isVirtualTourOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-[#FFFBF5] rounded-2xl p-6 md:p-8 max-w-2xl w-full relative border border-white/10 shadow-2xl space-y-6"
            >
              <button 
                onClick={() => setIsVirtualTourOpen(false)}
                className="absolute top-4 right-4 text-neutral-500 hover:text-black p-2"
                aria-label="Close tour"
              >
                <X size={24} />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-[#E53935] tracking-widest block">Interactive Virtual Story</span>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">A Day at Poppy's Learning Daycare</h3>
                <p className="text-xs text-[#1A1A1A]/60">Step into the daily flow of our premium Moorebank long daycares.</p>
              </div>

              {/* Progress Bar of Steps */}
              <div className="flex gap-2">
                {virtualTourTimeline.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setVirtualTourStep(i)}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      virtualTourStep === i ? 'bg-[#7A9A6A]' : 'bg-neutral-200 hover:bg-neutral-300'
                    }`}
                  />
                ))}
              </div>

              {/* Active Step Presentation */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Visual */}
                <div className="col-span-1 md:col-span-6 relative h-48 md:h-64 rounded-xl overflow-hidden border border-neutral-100 bg-neutral-100">
                  <img 
                    src={virtualTourTimeline[virtualTourStep].image} 
                    alt={virtualTourTimeline[virtualTourStep].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-sm text-[#FFFBF5] text-[10px] font-bold px-2.5 py-1 rounded">
                    {virtualTourTimeline[virtualTourStep].time}
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="col-span-1 md:col-span-6 space-y-3">
                  <h4 className="text-lg font-serif font-bold text-[#1A1A1A] leading-tight">
                    {virtualTourTimeline[virtualTourStep].title}
                  </h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {virtualTourTimeline[virtualTourStep].description}
                  </p>
                  
                  <div className="pt-2 flex gap-2">
                    <button 
                      onClick={() => setVirtualTourStep((prev) => (prev - 1 + virtualTourTimeline.length) % virtualTourTimeline.length)}
                      className="px-3 py-1.5 rounded-lg border border-[#1A1A1A]/10 text-xs font-semibold text-[#1A1A1A]/80 hover:bg-[#1A1A1A] hover:text-white transition-all"
                    >
                      Previous
                    </button>
                    <button 
                      onClick={() => {
                        if (virtualTourStep === virtualTourTimeline.length - 1) {
                          setIsVirtualTourOpen(false);
                          document.getElementById("enroll-now")?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          setVirtualTourStep((prev) => prev + 1);
                        }
                      }}
                      className="px-4 py-1.5 rounded-lg bg-[#1A1A1A] text-white text-xs font-semibold hover:bg-[#7A9A6A] transition-all"
                    >
                      {virtualTourStep === virtualTourTimeline.length - 1 ? 'Schedule Real Tour' : 'Next Moment'}
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STICKY BOTTOM BOOK TOUR ACTION BAR FOR MOBILE */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#FFFBF5]/90 backdrop-blur-md border-t border-[#1A1A1A]/10 py-3.5 px-6 z-40 flex items-center justify-between shadow-lg">
        <div className="flex flex-col">
          <span className="font-serif text-sm font-bold text-[#1A1A1A] leading-none">Poppy's Moorebank</span>
          <span className="text-[10px] text-[#7A9A6A] font-semibold mt-1">Exceeding NQS Care</span>
        </div>
        <button 
          onClick={() => setIsTourModalOpen(true)}
          className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/95 hover:scale-105 active:scale-95 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 shadow-md cursor-pointer animate-none"
        >
          <span>Book Tour</span>
          <ArrowRight size={12} />
        </button>
      </div>

    </div>
  );
}
