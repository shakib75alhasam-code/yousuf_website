/* File: seo.js
   Inject JSON-LD structured data for a medical professional (schema.org).
   Customize details below (name, address, telephone, url).
*/
(function(){
  const ld = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. [DR_NAME]",
    "description": "[SHORT_BIO]",
    "url": "https://yourdomain.vercel.app/",
    "medicalSpecialty": "Thoracic Surgery",
    "image": "https://yourdomain.vercel.app/assets/images/doctor-portrait.jpg",
    "telephone": "+8801XXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Chamber Address Line]",
      "addressLocality": "Dhaka",
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

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(ld, null, 2);
  document.head.appendChild(script);
})();
