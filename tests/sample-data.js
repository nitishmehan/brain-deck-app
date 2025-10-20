const sampleDecks = [
    {
        id: "1687198445000",
        title: "Plant Biology",
        description: "Plant structures and photosynthesis",
        cards: [
            {
                front: "What is photosynthesis?",
                back: "Process where plants convert light energy into chemical energy (glucose). This occurs in chloroplasts using carbon dioxide, water, and sunlight to produce oxygen and glucose.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4Ttg1onV7Fl3593nJuGspUjGEHKopmHe2g&s"
            },
            {
                front: "What are the parts of a flower?",
                back: "Petals, sepals, stamen (male reproductive part), pistil (female reproductive part), and receptacle. The stamen contains anthers and filaments, while the pistil includes the stigma, style, and ovary.",
                imageLink: "https://www.careerpower.in/blog/wp-content/uploads/sites/2/2023/08/11155802/Parts-of-a-Flower.png"
            },
            {
                front: "What is the xylem?",
                back: "Vascular tissue that transports water and dissolved minerals upward from roots to stems and leaves. It consists of dead, hollow cells that form continuous tubes for efficient water transport.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOYDRN2LkhcCqbJE4doNURjmVKBuWvWzRrQ&s"
            },
            {
                front: "What is the phloem?",
                back: "Vascular tissue that transports sugars, amino acids, and other nutrients throughout the plant in both upward and downward directions. It contains living cells called sieve tubes and companion cells.",
                imageLink: "https://cdn.britannica.com/05/5605-050-591AB62E/Cross-section-root-xylem-cylinder-phloem.jpg"
            },
            {
                front: "What are stomata?",
                back: "Tiny pores on leaf surface that control gas exchange (CO₂ in, O₂ out) and water loss through transpiration. Each stoma is surrounded by two guard cells that regulate its opening and closing.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM9Me8S006Zb2iS9SbT3n7YDRirnL_RJL4kA&s"
            },
            {
                front: "What is chlorophyll?",
                back: "Green pigment in chloroplasts that absorbs light energy (primarily red and blue wavelengths) for photosynthesis. It reflects green light, which is why plants appear green to our eyes.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR68RJPZO1j0cZpUTZSLj8wyyF0DN7VHGwrg&s"
            },
            {
                front: "Photosynthesis equation",
                back: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Six molecules of carbon dioxide plus six molecules of water, using light energy, produce one molecule of glucose and six molecules of oxygen.",
                imageLink: ""
            }
        ]
    },
    {
        id: "1687458645000",
        title: "Computer Networks",
        description: "Network topology and protocols",
        cards: [
            {
                front: "OSI Model Layers (7 layers)",
                back: "Physical (cables, signals), Data Link (MAC addresses, frames), Network (IP routing), Transport (TCP/UDP, segments), Session (connections), Presentation (encryption, formatting), Application (HTTP, FTP, user interfaces).",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4H74diIjOd9-renZnlaVyJ--YhCeUNHtzAg&s"
            },
            {
                front: "TCP/IP Model Layers",
                back: "Network Access (physical transmission and data link), Internet (IP addressing and routing), Transport (TCP/UDP port communication), Application (combines session, presentation, and application layer functions).",
                imageLink: "https://miro.medium.com/1*Jv7aptjpW_PrTKAB-_eXlA.png"
            },
            {
                front: "Star Topology",
                back: "All nodes connect to a central hub or switch; easy to troubleshoot and add new devices. If one connection fails, others remain unaffected. However, if the central hub fails, the entire network goes down.",
                imageLink: "https://media.geeksforgeeks.org/wp-content/uploads/20241021160035921565/Star-Topology-768.png"
            },
            {
                front: "Bus Topology",
                back: "All devices connected to a single backbone cable; cheap and easy to install but has limited cable length. Single point of failure means entire network fails if the main cable breaks. Performance degrades as more devices are added.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaFfLCUyghkiuJ9-HZ3yMYWBOLeqr1Nc4Cg&s"
            },
            {
                front: "Ring Topology",
                back: "Devices connected in a circular chain; data travels in one direction through each node. Each device acts as a repeater to boost the signal. Failure of one device can disrupt the entire network unless using dual ring topology.",
                imageLink: "https://itrelease.com/wp-content/uploads/2019/06/Ring-topology-diagram.jpg"
            },
            {
                front: "IPv4 Address Format",
                back: "Four octets separated by dots (e.g., 192.168.1.1), each octet ranges from 0-255. It's a 32-bit address allowing approximately 4.3 billion unique addresses. Divided into network and host portions using subnet masks.",
                imageLink: "https://hw-images.hostwinds.com/strapi-images/ipv4_address_format_01_17ec1ede2f.webp"
            },
            {
                front: "Subnet Mask Purpose",
                back: "Divides IP address into network and host portions, determining which part identifies the network and which identifies the specific device. Common masks include 255.255.255.0 (/24) for Class C networks.",
                imageLink: ""
            },
            {
                front: "TCP vs UDP",
                back: "TCP: connection-oriented, reliable delivery with error checking, flow control, and guaranteed order. Slower but ensures data integrity. UDP: connectionless, faster, no guarantees, suitable for streaming and gaming where speed matters more than reliability.",
                imageLink: "https://ipcisco.com/wp-content/uploads/2018/10/tcp-vs-udp-comparison-ipcisco.com_-600x600.png"
            },
            {
                front: "DNS Function",
                back: "Domain Name System translates human-readable domain names (like google.com) to IP addresses (like 142.250.185.46) that computers use to identify each other on the network. Works as the internet's phone book.",
                imageLink: ""
            }
        ]
    },
    {
        id: "1687285845000",
        title: "Geometry & Trigonometry",
        description: "Shapes, angles, and geometric formulas",
        cards: [
            {
                front: "Area of a circle",
                back: "A = πr², where r is the radius. This formula calculates the space contained within a circle. The constant π (pi) is approximately 3.14159.",
                imageLink: ""
            },
            {
                front: "Pythagorean Theorem",
                back: "a² + b² = c² (for right triangles). This theorem relates the lengths of the sides of a right triangle: the sum of the squares of the lengths of the two legs equals the square of the length of the hypotenuse.",
                imageLink: ""
            },
            {
                front: "Sum of angles in a triangle",
                back: "180 degrees. The three interior angles of a triangle always add up to 180 degrees, regardless of the type or size of the triangle.",
                imageLink: ""
            },
            {
                front: "Area of a triangle",
                back: "A = ½ × base × height. This formula calculates the area of a triangle by multiplying the length of its base by its height and then dividing by two.",
                imageLink: ""
            },
            {
                front: "Volume of a sphere",
                back: "V = (4/3)πr³, where r is the radius. This formula calculates the amount of space inside a sphere. The constant π (pi) is approximately 3.14159.",
                imageLink: ""
            },
            {
                front: "Sin, Cos, Tan (SOH CAH TOA)",
                back: "Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. These are the primary trigonometric ratios, relating the angles and sides of right triangles.",
                imageLink: ""
            },
            {
                front: "Surface area of a cube",
                back: "SA = 6a² (where a is side length). This formula calculates the total area of all six faces of a cube. Since a cube has six equal square faces, it's six times the area of one face.",
                imageLink: ""
            },
            {
                front: "Properties of a parallelogram",
                back: "Opposite sides parallel and equal, opposite angles equal. The diagonals bisect each other but are not necessarily equal in length. Includes rectangles, rhombuses, and squares as special cases.",
                imageLink: ""
            }
        ]
    },
    {
        id: "1687025645000",
        title: "Human Anatomy",
        description: "Major organs and body systems",
        cards: [
            {
                front: "What is the largest organ in the human body?",
                back: "The skin - it covers about 20 square feet. The skin is the body's outer covering and serves as a protective barrier. It also helps regulate temperature and enables the sense of touch.",
                imageLink: "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/10978-skin"
            },
            {
                front: "How many chambers does the heart have?",
                back: "Four chambers: two atria and two ventricles. The right atrium and ventricle pump deoxygenated blood to the lungs, while the left atrium and ventricle pump oxygenated blood to the rest of the body.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1K_K0hmrJjq6QUwgJJjdkoeGf3XDoS4Afzw&s"
            },
            {
                front: "What is the function of the cerebellum?",
                back: "Controls balance, coordination, and fine motor control. It ensures smooth and coordinated movements by regulating the muscle tone and adjusting the body's position.",
                imageLink: "https://www.simplypsychology.org/wp-content/uploads/Cerebellum-2.jpeg"
            },
            {
                front: "Name the bones in the human skull",
                back: "22 bones total: 8 cranial bones and 14 facial bones. The cranial bones protect the brain, while the facial bones form the structure of the face and support the teeth.",
                imageLink: ""
            },
            {
                front: "What are the main parts of the digestive system?",
                back: "Mouth, esophagus, stomach, small intestine, large intestine, rectum. The digestive system breaks down food, absorbs nutrients, and eliminates waste. Accessory organs include the liver, pancreas, and gallbladder.",
                imageLink: "https://www.wikihow.com/images/f/ff/Draw-a-Model-of-the-Digestive-System-Step-15-Version-2.jpg"
            },
            {
                front: "How many bones are in the human body?",
                back: "206 bones in an adult human. The human skeleton is made up of 206 bones that provide structure, protect organs, and allow movement. Infants are born with approximately 270 bones, but some fuse together during growth.",
                imageLink: ""
            },
            {
                front: "What is the function of alveoli?",
                back: "Tiny air sacs in lungs where gas exchange occurs. Alveoli provide a large surface area for oxygen and carbon dioxide to diffuse between the air and blood. They are essential for respiration and are surrounded by capillaries.",
                imageLink: ""
            }
        ]
    },
    {
        id: "1687372245000",
        title: "Electrical Circuits",
        description: "Circuit components and laws",
        cards: [
            {
                front: "Series Circuit Characteristics",
                back: "Same current through all components, voltage divides across components. If one component fails, the entire circuit is broken. Commonly used in string lights and old Christmas lights.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DYDfpQI5dc1XE2R1yDYvXEu7QtZmNg2wHQ&s"
            },
            {
                front: "Parallel Circuit Characteristics",
                back: "Same voltage across all components, current divides among branches. If one component fails, the others continue to operate. Used in home wiring and most electronic devices.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDalusfqN-HI4TK9mHmGSlxaXPRsHVMfIaA&s"
            },
            {
                front: "Kirchhoff's Current Law (KCL)",
                back: "Sum of currents entering a node equals sum of currents leaving. This law is based on the principle of conservation of electric charge.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwbghipNdBbACU0BByDMVTrXT9slh58z-Qw&s"
            },
            {
                front: "Kirchhoff's Voltage Law (KVL)",
                back: "Sum of voltages around any closed loop equals zero. This law is based on the principle of conservation of energy.",
                imageLink: "https://i.ytimg.com/vi/6F_rmZ1nXFQ/maxresdefault.jpg"
            },
            {
                front: "Resistors in Series Formula",
                back: "R_total = R₁ + R₂ + R₃ + ..., where R is resistance. This formula calculates the total resistance of resistors connected in series. The total resistance is the sum of each resistor's resistance.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU8w-boNJhGG_31UpdIPSrdEXm1uef5knHw&s"
            },
            {
                front: "Resistors in Parallel Formula",
                back: "1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ..., where R is resistance. This formula calculates the total resistance of resistors connected in parallel. The total resistance is less than the smallest individual resistor's resistance.",
                imageLink: "https://www.grc.nasa.gov/www/k-12/airplane/Images/ohmrpar.jpg"
            },
            {
                front: "Capacitor symbol and function",
                back: "Two parallel lines; stores electrical energy in an electric field. Capacitors are used to smooth out fluctuations in electrical signals, store energy for later use, and filter signals.",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxesefnTs8tTZozSfRg8pTPEZYIWHQsVbd9g&s"
            },
            {
                front: "LED circuit requirement",
                back: "Requires a current-limiting resistor to prevent burnout. LEDs are diodes that emit light when current flows through them. The resistor limits the current to a safe level.",
                imageLink: "https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/led-5.gif"
            }
        ]
    },
];

function loadSample() {
    localStorage.setItem('decks', JSON.stringify(sampleDecks));
    alert('Sample decks added to localStorage');
}