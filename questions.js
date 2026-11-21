
/* ==========================================
   STUDYQUEST - MCQ QUESTION DATABASE
   Version 1.1
   Answer index starts from 0
========================================== */

const QUESTIONS = [

  // =====================================
  // HINDI - 10 QUESTIONS
  // =====================================

  {
    id: 1,
    subject: "hindi",
    topic: "संधि",
    question: "'विद्यालय' शब्द में कौन-सी संधि है?",
    options: ["गुण संधि", "दीर्घ संधि", "वृद्धि संधि", "यण संधि"],
    answer: 1,
    explanation: "विद्या + आलय = विद्यालय। यहाँ आ + आ मिलकर आ बनता है। इसलिए यह दीर्घ संधि है।"
  },

  {
    id: 2,
    subject: "hindi",
    topic: "पर्यायवाची शब्द",
    question: "'सूर्य' का पर्यायवाची शब्द कौन-सा है?",
    options: ["निशाकर", "भास्कर", "पंकज", "नीर"],
    answer: 1,
    explanation: "भास्कर सूर्य का पर्यायवाची शब्द है। निशाकर चंद्रमा को कहते हैं।"
  },

  {
    id: 17,
    subject: "hindi",
    topic: "विलोम शब्द",
    question: "'उन्नति' का विलोम शब्द क्या है?",
    options: ["प्रगति", "अवनति", "विकास", "सफलता"],
    answer: 1,
    explanation: "उन्नति का अर्थ प्रगति है और इसका विलोम अवनति है।"
  },

  {
    id: 18,
    subject: "hindi",
    topic: "समास",
    question: "'राजपुत्र' में कौन-सा समास है?",
    options: ["द्वंद्व", "बहुव्रीहि", "तत्पुरुष", "अव्ययीभाव"],
    answer: 2,
    explanation: "राजा का पुत्र = राजपुत्र। यहाँ संबंध कारक का लोप है, इसलिए तत्पुरुष समास है।"
  },

  {
    id: 19,
    subject: "hindi",
    topic: "उपसर्ग एवं प्रत्यय",
    question: "'असफल' शब्द में कौन-सा उपसर्ग है?",
    options: ["अ", "अन", "सु", "प्र"],
    answer: 0,
    explanation: "अ + सफल = असफल। यहाँ 'अ' उपसर्ग है।"
  },

  {
    id: 20,
    subject: "hindi",
    topic: "मुहावरे एवं लोकोक्तियाँ",
    question: "'नाक कटना' मुहावरे का अर्थ क्या है?",
    options: ["घायल होना", "अपमान होना", "बीमार होना", "क्रोधित होना"],
    answer: 1,
    explanation: "नाक कटना का अर्थ अपमान होना या प्रतिष्ठा नष्ट होना है।"
  },

  {
    id: 21,
    subject: "hindi",
    topic: "संज्ञा",
    question: "'ईमानदारी' कौन-सी संज्ञा है?",
    options: ["व्यक्तिवाचक", "जातिवाचक", "भाववाचक", "समूहवाचक"],
    answer: 2,
    explanation: "ईमानदारी एक गुण या भाव है, इसलिए यह भाववाचक संज्ञा है।"
  },

  {
    id: 22,
    subject: "hindi",
    topic: "सर्वनाम",
    question: "'मैं विद्यालय जाता हूँ।' इस वाक्य में सर्वनाम कौन-सा है?",
    options: ["विद्यालय", "जाता", "मैं", "हूँ"],
    answer: 2,
    explanation: "'मैं' शब्द संज्ञा के स्थान पर आया है, इसलिए यह पुरुषवाचक सर्वनाम है।"
  },

  {
    id: 23,
    subject: "hindi",
    topic: "विशेषण",
    question: "'सुंदर फूल खिला है।' इस वाक्य में विशेषण कौन-सा है?",
    options: ["सुंदर", "फूल", "खिला", "है"],
    answer: 0,
    explanation: "'सुंदर' शब्द फूल की विशेषता बता रहा है, इसलिए यह विशेषण है।"
  },

  {
    id: 24,
    subject: "hindi",
    topic: "काल",
    question: "'राम कल दिल्ली जाएगा।' इस वाक्य में कौन-सा काल है?",
    options: ["वर्तमान काल", "भूतकाल", "भविष्यत् काल", "अपूर्ण भूतकाल"],
    answer: 2,
    explanation: "कार्य आने वाले समय में होगा, इसलिए यह भविष्यत् काल है।"
  },


  // =====================================
  // ENGLISH
  // =====================================

  {
    id: 3,
    subject: "english",
    topic: "Verb",
    question: "Identify the verb in this sentence: 'She writes a letter.'",
    options: ["She", "Writes", "A", "Letter"],
    answer: 1,
    explanation: "'Writes' is the verb because it expresses the action performed by the subject."
  },

  {
    id: 4,
    subject: "english",
    topic: "Tenses",
    question: "Choose the correct form: 'He _____ to school every day.'",
    options: ["Go", "Going", "Goes", "Gone"],
    answer: 2,
    explanation: "He is a third-person singular subject. Simple Present Tense में verb के साथ s/es लगता है।"
  },


  // =====================================
  // REASONING
  // =====================================

  {
    id: 5,
    subject: "reasoning",
    topic: "Number Series",
    question: "Find the next number: 2, 4, 8, 16, 32, ?",
    options: ["48", "54", "64", "72"],
    answer: 2,
    explanation: "हर संख्या को 2 से गुणा किया गया है। 32 × 2 = 64।"
  },

  {
    id: 6,
    subject: "reasoning",
    topic: "Blood Relations",
    question: "राम, श्याम का भाई है। श्याम, मोहन का पिता है। राम का मोहन से क्या संबंध है?",
    options: ["पिता", "चाचा", "भाई", "दादा"],
    answer: 1,
    explanation: "राम, मोहन के पिता श्याम का भाई है। इसलिए राम, मोहन का चाचा है।"
  },


  // =====================================
  // MATHEMATICS
  // =====================================

  {
    id: 7,
    subject: "mathematics",
    topic: "Percentage",
    question: "200 का 25% कितना होगा?",
    options: ["25", "40", "50", "75"],
    answer: 2,
    explanation: "25% of 200 = (25 × 200) / 100 = 50।"
  },

  {
    id: 8,
    subject: "mathematics",
    topic: "HCF and LCM",
    question: "12 और 18 का HCF कितना है?",
    options: ["3", "6", "9", "12"],
    answer: 1,
    explanation: "12 और 18 का सबसे बड़ा समान गुणनखंड 6 है।"
  },


  // =====================================
  // GENERAL KNOWLEDGE
  // =====================================

  {
    id: 9,
    subject: "general_knowledge",
    topic: "Indian Constitution",
    question: "भारतीय संविधान कब लागू हुआ था?",
    options: ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1950"],
    answer: 1,
    explanation: "भारतीय संविधान 26 जनवरी 1950 को लागू हुआ था।"
  },

  {
    id: 10,
    subject: "general_knowledge",
    topic: "Indian Polity",
    question: "भारतीय संसद के कितने सदन हैं?",
    options: ["एक", "दो", "तीन", "चार"],
    answer: 1,
    explanation: "भारतीय संसद के दो सदन हैं: लोकसभा और राज्यसभा।"
  },


  // =====================================
  // RAJASTHAN GK
  // =====================================

  {
    id: 11,
    subject: "rajasthan_gk",
    topic: "Rajasthan History",
    question: "राजस्थान दिवस कब मनाया जाता है?",
    options: ["26 जनवरी", "15 अगस्त", "30 मार्च", "1 नवंबर"],
    answer: 2,
    explanation: "30 मार्च 1949 को वृहद राजस्थान का गठन हुआ था।"
  },

  {
    id: 12,
    subject: "rajasthan_gk",
    topic: "Forts and Palaces",
    question: "कुंभलगढ़ दुर्ग का निर्माण किसने करवाया था?",
    options: ["महाराणा प्रताप", "राणा कुंभा", "राणा सांगा", "महाराणा उदयसिंह"],
    answer: 1,
    explanation: "कुंभलगढ़ दुर्ग का निर्माण राणा कुंभा ने करवाया था।"
  },


  // =====================================
  // SCIENCE
  // =====================================

  {
    id: 13,
    subject: "science",
    topic: "Acids Bases and Salts",
    question: "शुद्ध जल का pH मान कितना होता है (25°C पर)?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    explanation: "25°C पर शुद्ध जल का pH मान 7 होता है।"
  },

  {
    id: 14,
    subject: "science",
    topic: "Chemical Reactions",
    question: "लोहे पर जंग लगना किस प्रकार की प्रक्रिया है?",
    options: ["अपचयन", "ऑक्सीकरण", "उदासीनीकरण", "वाष्पीकरण"],
    answer: 1,
    explanation: "लोहे का ऑक्सीजन और नमी के साथ अभिक्रिया करके जंग बनाना ऑक्सीकरण है।"
  },


  // =====================================
  // COMPUTER
  // =====================================

  {
    id: 15,
    subject: "computer",
    topic: "Computer Fundamentals",
    question: "CPU का पूरा नाम क्या है?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"],
    answer: 0,
    explanation: "CPU का पूरा नाम Central Processing Unit है।"
  },

  {
    id: 16,
    subject: "computer",
    topic: "Input and Output Devices",
    question: "इनमें से कौन-सा Input Device है?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: 2,
    explanation: "Keyboard की मदद से कंप्यूटर में डेटा और निर्देश दर्ज किए जाते हैं। इसलिए यह Input Device है।"
  }

];


/* ==========================================
   QUESTION DATABASE READY
========================================== */
