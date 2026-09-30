/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
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
  Smile,
  ExternalLink
} from 'lucide-react';

// Exact Direct Asset URLs
const ASSETS = {
  logo: "https://i.ibb.co/gF7CsjG3/IMG-6641.jpg",
  photo1: "https://i.ibb.co/zH69xVQy/IMG-6642.jpg", // Baby Room / Babies 0-2 yrs
  photo2: "https://i.ibb.co/LDQ8LjqV/IMG-6643.jpg", // Preschool 3-5 yrs
  photo3: "https://i.ibb.co/Fq5mbFFY/IMG-6644.jpg"  // Playrooms / Caterpillar Room
};

export default function App() {
  // Navigation active section
  const [activeTab, setActiveTab] = useState('Home');
  
  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = [ASSETS.photo1, ASSETS.photo2, ASSETS.photo3];
  const carouselCaptions = [
    "Nurturing early senses in our Premium Baby Room",
    "Cultivating curiosity and school readiness",
    "Creative adventures in our signature Caterpillar Room"
  ];

  // Auto play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  // Review Slider State
  const [reviewIndex, setReviewIndex] = useState(0);
  const reviews = [
    {
      name: "Jessica Miller",
      location: "Moorebank, Sydney",
      stars: 5,
      role: "Mother of Chloe (18 months)",
      quote: "Poppy's has been a blessing. The 1:4 baby room ratio is strictly maintained, and the educators show so much genuine love. The sleep routines are perfectly aligned with home, and everything is premium - from the nappies included to the organic food. It feels like home but better!"
    },
    {
      name: "Marcus Chen",
      location: "Chipping Norton, Sydney",
      stars: 5,
      role: "Father of Ethan (4 years)",
      quote: "The Preschool program here is outstanding. Ethan's speech and confidence have skyrocketed since starting in the Caterpillar Room. They don't just babysit; they have a dedicated school readiness curriculum that makes me 100% confident for next year. Sydney's best childcare by far."
    },
    {
      name: "Samantha Wright",
      location: "Moorebank, Sydney",
      stars: 5,
      role: "Mother of Leo (2 years) & Mia (5 years)",
      quote: "Absolute luxury and unmatched peace of mind. As a busy working mum, knowing that the educators are highly qualified and care deeply about each child's individual interests is priceless. The communication is daily and precise, and the facilities are immaculate."
    },
    {
      name: "Leila Al-Masri",
      location: "Liverpool, Sydney",
      stars: 5,
      role: "Mother of Zayn (3 years)",
      quote: "The educators were once little ones too, and that philosophy shows in how playful and respectful they are with children. Zayn looks forward to Extracurricular days with pure excitement! It's worth every single dollar."
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
      image: ASSETS.photo3,
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
      image: ASSETS.photo2,
    },
    {
      time: "12:00 PM — Gourmet Lunch & Mindfulness",
      title: "Nourishment & Quiet Rest Reflection",
      description: "After a rich, hot lunch (e.g., free-range chicken cacciatore), soft piano music plays. Children transition into gentle naps or mindfulness relaxation sessions.",
      image: ASSETS.photo1,
    },
    {
      time: "3:00 PM — Extracurricular Enrichment",
      title: "Languages, Dance & School Readiness",
      description: "Active physical coordination classes, children's French language play, or immersive mock-classroom transitions for our graduating preschool poppies.",
      image: ASSETS.photo2,
    }
  ];

  // Handle Form Submission with WhatsApp Link Generation
  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Select the correct contact phone based on Room choice
    const isBabyRoom = enrollForm.room.includes("Baby");
    const targetPhone = isBabyRoom ? "0297302977" : "0297301106";
    const displayPhone = isBabyRoom ? "02 9730 2977" : "02 9730 1106";
    
    // Build WhatsApp message
    const message = `Hello Poppy's Learning Daycare! 🌸\n\nI would love to book a luxury tour to enroll my child.\n\n*Details:*\n• *Parent Name:* ${enrollForm.parentName}\n• *Parent Phone:* ${enrollForm.parentPhone}\n• *Child Name:* ${enrollForm.childName}\n• *Child DOB:* ${enrollForm.childDob}\n• *Preferred Start Date:* ${enrollForm.preferredDate}\n• *Interested Room:* ${enrollForm.room}\n\nPlease let me know your availability for a private boutique tour! Thank you. ✨`;
    
    // Encode for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp web URL (using national format or direct link)
    // Australian international code is +61, Sydney phone prefix is 2
    // 02 9730 2977 -> +61 2 9730 2977 -> 61297302977
    const formattedWaNumber = isBabyRoom ? "61297302977" : "61297301106";
    const waUrl = `https://wa.me/${formattedWaNumber}?text=${encodedMessage}`;
    
    // Open in a new tab
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
              className="bg-[#1A1A1A] text-[#FFFBF5] text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#E53935] transition-all duration-300 shadow-sm tracking-wide shrink-0 whitespace-nowrap cursor-pointer active:scale-95"
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
                className="bg-[#1A1A1A] text-[#FFFBF5] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#7A9A6A] text-center transition-all duration-300 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Enroll or Book private Tour</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => {
                  setVirtualTourStep(0);
                  setIsVirtualTourOpen(true);
                }}
                className="border border-[#1A1A1A]/20 text-[#1A1A1A] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#1A1A1A] hover:text-[#FFFBF5] text-center transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Play size={14} className="fill-current text-[#E53935] group-hover:text-[#FFFBF5] transition-colors" />
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
                  <span className="text-xs font-bold text-[#1A1A1A] ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-[#1A1A1A]/60 uppercase tracking-widest font-semibold mt-0.5">
                  Over 110+ Sydney Families recommendation
                </p>
              </div>
            </div>

          </div>

          {/* Right Image Carousel Column */}
          <div className="col-span-1 lg:col-span-6 relative">
            <div className="relative h-[450px] md:h-[520px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-neutral-100">
              
              {/* AnimatePresence for sliding image transitions */}
              <AnimatePresence mode="wait">
                <motion.img 
                  key={carouselIndex}
                  src={carouselImages[carouselIndex]} 
                  alt="Poppy's Daycare Scene" 
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  referrerPolicy="no-referrer"
                  onClick={() => setLightboxImage(carouselImages[carouselIndex])}
                />
              </AnimatePresence>

              {/* Linear gradient scrim for slide caption legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

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
                    className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all active:scale-90"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={() => setCarouselIndex((prev) => (prev + 1) % carouselImages.length)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all active:scale-90"
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

              {/* 1,087 Happy Moments Floating Card */}
              <div className="absolute top-6 left-6 bg-[#FFFBF5] rounded-xl px-4 py-3 shadow-lg border border-[#7A9A6A]/10 flex items-center gap-3 animate-bounce-slow">
                <div className="h-9 w-9 rounded-full bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
                  <Instagram size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">1,087 Moments</h4>
                  <p className="text-[10px] text-[#1A1A1A]/60 leading-none">@poppys.daycare active posts</p>
                </div>
              </div>

              {/* 4.9/5 Rating Floating Card */}
              <div className="absolute bottom-24 right-6 bg-[#FFFBF5] rounded-xl px-4 py-3 shadow-lg border border-[#7A9A6A]/10 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#7A9A6A]/10 flex items-center justify-center text-[#7A9A6A]">
                  <Star size={18} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">4.9 / 5 Rating</h4>
                  <p className="text-[10px] text-[#1A1A1A]/60 leading-none">Moorebank's Top Rated Daycare</p>
                </div>
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
        
        {/* CSS for custom infinite scrolling animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s ease-in-out infinite;
          }
        `}</style>
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
              Our locations are custom tailored to match your child's developmental phase. We focus strictly on expert-led, intimate learning.
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
                  
                  {/* Location & Contact (Zero Pill) */}
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
                    className="bg-[#7A9A6A] hover:bg-[#1A1A1A] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all cursor-pointer"
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
                  
                  {/* Location & Contact (Zero Pill) */}
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
                    className="bg-[#1A1A1A] hover:bg-[#E53935] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    Enroll in Preschool
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. PLAYROOMS & EXTRACURRICULAR: Masonry gallery with Caterpillar Room */}
      <section id="playrooms" className="py-24 px-4 md:px-8 bg-[#FFFBF5] relative overflow-hidden border-t border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold text-[#E53935] uppercase tracking-widest block">Signature Spaces</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A]">
                Inside The Caterpillar Room & Beyond
              </h2>
              <p className="text-sm text-[#1A1A1A]/70">
                A showcase of curated learning rooms, nature-play outdoor spots, and boutique developmental spaces at Nuwarra Road. Click any image to view details.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-[#1A1A1A]/70">
              <span className="text-[#E53935]">● Playrooms</span>
              <span>·</span>
              <span className="text-[#7A9A6A]">● Caterpillar Room</span>
              <span>·</span>
              <span className="text-neutral-500">● Sensory Playgrounds</span>
            </div>
          </div>

          {/* Masonry-Style Interactive Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Main Marquee Card 1 */}
            <div className="col-span-1 md:col-span-8 group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 shadow-sm h-96">
              <img 
                src={ASSETS.photo3} 
                alt="Signature Caterpillar Playroom at Poppy's Daycare" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setLightboxImage(ASSETS.photo3)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A9A6A]">Signature Centerpiece</span>
                <h3 className="text-xl font-serif font-bold">The Caterpillar Creative Room</h3>
                <p className="text-xs text-white/80 max-w-md">Our premium classroom focused on open-ended, child-led visual learning and messy craft sensory exploration.</p>
              </div>
            </div>

            {/* Photo Card 2 */}
            <div className="col-span-1 md:col-span-4 group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 shadow-sm h-96">
              <img 
                src={ASSETS.photo1} 
                alt="Infant Sensory Playscape" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setLightboxImage(ASSETS.photo1)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E53935]">Babies 0-2 yrs</span>
                <h3 className="text-lg font-serif font-bold">The Sensory Sleep Sanctuary</h3>
                <p className="text-xs text-white/80">Soft wood architecture, noise-insulated panels, and light controllers designed for pristine rests.</p>
              </div>
            </div>

            {/* Photo Card 3 */}
            <div className="col-span-1 md:col-span-4 group relative overflow-hidden rounded-2xl border border-[#1A1A1A]/5 shadow-sm h-80">
              <img 
                src={ASSETS.photo2} 
                alt="Preschool Interactive Circle" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 cursor-zoom-in"
                referrerPolicy="no-referrer"
                onClick={() => setLightboxImage(ASSETS.photo2)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#7A9A6A]">Preschool 3-5 yrs</span>
                <h3 className="text-lg font-serif font-bold">School Readiness Studio</h3>
                <p className="text-xs text-white/80">Interactive smart reading areas, early mathematics kits, and self-confidence project boards.</p>
              </div>
            </div>

            {/* Educational Extracurricular Info Card */}
            <div id="extracurricular" className="col-span-1 md:col-span-8 bg-[#1A1A1A] rounded-2xl p-8 md:p-10 text-[#FFFBF5] flex flex-col justify-between h-80 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#7A9A6A]/10 rounded-full blur-2xl" />
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#E53935]/10 rounded-full blur-2xl" />
              
              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7A9A6A] tracking-wider uppercase">
                  <Sparkles size={14} />
                  <span>Curricular Highlights</span>
                </div>
                <h3 className="text-2xl font-serif font-bold md:text-3xl max-w-md leading-tight text-white">
                  Included Premium Extracurricular Classes
                </h3>
                <p className="text-sm text-white/80 max-w-xl">
                  We believe every child deserves comprehensive exposure. Unlike typical daycares charging extra, Poppy's includes elite extracurricular programs in your standard daily fee.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 relative z-10 text-xs text-white/95">
                <div>
                  <h4 className="font-bold text-[#7A9A6A]">French Immersion</h4>
                  <p className="text-[11px] text-white/70">Language & music play</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#E53935]">Phonics First</h4>
                  <p className="text-[11px] text-white/70">Literacy foundation</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#7A9A6A]">Savage STEM</h4>
                  <p className="text-[11px] text-white/70">Interactive science</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#E53935]">Eco-Wellness</h4>
                  <p className="text-[11px] text-white/70">Botanical play & nutrition</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. THEN & NOW + EDUCATORS: Narrative Story Section */}
      <section id="celebrations" className="py-24 px-4 md:px-8 bg-[#FFFBF5] border-t border-[#1A1A1A]/5 relative overflow-hidden">
        
        {/* Soft decorative background leaf illustration (CSS representation) */}
        <div className="absolute top-1/2 -left-16 w-32 h-32 bg-[#7A9A6A]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section title */}
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
              
              {/* Left Column: Image with interactive toggle indicator */}
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
        
        {/* Soft background glow */}
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
            
            {/* Elegant large quote marks */}
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
                      {reviews[reviewIndex].role} · {reviews[reviewIndex].location}
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

      {/* 8. ENROLLING BANNER & FORM: WhatsApp Action */}
      <section id="enroll-now" className="py-24 px-4 md:px-8 bg-[#FFFBF5] relative">
        <div className="max-w-4xl mx-auto bg-white border border-[#1A1A1A]/5 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left side column: Elegant introductory header */}
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
                  {/* Parent Name */}
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

                  {/* Parent Phone */}
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
                  {/* Child Name */}
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

                  {/* Child DOB */}
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
                  {/* Preferred Start Date */}
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

                  {/* Room Stream */}
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
                  className="w-full bg-[#1A1A1A] hover:bg-[#E53935] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
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

      {/* 9. FOOTER: Dark Luxury Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-4 md:px-8 border-t border-white/5 relative">
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
                  className="flex-grow text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7A9A6A]"
                />
                <button 
                  onClick={() => alert("Thank you! You are subscribed to our private newsletter.")}
                  className="bg-[#7A9A6A] hover:bg-[#E53935] px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer"
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
              className="absolute top-6 right-6 text-white hover:text-[#E53935] transition-colors p-2"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>
            <div className="max-w-4xl max-h-[85vh] overflow-hidden rounded-xl border border-white/10 relative">
              <img 
                src={lightboxImage} 
                alt="Poppy's Daycare Detail" 
                className="max-w-full max-h-[85vh] object-contain mx-auto"
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
                className="absolute top-4 right-4 text-neutral-500 hover:text-black"
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
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#1A1A1A]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
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
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#1A1A1A]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#1A1A1A]/80">Developmental Stream</label>
                  <select 
                    value={enrollForm.room}
                    onChange={(e) => setEnrollForm({...enrollForm, room: e.target.value})}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#1A1A1A]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#7A9A6A]"
                  >
                    <option>Baby Room (0-2 yrs) — 134 Nuwarra Rd</option>
                    <option>Senior Preschool (3-5 yrs) — 147 Nuwarra Rd</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1A1A1A] hover:bg-[#E53935] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
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

    </div>
  );
}
