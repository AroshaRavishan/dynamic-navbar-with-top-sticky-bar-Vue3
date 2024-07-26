<script setup>
import {
    ref,
    onMounted,
    provide
} from 'vue';
import MobileMenu from './MobileMenu.vue';


// Mega menu button Handling

const handleMouseLeave = () => {
    document.querySelector('.background-overlay').style.opacity = '0';
    const megaMenu = document.querySelector('.mega-menu');
    if (megaMenu) {
        megaMenu.style.opacity = '0';
        megaMenu.style.visibility = 'hidden';
        megaMenu.style.zIndex = '-900';

        // ACTIVE MENU FOR DEVELOP YOU CAN UNCOMMENT BELOW 3 LINES
        // megaMenu.style.opacity = '1';
        // megaMenu.style.visibility = 'visible';
        // megaMenu.style.zIndex = '900';

    }
};

const handleMouseEnter = () => {
    document.querySelector('.background-overlay').style.opacity = '1';
    const megaMenu = document.querySelector('.mega-menu');
    if (megaMenu) {
        megaMenu.style.opacity = '1';
        megaMenu.style.visibility = 'visible';
        megaMenu.style.zIndex = '900';
    }
};

// Categories subcategories and courses scripts

const activeCategory = ref(0) // Initialize with the first category
const activeSubcategory = ref(0) // Initialize with the first subcategory

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

const setActiveCategory = (index) => {
    activeCategory.value = index
    activeSubcategory.value = 0 // Reset to first subcategory when changing main category
}

const setActiveSubcategory = (index) => {
    activeSubcategory.value = index
}

// This ensures that the component is fully initialized before we try to access the categories
onMounted(() => {
    if (categories.value.length > 0 && categories.value[0].subcategories.length > 0) {
        activeCategory.value = 0
        activeSubcategory.value = 0
    }
})

// Hover main tabs top of megamenu

const activeTab = ref(0);  // Set to 0 to make the first tab active by default
const hoverTab = ref(null);

const setActiveTab = (index) => {
    activeTab.value = index;
};

// mobile drawer script

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
};

// Provide the isDrawerOpen ref and toggleDrawer function to child components
provide('isDrawerOpen', isDrawerOpen);
provide('toggleDrawer', toggleDrawer);

</script>

<template>
    <nav class="bg-beige-300 sticky w-full py-4 lg:py-0 top-0 z-10">
        <div class="px-6 xl:px-10 flex items-center justify-between">
            <div class="flex-shrink-0 flex gap-6 xl:gap-14 items-center">
                <img loading="lazy" src="https://i.imghippo.com/files/LzYzY1720858499.png" alt="GelLogo"
                    class="w-[180px]">
                <div class="hidden lg:block">
                    <div class="hoverable">
                        <!-- Mega menu Button -->
                        <button class="text-black-900 text-base font-bold flex items-center gap-1 py-8"
                            @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter">Mega Menu
                            <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                class="dropdown-arrow" aria-hidden="true" data-v-df49f967="">
                                <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                                    <g id="flèche" fill-rule="nonzero">
                                        <path
                                            d="M2.12355578,3.36607715 C1.62976238,2.86984153 0.838359659,2.8792988 0.355908333,3.38720056 C-0.126542992,3.89510232 -0.117348423,4.7091165 0.376444978,5.20535213 L6.77337748,11.6339229 C7.26726737,12.1302555 8.05885719,12.1206834 8.54126629,11.6125453 L14.644333,5.18397456 C15.1266479,4.67593568 15.1172346,3.86192414 14.6233079,3.36582889 C14.1293812,2.86973364 13.337981,2.87941585 12.8556662,3.38745473 L7.62614912,8.89588547 L2.12355578,3.36607715 Z"
                                            id="Path-3"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <!-- Mega menu -->
                        <div class="mega-menu">
                            <div @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter" class="container">
                                <div
                                    class=" bg-white sm:shadow-md p-6 dark:bg-neutral-800 sm:dark:border dark:border-neutral-700 dark:divide-neutral-700 mx-auto border border-ash-550 z-1 relative">
                                    <div class="">
                                        <h4 class="text-xl font-semibold text-ash-650 border-b border-ash-1500 pb-4">
                                            Explore your choices</h4>
                                    </div>
                                    <div class="static">
                                        <div
                                            class="py-0 w-full flex items-center flex-wrap justify-between border-b border-ash-1500">
                                            <div class="flex items-center gap-2 py-5 px-2.5 inline-flex cursor-pointer transition-all duration-300 rounded-2 flex-row flex-grow"
                                                :class="{ 'bg-beige-300': activeTab === 0 }" @click="setActiveTab = 0"
                                                @mouseover="activeTab = 0">
                                                <div>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/2436/2436855.png"
                                                        loading="lazy" alt="Online learning " title="Online learning "
                                                        width="32" height="32">
                                                </div>
                                                <h6 class="text-lg font-medium text-ash-650">
                                                    Main Topics
                                                </h6>
                                            </div>

                                            <div class="flex items-center gap-2 py-5 px-2.5 inline-flex cursor-pointer transition-all duration-300 rounded-2 flex-row flex-grow"
                                                :class="{ 'bg-beige-300': activeTab === 1 }" @click="setActiveTab = 1"
                                                @mouseover="activeTab = 1">
                                                <div>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/2247/2247866.png"
                                                        loading="lazy" alt="Phd " title="Phd " width="32" height="32">
                                                </div>
                                                <h6 class="text-lg font-medium text-ash-650">
                                                    Certificates
                                                </h6>
                                            </div>

                                            <div class="flex items-center gap-2 py-5 px-2.5 inline-flex cursor-pointer transition-all duration-300 rounded-2 flex-row flex-grow"
                                                :class="{ 'bg-beige-300': activeTab === 2 }" @click="setActiveTab = 2"
                                                @mouseover="activeTab = 2">
                                                <div>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/11515/11515007.png"
                                                        loading="lazy" alt="Web " title="Web " width="32" height="32">
                                                </div>
                                                <h6 class="text-lg font-medium text-ash-650">
                                                    Courses
                                                </h6>
                                            </div>

                                            <div class="flex items-center gap-2 py-5 px-2.5 inline-flex cursor-pointer transition-all duration-300 rounded-2 flex-row flex-grow"
                                                :class="{ 'bg-beige-300': activeTab === 3 }" @click="setActiveTab = 3"
                                                @mouseover="activeTab = 3">
                                                <div>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/2179/2179306.png"
                                                        loading="lazy" alt="Interview " title="Interview " width="32"
                                                        height="32">
                                                </div>
                                                <h6 class="text-lg font-medium text-ash-650">
                                                    Careers & Jobs
                                                </h6>
                                            </div>

                                            <div class="flex items-center gap-2 py-5 px-2.5 inline-flex cursor-pointer transition-all duration-300 rounded-2 flex-row flex-grow"
                                                :class="{ 'bg-beige-300': activeTab === 4 }" @click="setActiveTab = 4"
                                                @mouseover="activeTab = 4">
                                                <div>
                                                    <img src="https://cdn-icons-png.flaticon.com/128/3815/3815602.png"
                                                        loading="lazy" alt="About " title="About " width="32"
                                                        height="32">
                                                </div>
                                                <h6 class="text-lg font-medium text-ash-650">
                                                    About
                                                </h6>
                                            </div>
                                        </div>
                                        <div class="">
                                            <!-- Sample data divs -->
                                            <div v-if="activeTab === 0" class="p-4" @mouseover="activeTab = 0">
                                                <!-- Mega menu Categories -->
                                                <div class="grid grid-cols-1 lg:grid-cols-12 CategoryPanel">
                                                    <!-- Left Section -->
                                                    <div class="col-span-1 lg:col-span-3 border-r border-ash-1500 pr-6">
                                                        <div class="">
                                                            <h4
                                                                class="text-xl font-semibold text-ash-650 border-b border-ash-1500 py-6">
                                                                Explore Topics</h4>
                                                        </div>
                                                        <div class="pt-6">
                                                            <!-- Main Categories Section -->
                                                            <ul class="space-y-0 h-[373px] 4xl:h-auto overflow-auto">
                                                                <li v-for="(category, index) in categories" :key="index"
                                                                    class="p-2.5 cursor-pointer transition-colors duration-200 flex gap-2 items-center rounded-2"
                                                                    :class="{ 'bg-ash-850': activeCategory === index, 'hover:bg-gray-100': activeCategory !== index }"
                                                                    @mouseover="setActiveCategory(index)">
                                                                    <div class="">
                                                                        <img loading="lazy" :src="category.image"
                                                                            alt="image" class="max-w-8 max-h-8">
                                                                    </div>
                                                                    <h3 class="text-base font-medium text-ash-650">{{
                                                                        category.name }}</h3>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <!-- Right Section -->
                                                    <div class="col-span-1 lg:col-span-9">
                                                        <div class="sm:grid sm:grid-cols-2">
                                                            <!-- Subcategories Section -->
                                                            <div class="flex flex-col border-r border-ash-1500">
                                                                <div class="flex flex-col pt-6 px-6">
                                                                    <h2 class="text-xl font-semibold text-ash-650">{{
                                                                        categories[activeCategory].name }}</h2>
                                                                    <p class="mt-5 text-sm font-normal text-ash-1400">{{
                                                                        categories[activeCategory].description }}</p>
                                                                    <div class="py-4 border-b border-ash-1500">
                                                                        <button
                                                                            class="rounded-1 border border-black-500 text-black-500 text-base font-semibold py-2.5 px-12 hover:text-black-500 cursor-pointer">View
                                                                            all</button>
                                                                    </div>
                                                                    <div class="pt-5">
                                                                        <h4 class="text-lg font-semibold text-ash-650">
                                                                            Top Categories</h4>
                                                                    </div>
                                                                    <ul
                                                                        class="space-y-3 mt-4 h-[200px] 4xl:h-auto overflow-auto">
                                                                        <li v-for="(subcategory, index) in categories[activeCategory].subcategories"
                                                                            :key="index"
                                                                            class="cursor-pointer p-2.5 rounded-2 transition-colors duration-200 border border-ash-1500"
                                                                            :class="{ 'bg-beige-300': activeSubcategory === index, 'hover:bg-gray-50': activeSubcategory !== index }"
                                                                            @mouseover="setActiveSubcategory(index)">
                                                                            <h3
                                                                                class="text-base font-medium text-ash-650">
                                                                                {{ subcategory.name }}</h3>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <!-- Courses Section -->
                                                            <div class="flex flex-col pt-6 px-6">
                                                                <h3 class="text-xl font-semibold text-ash-650">
                                                                    {{
                                                                    categories[activeCategory].subcategories[activeSubcategory].name
                                                                    }} Courses
                                                                </h3>
                                                                <ul
                                                                    class="sm:grid sm:grid-cols-2 gap-y-6 gap-x-4 mt-7 h-[170px] 4xl:h-auto overflow-auto">
                                                                    <li v-for="(course, courseIndex) in categories[activeCategory].subcategories[activeSubcategory].courses"
                                                                        :key="courseIndex"
                                                                        class="flex flex-row rounded-2 gap-2">
                                                                        <div class="">
                                                                            <img :src="course.image" alt="Course image"
                                                                                class="max-w-[50px] max-h-[50px] rounded-2">
                                                                        </div>
                                                                        <h5
                                                                            class="text-base font-medium text-ash-650 max-h-[3rem] overflow-hidden title-line-clamp cursor-pointer">
                                                                            {{ course.name }}
                                                                        </h5>
                                                                    </li>
                                                                </ul>
                                                                <button
                                                                    class="mt-7 text-black-900 text-base font-semibold hover:text-black-500 flex gap-2 items-center border-b border-transparent hover:border-b hover:border-black-900 cursor-pointer transition-all duration-300 ease-in-out w-max">
                                                                    View all trending courses
                                                                    <img src="https://cdn-icons-png.flaticon.com/128/16116/16116612.png"  alt="Right arrow" title="Right arrow" width="20" height="20" class="lzy lazyload--done">
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div v-if="activeTab === 1" class="p-4" @mouseover="activeTab = 1">
                                                <h3 class="text-xl font-bold mb-2">Get Certified</h3>

                                            </div>

                                            <div v-if="activeTab === 2" class="p-4" @mouseover="activeTab = 2">
                                                <h3 class="text-xl font-bold mb-2">Live Online Courses</h3>

                                            </div>

                                            <div v-if="activeTab === 3" class="p-4" @mouseover="activeTab = 3">
                                                <h3 class="text-xl font-bold mb-2">Find Your Career Path</h3>

                                            </div>

                                            <div v-if="activeTab === 4" class="p-4" @mouseover="activeTab = 4">
                                                <h3 class="text-xl font-bold mb-2">Free Resources</h3>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div
                                class="absolute inset-0 bg-black-500 bg-opacity-75 transition-opacity h-screen background-overlay">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex gap-1 xl:gap-6">
                <div class="flex">
                    <ul class="flex space-x-4 items-center">
                        <li>
                            <router-link to="#Corporate" class="text-black-900 text-base font-bold">Sample Link
                                1</router-link>
                        </li>
                        <li>
                            <router-link to="#Instructor" class="text-black-900 text-base font-bold">Sample Link
                                2</router-link>
                        </li>
                    </ul>
                </div>
                <div class="hidden lg:block">
                    <div class="flex items-center space-x-4">
                        <router-link to="#Login"
                            class="rounded-lg text-black-900 text-base font-semibold py-2.5 px-6 hover:text-black-500 flex gap-2 items-center border border-transparent hover:border-black-900 cursor-pointer transition-all duration-300 ease-in-out">
                            Sign in
                        </router-link>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <div class="flex items-center space-x-4">
                        <router-link to="#Register"
                            class="rounded-lg border border-black-800 text-black-900 text-base font-semibold py-2.5 px-6 hover:text-black-500 cursor-pointer">Sign
                            Up</router-link>
                    </div>
                </div>
            </div>
            <div class="lg:hidden">
                <button @click="toggleDrawer" class="block text-black-500 focus:outline-none cursor-pointer">
                    <svg class="h-6 w-6" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                        stroke="#141727">
                        <path d="M24.0833 14.1667H4.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M29.75 8.5H4.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M29.75 19.8333H4.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M24.0833 25.5H4.25" stroke="black" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu Drawer -->
        <MobileMenu />
        <!-- End Mobile menu Drawer -->
    </nav>
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