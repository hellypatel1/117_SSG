const express = require('express');
const path = require('path');
const fs = require('fs');
const marked = require('marked');

const app = express();

const navigationLinks = [
    { text: "Home", url: "/" },
    { text: "GIT", url: "/git" },
    { text: "Linux", url: "/linux" },
    { text: "Pre-Internet", url: "/pre-internet" },
    { text: "Internet Development", url: "/internet-development" },
    { text: "Web 1.0", url: "/web-1-0" },
    { text: "Web 2.0", url: "/web-2-0" }
];

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set up the public directory for static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'The History of the Internet',
        heroTitle: 'Unlock the Past, Embrace the Future',
        heroSubtitle: 'Your journey to understanding the internet\'s history and mastering essential tech tools starts here.',
        testimonials: [
            {
                name: 'Alex',
                role: 'Computer Science Student',
                quote: 'This guide is a lifesaver for anyone diving into tech. The step-by-step Linux tutorials helped me get started with confidence!',
                image: 'jessica.png'
            },
            {
                name: 'Maria',
                role: 'Software Engineering Major',
                quote: 'The concise breakdown of Git fundamentals made version control easy to grasp. Highly recommend it to all students.',
                image: 'oliviia.png'
            },
            {
                name: 'Jordan',
                role: 'IT Enthusiast',
                quote: 'I finally understand the differences between Web 1.0 and 2.0 thanks to this site. A must-read for tech newbies!',
                image: 'evan.png'
            },

            {
                name: 'Jordan',
                role: 'IT Enthusiast',
                quote: 'I finally understand the differences between Web 1.0 and 2.0 thanks to this site. A must-read for tech newbies!',
                image: 'evan.png'
            },
            {
                name: 'Jordan',
                role: 'IT Enthusiast',
                quote: 'I finally understand the differences between Web 1.0 and 2.0 thanks to this site. A must-read for tech newbies!',
                image: 'evan.png'
            },
            {
                name: 'Jordan',
                role: 'IT Enthusiast',
                quote: 'I finally understand the differences between Web 1.0 and 2.0 thanks to this site. A must-read for tech newbies!',
                image: 'evan.png'
            },
            {
                name: 'Jordan',
                role: 'IT Enthusiast',
                quote: 'I finally understand the differences between Web 1.0 and 2.0 thanks to this site. A must-read for tech newbies!',
                image: 'evan.png'
            },
            {
                name: 'Jordan',
                role: 'IT Enthusiast',
                quote: 'I finally understand the differences between Web 1.0 and 2.0 thanks to this site. A must-read for tech newbies!',
                image: 'evan.png'
            }
        ]
    });
});

app.get('/git', (req, res) => {
    res.render('git', {
        title: 'GIT: A Version Control System',
        pageHeader: 'GIT: A Version Control System',
        tagline: 'Master the essential tool for version control and collaboration in modern software development.',
        navigationLinks,
    });
});

app.get("/linux", (req, res) => {
    res.render("linux", {
      title: "Linux: The Open Source OS",
      pageHeader: "Linux: The Open Source OS",
      tagline: "Explore the operating system that powers the modern world.",
      navigationLinks,
    });
});

app.get('/pre-internet', (req, res) => {
    res.render('pre_internet', {
        title: "Pre-Internet: Foundations of Networked Computing",
        pageHeader: "Pre-Internet: Foundations of Networked Computing",
        tagline: "Explore the origins of the internet and the visionaries who shaped its foundation.",
        introText: "The internet's foundation lies in the visions and efforts of early computer scientists, driven by geopolitical factors, academic ambitions, and government initiatives. Pioneers like J.C.R. Licklider, Paul Baran, and organizations such as ARPA (Advanced Research Projects Agency) played instrumental roles in establishing the theoretical frameworks and technologies that would eventually lead to the internet. This pre-internet era was a period of intense intellectual exploration, where the concepts of packet-switching, decentralized networking, and human-computer interaction were first introduced.",
        lickliderText1: "J.C.R. Licklider, a psychologist and computer scientist, is often regarded as one of the founding thinkers behind the internet. In the early 1960s, while working at ARPA (the agency responsible for technological research during the Cold War), Licklider proposed the revolutionary idea of an \"Intergalactic Computer Network.\" His vision was centered around the idea that computers could be connected globally to enable seamless communication and collaboration between people, regardless of their physical location.",
        lickliderText2: "What set Licklider apart was his focus on human-computer interaction (HCI), which was groundbreaking at the time. He believed that computers could not only process data but also augment human intelligence by providing access to vast amounts of information. His ideas inspired generations of computer scientists to explore networking technologies that could facilitate such communication, laying the philosophical groundwork for future advancements like ARPANET and, eventually, the internet.",
        coldWarText1: "The Cold War era (1947–1991) was a time of significant technological advancement, largely driven by the geopolitical tension between the United States and the Soviet Union. As both nations raced to develop nuclear arsenals, the U.S. military realized that traditional communication systems were vulnerable in the event of a nuclear attack.",
        coldWarText2: "This pressure to develop resilient communication networks led to the exploration of decentralized networking, where information could travel via multiple routes. The concept of packet-switching, developed independently by Paul Baran in the U.S. and Donald Davies in the U.K., emerged as a solution. These principles laid the foundation for the development of ARPANET, the precursor to the modern internet.",
        arpaText: "In response to the Soviet Union’s launch of Sputnik in 1957, the U.S. government established ARPA in 1958. ARPA’s foresight in funding research into decentralized networking was crucial to ARPANET’s success. By connecting universities and research institutions, ARPANET became a tool for collaboration in the scientific community.",
        navigationLinks,
    });
});

app.get('/internet-development', (req, res) => {
    res.render('internet_development', {
        title: 'The Development of the Internet: From ARPANET to TCP/IP',
        pageHeader: 'The Development of the Internet: From ARPANET to TCP/IP',
        tagline: 'Explore how foundational technologies like ARPANET and TCP/IP revolutionized communication and created the internet.',
        navigationLinks,
    });
});

app.get('/web-1-0', (req, res) => {
    res.render('web_1_0', {
        title: 'Web 1.0: The Static Web',
        pageHeader: 'Web 1.0: The Static Web',
        tagline: 'Discover the origins of the web and its static beginnings.',
        navigationLinks,
    });
});

app.get('/web-2-0', (req, res) => {
    res.render('web_2_0', {
        title: 'Web 2.0: The Dynamic and Social Web',
        pageHeader: 'Web 2.0: The Dynamic and Social Web',
        tagline: 'Explore the era of dynamic, user-generated content and social connectivity.',
        navigationLinks,
    });
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
