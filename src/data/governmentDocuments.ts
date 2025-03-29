
export interface DocumentCategory {
  id: string;
  title: string;
  description: string;
}

export interface Document {
  id: string;
  categoryId: string;
  title: string;
  issuingAuthority: string;
  description: string;
  requiredDocuments: string[];
  processSteps: string[];
  applicationLink: string;
  imageUrl: string;
}

export const documentCategories: DocumentCategory[] = [
  {
    id: "identity",
    title: "Identity Documents",
    description: "Core identity documents for Indian citizens"
  },
  {
    id: "finance",
    title: "Financial Documents",
    description: "Documents related to taxation and financial services"
  },
  {
    id: "travel",
    title: "Travel Documents",
    description: "Documents required for domestic and international travel"
  },
  {
    id: "welfare",
    title: "Welfare Cards",
    description: "Documents related to government welfare schemes"
  }
];

export const governmentDocuments: Document[] = [
  {
    id: "aadhaar",
    categoryId: "identity",
    title: "Aadhaar Card",
    issuingAuthority: "Unique Identification Authority of India (UIDAI)",
    description: "Aadhaar is a 12-digit unique identity number that can be obtained by residents of India, based on their biometric and demographic data.",
    requiredDocuments: [
      "Proof of Identity (POI): Passport, PAN Card, Voter ID, etc.",
      "Proof of Address (POA): Passport, Voter ID, Electricity Bill, etc.",
      "Proof of Date of Birth: Birth Certificate, Passport, PAN Card, etc.",
      "Proof of Relationship (for minors): Birth Certificate, School ID Card, etc."
    ],
    processSteps: [
      "Visit nearest Aadhaar Enrollment Center",
      "Fill the Aadhaar Enrollment Form",
      "Submit required documents",
      "Complete biometric scan (fingerprints, iris scan, photograph)",
      "Receive acknowledgment slip with Enrollment ID",
      "Check status online and receive Aadhaar card via post or download e-Aadhaar"
    ],
    applicationLink: "https://uidai.gov.in/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/1200px-Aadhaar_Logo.svg.png"
  },
  {
    id: "pan",
    categoryId: "finance",
    title: "PAN Card",
    issuingAuthority: "Income Tax Department, Government of India",
    description: "Permanent Account Number (PAN) is a ten-character alphanumeric identifier issued by the Income Tax Department to individuals and entities for tax purposes.",
    requiredDocuments: [
      "Proof of Identity: Aadhaar Card, Voter ID, Passport, etc.",
      "Proof of Address: Aadhaar Card, Passport, Voter ID, etc.",
      "Proof of Date of Birth: Birth Certificate, School Certificate, Aadhaar Card, etc.",
      "Recent passport size photographs"
    ],
    processSteps: [
      "Apply online on the NSDL or UTITSL websites",
      "Fill the online application form (Form 49A for individuals)",
      "Upload scanned copies of required documents",
      "Pay the application fee",
      "Send signed acknowledgment to NSDL/UTITSL if required",
      "Track application status and receive PAN card via post"
    ],
    applicationLink: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Indian_PAN_Card.jpg/800px-Indian_PAN_Card.jpg"
  },
  {
    id: "voter",
    categoryId: "identity",
    title: "Voter ID Card",
    issuingAuthority: "Election Commission of India",
    description: "Voter ID Card (also known as EPIC - Elector's Photo Identity Card) is an identity document issued by the Election Commission to eligible voters.",
    requiredDocuments: [
      "Proof of Identity: Aadhaar Card, PAN Card, Passport, etc.",
      "Proof of Address: Aadhaar Card, Passport, Utility Bills, etc.",
      "Proof of Age: Birth Certificate, School Certificate, Aadhaar Card, etc.",
      "Recent passport size photographs"
    ],
    processSteps: [
      "Fill Form 6 (for new voters) online or offline",
      "Submit application with required documents to the local Electoral Registration Officer",
      "Field verification will be conducted by Booth Level Officer",
      "Check status on the Electoral Roll website",
      "Collect Voter ID card from the designated office or receive via post"
    ],
    applicationLink: "https://voters.eci.gov.in/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Electors_Photo_Identity_Card_of_India.jpg/640px-Electors_Photo_Identity_Card_of_India.jpg"
  },
  {
    id: "passport",
    categoryId: "travel",
    title: "Passport",
    issuingAuthority: "Ministry of External Affairs, Government of India",
    description: "A passport is an official travel document issued by the government that certifies the identity and nationality of the holder for international travel.",
    requiredDocuments: [
      "Proof of Identity: Aadhaar Card, Voter ID, PAN Card, etc.",
      "Proof of Address: Aadhaar Card, Voter ID, Utility Bills, etc.",
      "Proof of Date of Birth: Birth Certificate, School Certificate, Aadhaar Card, etc.",
      "Recent passport size photographs"
    ],
    processSteps: [
      "Apply online on Passport Seva Portal and register",
      "Fill the application form and book an appointment",
      "Pay the fee online",
      "Visit the Passport Seva Kendra on the appointed date with original documents",
      "Complete verification and biometric capture",
      "Police verification may be conducted",
      "Receive passport via post"
    ],
    applicationLink: "https://www.passportindia.gov.in/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Indian_Passport.jpg/800px-Indian_Passport.jpg"
  },
  {
    id: "driving",
    categoryId: "identity",
    title: "Driving License",
    issuingAuthority: "Regional Transport Office (RTO)",
    description: "A driving license is an official document that permits an individual to operate one or more types of motorized vehicles on a public road.",
    requiredDocuments: [
      "Proof of Identity: Aadhaar Card, Voter ID, PAN Card, etc.",
      "Proof of Address: Aadhaar Card, Voter ID, Utility Bills, etc.",
      "Proof of Age: Birth Certificate, School Certificate, Aadhaar Card, etc.",
      "Recent passport size photographs",
      "Medical Certificate (Form 1 & 1A) for certain licenses",
      "Learner's License (for applying for a permanent license)"
    ],
    processSteps: [
      "Apply for Learner's License online or at RTO",
      "Take the Learner's License test",
      "Practice driving for at least 30 days after obtaining Learner's License",
      "Apply for Permanent Driving License",
      "Take the driving test",
      "Collect the Driving License from RTO or receive via post"
    ],
    applicationLink: "https://parivahan.gov.in/parivahan/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Indian_driving_license.jpg/640px-Indian_driving_license.jpg"
  },
  {
    id: "ration",
    categoryId: "welfare",
    title: "Ration Card",
    issuingAuthority: "Department of Food and Public Distribution, State Governments",
    description: "A Ration Card is a document issued by state governments to households that are eligible to purchase subsidized food grain from the Public Distribution System.",
    requiredDocuments: [
      "Proof of Identity: Aadhaar Card, Voter ID, PAN Card, etc.",
      "Proof of Address: Aadhaar Card, Voter ID, Utility Bills, etc.",
      "Family details including Aadhaar numbers of all family members",
      "Recent passport size photographs of family head",
      "Income Certificate (for certain categories)",
      "Existing Ration Card (for modification)"
    ],
    processSteps: [
      "Apply online through state government portal or offline at nearest PDS office",
      "Fill the application form with family details",
      "Submit required documents",
      "Verification by local authorities may be conducted",
      "Check application status online",
      "Collect Ration Card from designated office or receive via post"
    ],
    applicationLink: "https://nfsa.gov.in/portal/apply_for_new_card",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ration_Card_India.jpg/640px-Ration_Card_India.jpg"
  },
  {
    id: "gst",
    categoryId: "finance",
    title: "GST Registration",
    issuingAuthority: "Goods and Services Tax Network (GSTN)",
    description: "GST Registration is required for businesses with an annual turnover above the threshold limit, enabling them to collect GST from customers and claim input tax credit.",
    requiredDocuments: [
      "PAN Card of Business/Individual",
      "Aadhaar Card of Proprietor/Partners/Directors",
      "Business Registration Document (Partnership deed, Certificate of Incorporation, etc.)",
      "Bank Account details with IFSC",
      "Address Proof of Business Premises",
      "Digital Signature (for companies)",
      "Photographs of Promoters/Partners/Directors"
    ],
    processSteps: [
      "Apply for GST Registration on GST Portal",
      "Fill the application form with business details",
      "Upload required documents",
      "Submit application and get Application Reference Number (ARN)",
      "Verification by tax authorities may be conducted",
      "Receive GST Registration Certificate with GSTIN"
    ],
    applicationLink: "https://www.gst.gov.in/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Goods_and_Services_Tax_logo.png/640px-Goods_and_Services_Tax_logo.png"
  },
  {
    id: "ayushman",
    categoryId: "welfare",
    title: "Ayushman Bharat Card",
    issuingAuthority: "National Health Authority",
    description: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY) provides health coverage of Rs. 5 lakh per family per year for secondary and tertiary care hospitalization.",
    requiredDocuments: [
      "Aadhaar Card of all family members",
      "Ration Card/SECC Database details",
      "Proof of eligibility under SECC 2011 database",
      "Recent passport size photographs",
      "Mobile number for registration"
    ],
    processSteps: [
      "Check eligibility on the PM-JAY website or app",
      "Visit nearest Ayushman Bharat Kendra or Common Service Centre (CSC)",
      "Submit required documents",
      "Verification of eligibility will be done",
      "Biometric authentication may be required",
      "Receive Ayushman Bharat e-card"
    ],
    applicationLink: "https://pmjay.gov.in/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ayushman_Bharat_Yojana_Logo.svg/640px-Ayushman_Bharat_Yojana_Logo.svg.png"
  }
];
