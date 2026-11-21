
/* ==========================================
   STUDYQUEST - EXAM & SUBJECT DATABASE
   Version 1.0
========================================== */

const STUDY_DATA = {

  // ALL EXAMS
  exams: [

    {
      id: "cet12",
      name: "CET 12th Level",
      subtitle: "Senior Secondary Level",
      icon: "📚",
      category: "Rajasthan",
      subjects: [
        "hindi",
        "english",
        "reasoning",
        "mathematics",
        "general_knowledge",
        "science",
        "rajasthan_gk",
        "computer"
      ]
    },

    {
      id: "cetgraduate",
      name: "CET Graduation Level",
      subtitle: "Graduate Level",
      icon: "🎓",
      category: "Rajasthan",
      subjects: [
        "hindi",
        "english",
        "reasoning",
        "mathematics",
        "general_knowledge",
        "rajasthan_gk",
        "computer"
      ]
    },

    {
      id: "patwari",
      name: "Rajasthan Patwari",
      subtitle: "Patwari Recruitment",
      icon: "📋",
      category: "Rajasthan",
      subjects: [
        "hindi",
        "english",
        "reasoning",
        "mathematics",
        "general_knowledge",
        "rajasthan_gk",
        "computer"
      ]
    },

    {
      id: "ldc",
      name: "Rajasthan LDC",
      subtitle: "Lower Division Clerk",
      icon: "💻",
      category: "Rajasthan",
      subjects: [
        "hindi",
        "english",
        "reasoning",
        "mathematics",
        "general_knowledge",
        "computer"
      ]
    },

    {
      id: "police",
      name: "Rajasthan Police",
      subtitle: "Police Constable Exam",
      icon: "👮",
      category: "Rajasthan",
      subjects: [
        "reasoning",
        "mathematics",
        "general_knowledge",
        "rajasthan_gk",
        "science",
        "computer"
      ]
    }

  ],


  // SUBJECT DATABASE
  subjects: {

    hindi: {
      name: "Hindi",
      icon: "🟢",
      color: "#36d6a0",
      topics: [

        "संधि",
        "समास",
        "उपसर्ग एवं प्रत्यय",
        "पर्यायवाची शब्द",
        "विलोम शब्द",
        "अनेक शब्दों के लिए एक शब्द",
        "मुहावरे एवं लोकोक्तियाँ",
        "संज्ञा",
        "सर्वनाम",
        "विशेषण",
        "क्रिया",
        "काल",
        "वाच्य",
        "वाक्य शुद्धि",
        "शब्द शुद्धि",
        "अलंकार",
        "रस",
        "छंद"
      ]
    },


    english: {
      name: "English",
      icon: "🔵",
      color: "#36b9f5",
      topics: [

        "Noun",
        "Pronoun",
        "Verb",
        "Adjective",
        "Adverb",
        "Preposition",
        "Conjunction",
        "Articles",
        "Tenses",
        "Active and Passive Voice",
        "Direct and Indirect Speech",
        "Subject Verb Agreement",
        "Synonyms",
        "Antonyms",
        "One Word Substitution",
        "Idioms and Phrases",
        "Sentence Correction",
        "Error Detection",
        "Fill in the Blanks"
      ]
    },


    reasoning: {
      name: "Reasoning",
      icon: "🧠",
      color: "#a18cff",
      topics: [

        "Number Series",
        "Alphabet Series",
        "Coding Decoding",
        "Blood Relations",
        "Direction Test",
        "Ranking and Order",
        "Analogy",
        "Classification",
        "Syllogism",
        "Calendar",
        "Clock",
        "Venn Diagram",
        "Missing Number",
        "Mathematical Operations",
        "Mirror Image",
        "Water Image",
        "Non Verbal Reasoning"
      ]
    },


    mathematics: {
      name: "Mathematics",
      icon: "🟡",
      color: "#ffcc66",
      topics: [

        "Number System",
        "Simplification",
        "HCF and LCM",
        "Percentage",
        "Profit and Loss",
        "Simple Interest",
        "Compound Interest",
        "Ratio and Proportion",
        "Average",
        "Time and Work",
        "Time Speed and Distance",
        "Mensuration",
        "Algebra",
        "Geometry",
        "Data Interpretation"
      ]
    },


    general_knowledge: {
      name: "General Knowledge",
      icon: "🌍",
      color: "#b18aff",
      topics: [

        "Indian History",
        "Indian Geography",
        "Indian Polity",
        "Indian Constitution",
        "Indian Economy",
        "World Geography",
        "World History",
        "Important Days",
        "Books and Authors",
        "Awards and Honours",
        "Sports",
        "General Science",
        "Current Affairs"
      ]
    },


    rajasthan_gk: {
      name: "Rajasthan GK",
      icon: "🏰",
      color: "#ff9b69",
      topics: [

        "Rajasthan History",
        "Rajasthan Geography",
        "Rajasthan Art and Culture",
        "Folk Dance",
        "Folk Music",
        "Fairs and Festivals",
        "Forts and Palaces",
        "Rajasthan Rivers",
        "Rajasthan Lakes",
        "Rajasthan Wildlife",
        "Rajasthan Polity",
        "Rajasthan Economy",
        "Districts of Rajasthan",
        "Famous Personalities"
      ]
    },


    science: {
      name: "Science",
      icon: "🔬",
      color: "#ff8b73",
      topics: [

        "Physics",
        "Chemistry",
        "Biology",
        "Human Body",
        "Nutrition",
        "Diseases",
        "Force and Motion",
        "Light",
        "Sound",
        "Electricity",
        "Acids Bases and Salts",
        "Chemical Reactions",
        "Metals and Non Metals",
        "Environment"
      ]
    },


    computer: {
      name: "Computer",
      icon: "💻",
      color: "#5cc9d9",
      topics: [

        "Computer Fundamentals",
        "Input and Output Devices",
        "Memory",
        "Operating System",
        "MS Word",
        "MS Excel",
        "MS PowerPoint",
        "Internet",
        "Networking",
        "Cyber Security",
        "Computer Abbreviations"
      ]
    }

  }

};


/* DATABASE READY */
