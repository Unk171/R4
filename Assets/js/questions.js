const questions = [
    {
        question: "What is the primary purpose of dental sealants?",
        options: [
            "To whiten teeth",
            "To protect teeth from decay",
            "To fix broken teeth",
            "To strengthen the jaw"
        ],
        correctAnswer: 1
    },
    {
        question: "How many teeth are in a permanent dentition ?",
        options: [
            "20",
            "28",
            "32",
            "36"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of fluoride varnish ?",
        options: [
            "To clean teeth",
            "To prevent cavities and strengthen enamel",
            "To reduce gum inflammation",
            "To remove stains"
        ],
        correctAnswer: 1
    },
    {
        question: "Which instrument is used to remove excess composite material ?",
        options: [
            "Explorer",
            "Scaler",
            "Burnisher",
            "Excavator"
        ],
        correctAnswer: 1
    },
    {
        question: "What are the names of the four types of teeth ?",
        options: [
            "Incisors, canines, premolars, molars",
            "Front teeth, back teeth, molars, wisdom teeth",
            "Enamel, dentin, pulp, cementum",
            "Primary, secondary, tertiary, permanent"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the ALARA principle in radiography ?",
        options: [
            "Use as much radiation as possible for clear images",
            "Use the lowest radiation exposure possible to achieve results",
            "Always leave radiation exposure unmonitored",
            "Only use X - rays in emergencies"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the function of dental enamel ?",
        options: [
            "To connect teeth to the gums",
            "To protect the inner layers of the tooth",
            "To create the tooth's nerve system",
            "To prevent discoloration"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a matrix band used for in dentistry ?",
        options: [
            "To isolate the tooth during whitening",
            "To form the shape of a restoration",
            "To remove calculus",
            "To take an impression"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the first step in placing a composite filling ?",
        options: [
            "Acid etching",
            "Placing the composite",
            "Cleaning and drying the cavity",
            "Applying the curing light"
        ],
        correctAnswer: 2
    },
    {
        question: "What is plaque primarily composed of ?",
        options: [
            "Minerals from saliva",
            "Hardened enamel",
            "Bacteria and food debris",
            "Fluoride"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the function of the pulp in a tooth ?",
        options: [
            "To cover the tooth surface",
            "To supply nutrients and nerve signals to the tooth",
            "To hold the tooth in place",
            "To prevent bacterial infection"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the main purpose of acid etching in restorative dentistry ?",
        options: [
            "To remove decay",
            "To prepare the tooth surface for bonding",
            "To polish the enamel",
            "To disinfect the cavity"
        ],
        correctAnswer: 1
    },
    {
        question: "What does HIPAA protect in a dental office ?",
        options: [
            "Dental records from being lost",
            "Office safety procedures",
            "Proper use of dental materials",
            "Patient privacy and confidentiality"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the proper sequence for sterilizing instruments ?",
        options: [
            "Wash, sterilize, rinse",
            "Rinse, autoclave, dry",
            "Clean, package, autoclave",
            "Soak, dry, store"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the term for inflammation of the gums ?",
        options: [
            "Periodontitis",
            "Gingivitis",
            "Cavities",
            "Plaque"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a curing light used for?",
        options: [
            "To harden dental materials like composite resin",
            "To sterilize instruments",
            "To examine teeth for decay",
            "To whiten teeth"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the role of a dental dam ?",
        options: [
            "To clean the oral cavity",
            "To hold instruments in place",
            "To apply fluoride",
            "To isolate teeth during treatment"
        ],
        correctAnswer: 3
    },
    {
        question: "Which type of filling is made from silver and mercury ?",
        options: [
            "Composite",
            "Glass ionomer",
            "Porcelain",
            "Amalgam"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of a dental explorer ?",
        options: [
            "To measure pocket depth",
            "To clean teeth surfaces",
            "To polish restorations",
            "To detect cavities and irregularities on teeth"
        ],
        correctAnswer: 3
    },
    {
        question: "How many roots does a mandibular molar typically have ?",
        options: [
            "One",
            "Three",
            "Four",
            "Two"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the most common cause of dental caries ?",
        options: [
            "Genetic factors",
            "Acid from bacterial plaque",
            "Eating hard foods",
            "Lack of saliva"
        ],
        correctAnswer: 1
    },
    {
        question: "What are the four basic tissues of a tooth ?",
        options: [
            "Enamel, dentin, cementum, pulp",
            "Bone, ligament, enamel, nerve",
            "Gum, bone, pulp, crown",
            "Crown, root, enamel, dentin"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of temporary restorations ?",
        options: [
            "To test the patient's bite",
            "To protect the tooth until a permanent restoration is placed",
            "To whiten the tooth",
            "To seal the tooth permanently"
        ],
        correctAnswer: 1
    },
    {
        question: "Which type of radiograph shows the full tooth and surrounding bone ?",
        options: [
            "Bitewing",
            "Panoramic",
            "Periapical",
            "Cephalometric"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the main function of a scaler ?",
        options: [
            "To clean teeth of plaque and tartar",
            "To smooth restorations",
            "To measure gum pockets",
            "To apply sealants"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the most common cause of dental caries?",
        options: [
            "Genetic factors",
            "Acid from bacterial plaque",
            "Eating hard foods",
            "Lack of saliva"
        ],
        correctAnswer: 1
    },
    {
        question: "What are the four basic tissues of a tooth?",
        options: [
            "Enamel, dentin, cementum, pulp",
            "Bone, ligament, enamel, nerve",
            "Gum, bone, pulp, crown",
            "Crown, root, enamel, dentin"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of temporary restorations?",
        options: [
            "To test the patient's bite",
            "To protect the tooth until a permanent restoration is placed",
            "To whiten the tooth",
            "To seal the tooth permanently"
        ],
        correctAnswer: 1
    },
    {
        question: "Which type of radiograph shows the full tooth and surrounding bone?",
        options: [
            "Bitewing",
            "Panoramic",
            "Periapical",
            "Cephalometric"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the main function of a scaler?",
        options: [
            "To clean teeth of plaque and tartar",
            "To smooth restorations",
            "To measure gum pockets",
            "To apply sealants"
        ],
        correctAnswer: 0
    },
    {
        question: "Which teeth are typically the first to erupt in children?",
        options: [
            "Molars",
            "Incisors",
            "Canines",
            "Premolars"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the name of the area where two teeth touch?",
        options: [
            "Occlusal surface",
            "Proximal contact",
            "Marginal ridge",
            "Incisal edge"
        ],
        correctAnswer: 1
    },
    {
        question: "What should be done before placing a dental composite?",
        options: [
            "Polish the tooth",
            "Etch and bond the tooth surface",
            "Apply a sealant",
            "Take an X-ray"
        ],
        correctAnswer: 1
    },
    {
        question: "Which type of PPE is most important during procedures that create aerosols?",
        options: [
            "Safety glasses",
            "Gloves",
            "Masks and face shields",
            "Gowns"
        ],
        correctAnswer: 2
    },
    {
        question: "What does a panoramic X-ray show?",
        options: [
            "A close-up view of a specific tooth",
            "The full set of teeth and surrounding structures",
            "The bone density of the jaw",
            "The alignment of the front teeth"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of a bitewing X-ray?",
        options: [
            "To show the entire tooth structure",
            "To check for decay between teeth",
            "To examine the sinuses",
            "To measure bone density"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a sign of periodontal disease?",
        options: [
            "Tooth whitening",
            "Bleeding gums",
            "Discolored enamel",
            "Pain when chewing"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of polishing teeth?",
        options: [
            "To strengthen enamel",
            "To remove stains and plaque",
            "To cure cavities",
            "To protect gums"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the lifespan of dental amalgam restorations?",
        options: [
            "1–5 years",
            "5–10 years",
            "10–15 years",
            "15–20 years"
        ],
        correctAnswer: 2
    },
    {
        question: "Which instrument is used to shape composite material?",
        options: [
            "Burnisher",
            "Amalgam carrier",
            "Composite placement instrument",
            "Scaler"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the main function of cementum?",
        options: [
            "To protect the tooth from decay",
            "To anchor the tooth to the periodontal ligament",
            "To create tooth enamel",
            "To supply blood to the tooth"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary cause of tooth sensitivity?",
        options: [
            "Inflamed gums",
            "Exposed dentin",
            "Poor oral hygiene",
            "Cavities"
        ],
        correctAnswer: 1
    },
    {
        question: "Which material is commonly used for dental sealants?",
        options: [
            "Amalgam",
            "Resin",
            "Porcelain",
            "Glass ionomer"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the dental term for 'dry socket'?",
        options: [
            "Pulpitis",
            "Alveolitis",
            "Pericoronitis",
            "Osteitis"
        ],
        correctAnswer: 1
    },
    {
        question: "What is used to adjust the occlusion after a restoration?",
        options: [
            "Polishing strip",
            "High-speed handpiece",
            "Articulating paper",
            "Burnisher"
        ],
        correctAnswer: 2
    },
    {
        question: "What are premolars also called?",
        options: [
            "Bicuspids",
            "Molars",
            "Incisors",
            "Wisdom teeth"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the main ingredient in alginate?",
        options: [
            "Resin",
            "Silica",
            "Calcium sulfate",
            "Potassium alginate"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the minimum sterilization temperature in an autoclave?",
        options: [
            "100°C (212°F)",
            "121°C (250°F)",
            "140°C (284°F)",
            "160°C (320°F)"
        ],
        correctAnswer: 1
    },
    {
        question: "Which material is best for a temporary crown?",
        options: [
            "Composite resin",
            "Stainless steel",
            "Acrylic",
            "Amalgam"
        ],
        correctAnswer: 2
    },
    {
        question: "What is a common complication of untreated bruxism?",
        options: [
            "Tooth discoloration",
            "Jaw pain and enamel wear",
            "Increased plaque buildup",
            "Periodontal disease"
        ],
        correctAnswer: 1
    },
    {
        question: "What does the periodontal ligament connect?",
        options: [
            "Teeth to the gums",
            "Enamel to dentin",
            "Cementum to bone",
            "Pulp to the nerve"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the first step in preventing cross-contamination?",
        options: [
            "Cleaning instruments",
            "Wearing gloves",
            "Washing hands",
            "Using barriers"
        ],
        correctAnswer: 2
    },
    {
        question: "What is a common symptom of a failed filling?",
        options: [
            "Tooth sensitivity to cold",
            "Staining of enamel",
            "Pain in the gums",
            "Loose teeth"
        ],
        correctAnswer: 0
    },
    {
        question: "Which instrument is used to check pocket depth?",
        options: [
            "Scaler",
            "Probe",
            "Explorer",
            "Excavator"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the primary function of saliva?",
        options: [
            "To protect teeth from decay and aid digestion",
            "To harden enamel",
            "To eliminate bacteria",
            "To strengthen the gums"
        ],
        correctAnswer: 0
    }
]