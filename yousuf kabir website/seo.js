/* File: seo.js
   Inject JSON-LD structured data for:
   1. Physician (Doctor)
   2. MedicalClinic (Chamber)
   3. BlogPosting (for blog pages)
   Replace placeholder URLs/images with actual content if needed.
*/
(function(){

  // ---------- 1. Physician ----------
  const doctor = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Md. Yousuf Kabir",
    "description": "Expert thoracic surgeon in Dhaka, specializing in lung cancer, chest trauma, and thoracic procedures.",
    "url": "https://dryousufkabir.vercel.app/",
    "medicalSpecialty": "Thoracic Surgery",
    "image": "https://dryousufkabir.vercel.app/assets/images/doctor-portrait.jpg",
    "telephone": "+8801830140001",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "152/2/G, Panthapath, Green Road",
      "addressLocality": "Dhaka",
      "postalCode": "1205",
      "addressCountry": "BD"
    },
    "availableService": [
      {"@type":"MedicalProcedure","name":"Thoracic Surgery"},
      {"@type":"MedicalProcedure","name":"Lung Cancer Surgery"},
      {"@type":"MedicalProcedure","name":"Chest Trauma Management"}
    ],
    "aggregateRating": {
      "@type":"AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "42"
    }
  };

  // ---------- 2. Medical Clinic ----------
  const clinic = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr. Md. Yousuf Kabir - Thoracic Surgery",
    "url": "https://dryousufkabir.vercel.app/",
    "logo": "https://dryousufkabir.vercel.app/assets/images/logo.png",
    "image": "https://dryousufkabir.vercel.app/assets/images/doctor-portrait.jpg",
    "telephone": "+8801830140001",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "152/2/G, Panthapath, Green Road",
      "addressLocality": "Dhaka",
      "postalCode": "1205",
      "addressCountry": "BD"
    },
    "sameAs": [
      "https://www.facebook.com/yousufkabir"
    ],
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$"
  };

  // ---------- 3. Blog Post (only for blog pages) ----------
  const blogPost = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": document.querySelector('h1') ? document.querySelector('h1').innerText : "Blog Post",
    "description": document.querySelector('meta[name=description]') ? document.querySelector('meta[name=description]').getAttribute('content') : "Medical blog post by Dr. Md. Yousuf Kabir.",
    "author": {
      "@type": "Person",
      "name": "Dr. Md. Yousuf Kabir"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Md. Yousuf Kabir - Thoracic Surgery",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dryousufkabir.vercel.app/assets/images/logo.png"
      }
    },
    "datePublished": document.querySelector('time') ? document.querySelector('time').getAttribute('datetime') : "2025-08-31",
    "image": document.querySelector('img') ? document.querySelector('img').src : "https://dryousufkabir.vercel.app/assets/images/doctor-portrait.jpg",
    "mainEntityOfPage": window.location.href
  };

  // ---------- Append all JSON-LD to <head> ----------
  [doctor, clinic, blogPost].forEach(item => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(item, null, 2);
    document.head.appendChild(script);
  });

})();



