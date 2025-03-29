
export interface LawCategory {
  id: string;
  title: string;
  description: string;
}

export interface Law {
  id: string;
  categoryId: string;
  section: string;
  title: string;
  description: string;
  punishment: string;
  link: string;
}

export const lawCategories: LawCategory[] = [
  {
    id: "dowry",
    title: "Dowry-Related Laws",
    description: "Laws related to dowry prohibition and harassment"
  },
  {
    id: "violence",
    title: "Violence and Assault",
    description: "Laws related to physical violence, assault, and murder"
  },
  {
    id: "sexual",
    title: "Sexual Offences",
    description: "Laws related to rape and sexual assault"
  },
  {
    id: "property",
    title: "Property Crimes",
    description: "Laws related to theft, robbery, and property damage"
  },
  {
    id: "kidnapping",
    title: "Kidnapping and Abduction",
    description: "Laws related to kidnapping and abduction"
  },
  {
    id: "defamation",
    title: "Defamation",
    description: "Laws related to defamation and harm to reputation"
  },
  {
    id: "other",
    title: "Other Criminal Laws",
    description: "Other important criminal laws in the Indian Penal Code"
  }
];

export const indianLaws: Law[] = [
  {
    id: "dowry-1",
    categoryId: "dowry",
    section: "Section 304B IPC",
    title: "Dowry Death",
    description: "If the death of a woman is caused by burns or bodily injury or occurs under abnormal circumstances within 7 years of her marriage, and it is shown that soon before her death she was subjected to cruelty or harassment by her husband or his relative for any demand for dowry, such death shall be called 'dowry death'.",
    punishment: "Minimum 7 years imprisonment, which may extend to life imprisonment",
    link: "https://indiankanoon.org/doc/653797/"
  },
  {
    id: "dowry-2",
    categoryId: "dowry",
    section: "Section 498A IPC",
    title: "Cruelty by Husband or his Relatives",
    description: "Husband or relative of husband subjecting a woman to cruelty. Cruelty means any willful conduct which is likely to drive the woman to commit suicide or cause grave injury or danger to life, limb or health, or harassment with a view to coercing her to meet any unlawful demand for property.",
    punishment: "Imprisonment up to 3 years and fine",
    link: "https://indiankanoon.org/doc/538436/"
  },
  {
    id: "dowry-3",
    categoryId: "dowry",
    section: "Section 3 of Dowry Prohibition Act, 1961",
    title: "Giving or Taking Dowry",
    description: "If any person gives, takes, or abets the giving or taking of dowry, they shall be punishable under this law.",
    punishment: "Imprisonment of not less than 5 years and fine not less than ₹15,000 or the amount of dowry, whichever is more",
    link: "https://legislative.gov.in/sites/default/files/A1961-28.pdf"
  },
  {
    id: "violence-1",
    categoryId: "violence",
    section: "Section 302 IPC",
    title: "Murder",
    description: "Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine.",
    punishment: "Death or imprisonment for life, and fine",
    link: "https://indiankanoon.org/doc/1560742/"
  },
  {
    id: "violence-2",
    categoryId: "violence",
    section: "Section 307 IPC",
    title: "Attempt to Murder",
    description: "Attempt to murder. Whoever does any act with such intention or knowledge, and under such circumstances that, if by that act they caused death, they would be guilty of murder.",
    punishment: "Imprisonment up to 10 years and fine",
    link: "https://indiankanoon.org/doc/455468/"
  },
  {
    id: "violence-3",
    categoryId: "violence",
    section: "Section 323 IPC",
    title: "Punishment for Voluntarily Causing Hurt",
    description: "Whoever voluntarily causes hurt shall be punished.",
    punishment: "Imprisonment up to 1 year, or fine up to ₹1,000, or both",
    link: "https://indiankanoon.org/doc/51021/"
  },
  {
    id: "violence-4",
    categoryId: "violence",
    section: "Section 326 IPC",
    title: "Voluntarily Causing Grievous Hurt by Dangerous Weapons",
    description: "Voluntarily causing grievous hurt by means of any instrument, which, used as a weapon of offence, is likely to cause death.",
    punishment: "Imprisonment up to 10 years and fine",
    link: "https://indiankanoon.org/doc/1934414/"
  },
  {
    id: "sexual-1",
    categoryId: "sexual",
    section: "Section 375 & 376 IPC",
    title: "Rape",
    description: "A man is said to commit rape if he has sexual intercourse with a woman without her consent, or if she is a minor. After the 2013 amendment, penetration to any extent constitutes rape.",
    punishment: "Rigorous imprisonment not less than 10 years, which may extend to life imprisonment, and fine",
    link: "https://indiankanoon.org/doc/1279834/"
  },
  {
    id: "sexual-2",
    categoryId: "sexual",
    section: "Section 354 IPC",
    title: "Assault or Criminal Force to Woman with Intent to Outrage her Modesty",
    description: "Whoever assaults or uses criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty.",
    punishment: "Imprisonment not less than 1 year, which may extend to 5 years, and fine",
    link: "https://indiankanoon.org/doc/203036/"
  },
  {
    id: "property-1",
    categoryId: "property",
    section: "Section 378 & 379 IPC",
    title: "Theft",
    description: "Whoever, intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property in order to such taking, is said to commit theft.",
    punishment: "Imprisonment up to 3 years, or fine, or both",
    link: "https://indiankanoon.org/doc/1331755/"
  },
  {
    id: "property-2",
    categoryId: "property",
    section: "Section 390 & 392 IPC",
    title: "Robbery",
    description: "Theft is robbery if, in order to commit theft, or in committing the theft, or in carrying away or attempting to carry away property obtained by theft, the offender voluntarily causes or attempts to cause death, hurt, wrongful restraint, or fear of instant death, hurt or wrongful restraint.",
    punishment: "Rigorous imprisonment up to 10 years and fine",
    link: "https://indiankanoon.org/doc/1219151/"
  },
  {
    id: "property-3",
    categoryId: "property",
    section: "Section 395 IPC",
    title: "Dacoity",
    description: "When five or more persons conjointly commit or attempt to commit a robbery, or where the whole number of persons conjointly committing or attempting to commit a robbery, and persons present and aiding such commission or attempt, amount to five or more, every person so committing, attempting or aiding, is said to commit dacoity.",
    punishment: "Rigorous imprisonment not less than 10 years, which may extend to life imprisonment",
    link: "https://indiankanoon.org/doc/285658/"
  },
  {
    id: "kidnapping-1",
    categoryId: "kidnapping",
    section: "Section 359 & 363 IPC",
    title: "Kidnapping",
    description: "Kidnapping from India or from lawful guardianship. Kidnapping from lawful guardianship refers to taking a minor (under 16 for male, under 18 for female) without the consent of the guardian.",
    punishment: "Imprisonment up to 7 years and fine",
    link: "https://indiankanoon.org/doc/63271/"
  },
  {
    id: "kidnapping-2",
    categoryId: "kidnapping",
    section: "Section 364A IPC",
    title: "Kidnapping for Ransom",
    description: "Kidnapping or abducting a person and holding them for ransom.",
    punishment: "Death or imprisonment for life, and fine",
    link: "https://indiankanoon.org/doc/125209/"
  },
  {
    id: "defamation-1",
    categoryId: "defamation",
    section: "Section 499 & 500 IPC",
    title: "Defamation",
    description: "Whoever, by words either spoken or intended to be read, or by signs or by visible representations, makes or publishes any imputation concerning any person intending to harm, or knowing or having reason to believe that such imputation will harm, the reputation of such person, is said to defame that person.",
    punishment: "Simple imprisonment up to 2 years, or fine, or both",
    link: "https://indiankanoon.org/doc/1041742/"
  },
  {
    id: "other-1",
    categoryId: "other",
    section: "Section 124A IPC",
    title: "Sedition",
    description: "Whoever, by words, either spoken or written, or by signs, or by visible representation, or otherwise, brings or attempts to bring into hatred or contempt, or excites or attempts to excite disaffection towards the Government established by law in India, shall be punished.",
    punishment: "Imprisonment for life and fine, or imprisonment up to 3 years and fine",
    link: "https://indiankanoon.org/doc/1641007/"
  },
  {
    id: "other-2",
    categoryId: "other",
    section: "Section 153A IPC",
    title: "Promoting Enmity Between Groups",
    description: "Promoting enmity between different groups on grounds of religion, race, place of birth, residence, language, etc., and doing acts prejudicial to maintenance of harmony.",
    punishment: "Imprisonment up to 3 years, or fine, or both",
    link: "https://indiankanoon.org/doc/345634/"
  }
];
