/* File: seo.js
   Inject JSON-LD structured data for a medical professional (schema.org).
   Customize details below (name, address, telephone, url).
*/
(function(){
  const ld = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Md. Yousuf Kabir",
    "description": "Thoracic Surgeon in Bangladesh, Lung Surgeon Dhaka, Chest Surgery Specialist, Empyema and Pleural Disease, VATS Surgery, Dr. Md. Yousuf Kabir,  Yousuf Kabir Dhaka Medical, Best Thoracic Doctor in Bangladesh"",
    "url": "https://dryousufkabir.vercel.app/",
    "medicalSpecialty": "Thoracic Surgery",
    "image": "https://dryousufkabir.vercel.app/assets/images/doctor-portrait.jpg",
    "telephone": "+8801830140001",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "152/2/G, Panthapath, Green Road, Dhaka-1205",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "availableService": [
      {"@type":"MedicalProcedure","name":"Thoracic Surgery"},
       "@type":"MedicalProcedure","name":"Broncities"},
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

