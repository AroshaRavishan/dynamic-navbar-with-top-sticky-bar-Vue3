<!-- MobileDrawer.vue -->
<script setup>
import { ref, inject } from 'vue';

import AboutDrawer from './MobileNavbarComponents/AboutDrawer.vue';
import CareerPathDrawer from './MobileNavbarComponents/CareerPathDrawer.vue';
import CoursesDrawer from './MobileNavbarComponents/CoursesDrawer.vue';
import CertificatesDrawer from './MobileNavbarComponents/CertificatesDrawer.vue';
import MainTopicsDrawer from './MobileNavbarComponents/MainTopicsDrawer.vue';

const isDrawerOpen = inject('isDrawerOpen');
const toggleDrawer = inject('toggleDrawer');
const showCategories = ref(false);
const currentSubMenu = ref(null);
const currentSubSubMenu = ref(null);
const activeCategory = ref(null);
const activeTab = ref(null);

const openSubMenu = (category) => {
    currentSubMenu.value = category;
};
const closeSubMenu = () => {
    currentSubMenu.value = null;
    showCategories.value = true;
};
const openSubSubMenu = (subcategory) => {
    currentSubSubMenu.value = subcategory;
};
const closeSubSubMenu = () => {
    currentSubSubMenu.value = null;
};

const closeDrawer = () => {
    if (toggleDrawer) {
        toggleDrawer();
    }
    showCategories.value = false;
    currentSubMenu.value = null;
    currentSubSubMenu.value = null;
    activeDrawer.value = null; // Add this line to reset activeDrawer
};

// Base Drawer script

const props = defineProps({
    isOpen: Boolean,
    name: String,
});

const emit = defineEmits(['close', 'backMenu']);

const close = () => {
    emit('close');
};

const activeDrawer = ref(null);

const openDrawer = (drawerId) => {
    activeDrawer.value = drawerId;
};

// close options menu
const OptioncloseDrawer = () => {
    activeDrawer.value = null;
    closeDrawer(); // Call closeDrawer here to close the main drawer as well
};

// back to main menu from options

const backMenu = () => {
    activeDrawer.value = null;
}

const mainOptions = [
    {
        id: 'AwardingBodies',
        name: 'Awarding Bodies',
        // image: usePage().props.assetURL ? usePage().props.assetURL + '/web-assets/WebRevamp/awarding.svg' : '../../web-assets/WebRevamp/awarding.svg'
    },
    {
        id: 'GetCertified',
        name: 'Get Certified',
        // image: usePage().props.assetURL ? usePage().props.assetURL + '/web-assets/WebRevamp/certified.svg' : '../../web-assets/WebRevamp/certified.svg'
    },
    {
        id: 'LiveOnlineCourses',
        name: 'Live Online Courses',
        // image: usePage().props.assetURL ? usePage().props.assetURL + '/web-assets/WebRevamp/online.svg' : '../../web-assets/WebRevamp/online.svg'
    },
    {
        id: 'FindYourCareerPath',
        name: 'Find Your Career Path',
        // image: usePage().props.assetURL ? usePage().props.assetURL + '/web-assets/WebRevamp/path.svg' : '../../web-assets/WebRevamp/path.svg'
    },
    {
        id: 'FreeResources',
        name: 'Free Resources',
        // image: usePage().props.assetURL ? usePage().props.assetURL + '/web-assets/WebRevamp/resources.svg' : '../../web-assets/WebRevamp/resources.svg'
    }
];

const categories = ref([
    {
        name: 'Software Development',
        image: 'https://cdn-icons-png.flaticon.com/128/6010/6010054.png',
        description: 'Explore a variety of courses that delve into the world of software development, covering various programming languages, tools, and methodologies.',
        subcategories: [
            {
                name: 'Web Development',
                description: 'Learn to build robust, scalable, and interactive web applications using the latest technologies and frameworks.',
                courses: [
                    {
                        name: 'Full Stack Web Development',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Frontend Development with React',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Backend Development with Node.js',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Web Development Bootcamp',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Mobile Development',
                description: 'Master the skills needed to develop mobile applications for both Android and iOS platforms.',
                courses: [
                    {
                        name: 'Android App Development',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'iOS App Development',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Cross-Platform Development with Flutter',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Data Science',
                description: 'Dive into data analysis, visualization, and machine learning to uncover insights and drive decision-making.',
                courses: [
                    {
                        name: 'Data Science with Python',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Machine Learning A-Z',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Deep Learning Specialization',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Cybersecurity',
                description: 'Learn how to protect systems, networks, and programs from digital attacks through various security practices and technologies.',
                courses: [
                    {
                        name: 'Introduction to Cybersecurity',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Ethical Hacking',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Network Security',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Cloud Computing',
                description: 'Gain expertise in cloud technologies and services, including AWS, Azure, and Google Cloud Platform.',
                courses: [
                    {
                        name: 'AWS Certified Solutions Architect',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Microsoft Azure Fundamentals',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Google Cloud Professional Cloud Architect',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Health & Wellness',
        image: 'https://cdn-icons-png.flaticon.com/128/4320/4320372.png',
        description: 'Explore courses designed to improve your physical and mental well-being, covering a range of topics from fitness to mental health.',
        subcategories: [
            {
                name: 'Fitness & Nutrition',
                description: 'Courses to help you stay fit and understand the fundamentals of good nutrition.',
                courses: [
                    {
                        name: 'Personal Fitness Training',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Nutrition and Wellness',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Weight Management',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Mental Health',
                description: 'Understanding and managing mental health conditions, as well as promoting mental well-being.',
                courses: [
                    {
                        name: 'Introduction to Mental Health',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Stress Management Techniques',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Mindfulness and Meditation',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Creative Arts',
        image: 'https://cdn-icons-png.flaticon.com/128/5361/5361551.png',
        description: 'Courses that inspire creativity and artistic expression in various forms, from visual arts to music.',
        subcategories: [
            {
                name: 'Visual Arts',
                description: 'Explore painting, drawing, and other visual arts techniques.',
                courses: [
                    {
                        name: 'Introduction to Painting',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Drawing for Beginners',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Digital Art Fundamentals',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Music & Performing Arts',
                description: 'Courses on music theory, instruments, and performing arts.',
                courses: [
                    {
                        name: 'Music Theory 101',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Introduction to Guitar',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Acting for Beginners',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Technology & Engineering',
        image: 'https://cdn-icons-png.flaticon.com/128/609/609034.png',
        description: 'Learn about cutting-edge technologies and engineering principles across various disciplines.',
        subcategories: [
            {
                name: 'Software Development',
                description: 'Courses on programming, software design, and development practices.',
                courses: [
                    {
                        name: 'Full Stack Web Development',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Mobile App Development',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Data Structures & Algorithms',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Electrical Engineering',
                description: 'Courses on circuits, electronics, and power systems.',
                courses: [
                    {
                        name: 'Introduction to Electrical Circuits',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Digital Electronics',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Power Systems Engineering',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Language & Communication',
        image: 'https://cdn-icons-png.flaticon.com/128/3898/3898082.png',
        description: 'Enhance your language skills and communication abilities across various languages and contexts.',
        subcategories: [
            {
                name: 'Foreign Languages',
                description: 'Courses to help you learn new languages or improve existing language skills.',
                courses: [
                    {
                        name: 'Spanish for Beginners',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'French Conversation',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Mandarin Chinese Essentials',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Professional Communication',
                description: 'Courses focused on enhancing professional communication skills.',
                courses: [
                    {
                        name: 'Business Writing',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Public Speaking Mastery',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Interpersonal Communication',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Business & Management',
        image: 'https://cdn-icons-png.flaticon.com/128/11495/11495575.png',
        description: 'Courses covering various aspects of business management and administration.',
        subcategories: [
            {
                name: 'Marketing & Sales',
                description: 'Learn about marketing strategies, sales techniques, and customer relations.',
                courses: [
                    {
                        name: 'Digital Marketing Strategies',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Sales and Negotiation',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Customer Relationship Management',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Leadership & Management',
                description: 'Courses on leadership skills, team management, and organizational development.',
                courses: [
                    {
                        name: 'Leadership Essentials',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Project Management Fundamentals',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Organizational Behavior',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Education & Teaching',
        image: 'https://cdn-icons-png.flaticon.com/128/5369/5369664.png',
        description: 'Courses designed for educators and those interested in advancing their teaching skills.',
        subcategories: [
            {
                name: 'Teaching Strategies',
                description: 'Courses on innovative teaching methods and classroom management.',
                courses: [
                    {
                        name: 'Active Learning Techniques',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Classroom Management',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Assessment and Evaluation',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Educational Technology',
                description: 'Explore tools and technologies for enhancing the learning experience.',
                courses: [
                    {
                        name: 'EdTech Tools Overview',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Online Course Design',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Integrating Tech in the Classroom',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Travel & Tourism',
        image: 'https://cdn-icons-png.flaticon.com/128/1257/1257385.png',
        description: 'Courses about the travel industry, tourism management, and cultural experiences.',
        subcategories: [
            {
                name: 'Travel Management',
                description: 'Courses on managing travel arrangements and services.',
                courses: [
                    {
                        name: 'Travel Agency Operations',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Destination Management',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Tourism Marketing',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Cultural Tourism',
                description: 'Courses on exploring and promoting cultural tourism experiences.',
                courses: [
                    {
                        name: 'Cultural Heritage Management',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Eco-Tourism',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Sustainable Tourism Practices',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Science & Environment',
        image: 'https://cdn-icons-png.flaticon.com/128/993/993515.png',
        description: 'Courses focusing on scientific principles and environmental issues.',
        subcategories: [
            {
                name: 'Environmental Science',
                description: 'Learn about ecosystems, conservation, and environmental policies.',
                courses: [
                    {
                        name: 'Introduction to Environmental Science',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Conservation Biology',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Sustainable Development',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Physics & Chemistry',
                description: 'Explore the fundamental concepts of physics and chemistry.',
                courses: [
                    {
                        name: 'Classical Mechanics',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Organic Chemistry',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Quantum Physics',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    {
        name: 'Arts & Crafts',
        image: 'https://cdn-icons-png.flaticon.com/128/1497/1497726.png',
        description: 'Courses for exploring various forms of arts and crafts, from traditional techniques to modern creations.',
        subcategories: [
            {
                name: 'Craft Techniques',
                description: 'Learn different crafting techniques and methods.',
                courses: [
                    {
                        name: 'DIY Crafts for Home Decor',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Knitting and Crochet',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Jewelry Making',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            },
            {
                name: 'Traditional Arts',
                description: 'Courses on traditional art forms and techniques from around the world.',
                courses: [
                    {
                        name: 'Ceramics and Pottery',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Textile Arts',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    },
                    {
                        name: 'Painting Techniques',
                        image: 'https://media.npr.org/assets/img/2023/05/24/gettyimages-1358149692-39527b1e42cc64b90835222f8aa203956538fe0e.jpg',
                    }
                ]
            }
        ]
    },
    // Add more main categories here
])

</script>

<template>
    <!-- main Drawer -->
    <transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0" leave-active-class="transition ease-in duration-300"
        leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-full">
        <div v-if="isDrawerOpen" class="fixed inset-0 overflow-hidden z-50 block lg:hidden">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeDrawer"></div>
                <section class="absolute inset-y-0 right-0 max-w-full flex">
                    <div class="w-screen">
                        <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                            <div class="flex-1 px-6">
                                <div class="sm:grid sm:grid-cols-1 gap-4">
                                    <Transition enter-active-class="transition ease-out duration-300"
                                        enter-from-class="opacity-0 translate-x-full"
                                        enter-to-class="opacity-100 translate-x-0">
                                        <template v-if="!showCategories && !currentSubMenu && !currentSubSubMenu">
                                            <!-- Main Menu -->
                                            <div>
                                                <div
                                                    class="py-4 mx-0 border-b border-ash-1500 flex items-center justify-between">
                                                    <img loading="lazy"
                                                        src="https://i.imghippo.com/files/LzYzY1720858499.png"
                                                        alt="GelLogo" class="w-[180px]">
                                                    <button @click="closeDrawer">
                                                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                                            stroke="#141727">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div @click="showCategories = true"
                                                    class="justify-between py-3 cursor-pointer transition-colors duration-200 flex gap-2 items-center rounded-2">
                                                    <div class="flex gap-1 items-center">
                                                        <h3 class="text-base font-medium text-ash-650">Explore your choices
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div @click="closeDrawer"
                                                    class="justify-between py-3 cursor-pointer transition-colors duration-200 flex gap-2 items-center rounded-2">
                                                    <div class="flex gap-1 items-center">
                                                        <h3 class="text-base font-medium text-ash-650">Corporate
                                                            Training</h3>
                                                    </div>
                                                </div>
                                                <div @click="closeDrawer"
                                                    class="justify-between py-3 cursor-pointer transition-colors duration-200 flex gap-2 items-center rounded-2">
                                                    <div class="flex gap-1 items-center">
                                                        <h3 class="text-base font-medium text-ash-650">Become an
                                                            Instructor</h3>
                                                    </div>
                                                </div>
                                                <div @click="closeDrawer"
                                                    class="justify-between py-3 cursor-pointer transition-colors duration-200 flex gap-2 items-center rounded-2">
                                                    <div class="flex gap-1 items-center">
                                                        <h3 class="text-base font-medium text-ash-650">Log In</h3>
                                                    </div>
                                                </div>
                                                <div @click="closeDrawer"
                                                    class="justify-between py-3 cursor-pointer transition-colors duration-200 flex gap-2 items-center rounded-2">
                                                    <div class="flex gap-1 items-center">
                                                        <h3 class="text-base font-medium text-ash-650">Sign Up</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </Transition>

                                    <Transition enter-active-class="transition ease-out duration-300"
                                        enter-from-class="opacity-0 translate-x-full"
                                        enter-to-class="opacity-100 translate-x-0">
                                        <template v-if="showCategories && !currentSubMenu && !currentSubSubMenu">
                                            <!-- Categories Menu -->
                                            <div>
                                                <div
                                                    class="py-6 mx-0 border-b border-ash-1500 flex items-center justify-between">
                                                    <button @click="showCategories = false" class="flex items-center">
                                                        <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                                                            stroke="#141727">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                        </svg>
                                                        <h3 class="text-sm font-medium text-ash-650">By Topics</h3>
                                                    </button>
                                                    <button @click="closeDrawer">
                                                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                                            stroke="#141727">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="flex flex-col">
                                                    <div v-for="(category, index) in categories" :key="index"
                                                        @click="openSubMenu(category)"
                                                        class="justify-between py-3 cursor-pointer transition-colors duration-200 flex gap-2 items-center rounded-2"
                                                        :class="{ 'lg:bg-ash-850': activeCategory === index, 'hover:bg-gray-100': activeCategory !== index }">
                                                        <div class="flex gap-1 items-center">
                                                            <img loading="lazy" :src="category.image" alt="image"
                                                                class="w-7 h-7">
                                                            <h3 class="text-base font-medium text-ash-650">{{
                                                                category.name }}</h3>
                                                        </div>
                                                    </div>
                                                    <div class="flex-1 py-3">
                                                        <div
                                                            class="sm:grid sm:grid-cols-1 gap-4 border-t border-ash-1500 pt-2">
                                                            <div class="flex flex-col">
                                                                <MainTopicsDrawer :name="'Main Topics'"
                                                                    :isOpen="activeDrawer === 'AwardingBodies'"
                                                                    @close="OptioncloseDrawer" @back-menu="backMenu" />
                                                                <CertificatesDrawer :name="'Certificates'"
                                                                    :isOpen="activeDrawer === 'GetCertified'"
                                                                    @close="OptioncloseDrawer" @back-menu="backMenu" />
                                                                <CoursesDrawer :name="'Courses'"
                                                                    :isOpen="activeDrawer === 'LiveOnlineCourses'"
                                                                    @close="OptioncloseDrawer" @back-menu="backMenu" />
                                                                <CareerPathDrawer
                                                                    :name="'Careers & Jobs '"
                                                                    :isOpen="activeDrawer === 'FindYourCareerPath'"
                                                                    @close="OptioncloseDrawer" @back-menu="backMenu" />
                                                                <AboutDrawer :name="'About'"
                                                                    :isOpen="activeDrawer === 'FreeResources'"
                                                                    @close="OptioncloseDrawer" @back-menu="backMenu" />
                                                                <div class="flex flex-col">
                                                                    <div v-for="(option, index) in mainOptions"
                                                                        :key="index" @click="openDrawer(option.id)"
                                                                        class="flex items-center py-3 cursor-pointer transition-all duration-300 rounded-2 flex-row flex-grow"
                                                                        :class="{ 'bg-beige-300': activeTab === index }">
                                                                        <img loading="lazy" :src="option.image"
                                                                            :alt="option.name" class="w-7 h-7">
                                                                        <h6 class="text-base font-medium text-ash-650">
                                                                            {{ option.name }}</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </Transition>

                                    <Transition enter-active-class="transition ease-out duration-300"
                                        enter-from-class="opacity-0 translate-x-full"
                                        enter-to-class="opacity-100 translate-x-0">
                                        <template v-if="currentSubMenu && !currentSubSubMenu">
                                            <!-- Sub Menu -->
                                            <div>
                                                <div
                                                    class="py-6 mx-0 border-b border-ash-1500 flex items-center justify-between">
                                                    <button @click="closeSubMenu"
                                                        class="flex items-center text-sm font-normal text-gray-900">
                                                        <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                                                            stroke="#141727">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                        </svg>
                                                        <h2 class="text-sm font-normal text-gray-900">{{
                                                            currentSubMenu.name }}</h2>
                                                    </button>
                                                    <button @click="closeDrawer">
                                                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                                            stroke="#141727">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="flex flex-col">
                                                    <div v-for="(subcategory, index) in currentSubMenu.subcategories"
                                                        :key="index" @click="openSubSubMenu(subcategory)"
                                                        class="flex items-center gap-x-3.5 py-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                                                        {{ subcategory.name }}
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </Transition>

                                    <Transition enter-active-class="transition ease-out duration-300"
                                        enter-from-class="opacity-0 translate-x-full"
                                        enter-to-class="opacity-100 translate-x-0">
                                        <template v-if="currentSubSubMenu">
                                            <!-- Sub-Sub Menu -->
                                            <div>
                                                <div
                                                    class="py-6 mx-0 border-b border-ash-1500 flex items-center justify-between">
                                                    <button @click="closeSubSubMenu"
                                                        class="flex items-center text-sm font-normal text-gray-900">
                                                        <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                                                            stroke="#141727">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                                        </svg>
                                                        <h2 class="text-sm font-normal text-gray-900">{{
                                                            currentSubSubMenu.name }}</h2>
                                                    </button>
                                                    <button @click="closeDrawer">
                                                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                                            stroke="#141727">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="flex flex-col">
                                                    <div v-for="(course, index) in currentSubSubMenu.courses"
                                                        :key="index" @click="closeDrawer"
                                                        class="flex items-center gap-x-3.5 py-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                                                        <img :src="course.image" alt="Course image"
                                                            class="w-7 h-7 mr-2 hidden">
                                                        {{ course.name }}
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.transition-all {
    transition-property: all;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.mega-menu {
    opacity: 0;
    visibility: hidden;
    z-index: -900;
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
    transition: all 0.15s linear 0s;
    top: 100%;
}

/* #hoverable Class Styles */
.hoverable {
    position: static;
}

.hoverable>a:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
}
</style>