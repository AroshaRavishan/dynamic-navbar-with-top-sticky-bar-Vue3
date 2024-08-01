<script setup>
import { ref, onMounted, onUnmounted, reactive, computed, watch } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import PriceCard from './PriceCard.vue';

// Import sections components
import OverviewSection from './CourseComponents/Overview.vue';
import OutcomeSection from './CourseComponents/Outcome.vue';
import CourseDetailsSection from './CourseComponents/CourseDetails.vue';
import IndustryExpertsSection from './CourseComponents/IndustryExperts.vue';
import ReviewsSection from './CourseComponents/Reviews.vue';
import RelatedCoursesSection from './CourseComponents/RelatedCourses.vue';
import PricingSection from './CourseComponents/PricingSection.vue';
import FaqSection from './CourseComponents/FaqSection.vue';

const isSticky = ref(false);
const navbarHeight = ref(0);
const isDrawerOpen = ref(false);
const isMobile = ref(false);
const drawerHeight = ref(0);
// comment below 2 lines to stop scroll up drawer option
const lastScrollTop = ref(0);
const isScrollingUp = ref(false);
const isPriceCardVisible = ref(true);
const priceCardOpacity = ref(1);
const isPriceCardFixed = computed(() => isDrawerOpen.value);
const isAtRelatedCourses = ref(false);
const shouldRenderDrawer = ref(false);

watch(isDrawerOpen, (newValue) => {
    if (newValue) {
        shouldRenderDrawer.value = true;
        // Wait for the drawer to be fully rendered
        setTimeout(() => {
            updateDrawerHeight();
        }, 0);
    } else {
        // Delay removing the drawer from the DOM
        setTimeout(() => {
            shouldRenderDrawer.value = false;
            drawerHeight.value = 0;
        }, 300); // Match this with your transition duration
    }
});

const updateNavbarHeight = () => {
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        navbarHeight.value = navbar.offsetHeight;
    }
};

const updateDrawerHeight = () => {
    const drawer = document.querySelector('.drawer');
    if (drawer) {
        drawerHeight.value = drawer.offsetHeight;
    } else {
        drawerHeight.value = 0;
    }
};

const checkMobile = () => {
    isMobile.value = window.innerWidth < 991;
};

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sectionTop = document.querySelector('main').offsetTop;
    isSticky.value = scrollPosition > 100;

    // Determine scroll direction
    isScrollingUp.value = scrollPosition < lastScrollTop.value;
    lastScrollTop.value = scrollPosition;

    if (isMobile.value) {
        // Mobile behavior
        if (scrollPosition + navbarHeight.value >= sectionTop) {
            isDrawerOpen.value = isScrollingUp.value;
        } else {
            isDrawerOpen.value = false;
        }
    } else {
        // Desktop behavior (unchanged)
        isDrawerOpen.value = scrollPosition + navbarHeight.value >= sectionTop;
    }

    state.activeItem = determineActiveSection();

    // Check if we've reached the start of the Related section
    const relatedSection = document.getElementById('relatedCourses');
    if (relatedSection) {
        const relatedSectionTop = relatedSection.getBoundingClientRect().top;
        isAtRelatedCourses.value = relatedSectionTop <= window.innerHeight;
    }
};

// const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const sectionTop = document.querySelector('main').offsetTop;
//     isSticky.value = scrollPosition > 100;

//     // Consistent behavior for both mobile and desktop
//     isDrawerOpen.value = scrollPosition + navbarHeight.value >= sectionTop;

//     state.activeItem = determineActiveSection();
// };

onMounted(() => {
    updateNavbarHeight();
    updateDrawerHeight();
    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
        updateNavbarHeight();
        updateDrawerHeight();
        checkMobile();
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', updateNavbarHeight);
    window.removeEventListener('resize', updateDrawerHeight);
    window.removeEventListener('resize', checkMobile);
});

watch(isDrawerOpen, (newValue) => {
    if (newValue) {
        // Wait for the drawer to be fully rendered
        setTimeout(updateDrawerHeight, 0);
    } else {
        drawerHeight.value = 0;
    }
});

const items = [
    { name: 'Overview', sectionId: 'overview-section', component: OverviewSection },
    { name: 'Outcome', sectionId: 'outcome-section', component: OutcomeSection },
    { name: 'Course details', sectionId: 'course-details-section', component: CourseDetailsSection },
    { name: 'Meet industry experts', sectionId: 'industry-experts-section', component: IndustryExpertsSection },
    { name: 'Plans', sectionId: 'pricing-section', component: PricingSection },
    { name: 'Reviews', sectionId: 'reviews-section', component: ReviewsSection },
    { name: 'FAQ’s', sectionId: 'faq-section', component: FaqSection },
    { name: 'Related courses', sectionId: 'related-courses-section', component: RelatedCoursesSection },
];

const state = reactive({
    activeItem: items[0].name,
});

const handleitemClick = (item) => {
    state.activeItem = item.name;
    scrollToSection(item.sectionId);
};

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const yOffset = -navbarHeight.value - 70; // Additional px for spacing
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        state.activeItem = items.find(cat => cat.sectionId === sectionId).name;
    }
};

const itemSplideOptions = {
    type: "slide",
    autoWidth: true,
    focus: "left",
    trimSpace: true,
    arrows: false,
    pagination: false,
    gap: "1rem",
    perMove: 1,
};

const determineActiveSection = () => {
    const scrollPosition = window.scrollY + navbarHeight.value + 100; // Add some offset

    for (let i = items.length - 1; i >= 0; i--) {
        const section = document.getElementById(items[i].sectionId);
        if (section && section.offsetTop <= scrollPosition) {
            return items[i].name;
        }
    }

    return items[0].name; // Default to the first item if none are in view
};

// New computed property for sticky section opacity
const stickyOpacity = computed(() => isDrawerOpen.value ? 0 : 1);

</script>

<template>
    <div>
        <!-- Sticky section -->
        <section v-if="!isMobile"
            :class="['transition-all duration-300 ease-in-out', isSticky ? 'sticky z-10' : '-top-full']"
            :style="{ top: isSticky ? `${navbarHeight}px` : '0', opacity: stickyOpacity }">
            <div class="container">
                <div class="mt-11">
                    <div class="lg:grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div class="lg:col-span-8 xl:col-span-8 4xl:col-span-9 bg-beige-300">
                            <div class="relative">
                                <div class="relative border-b border-b-black-900 stickyWrapper">
                                    <Splide :options="itemSplideOptions">
                                        <SplideSlide v-for="item in items" :key="item.sectionId">
                                            <div class="flex justify-center w-full">
                                                <div :class="['text-base font-medium w-full text-center py-5 px-4 cursor-pointer text-nowrap overflow-hidden',
                                                    state.activeItem === item.name
                                                        ? 'text-black-900 border-b-2 border-b-black-900'
                                                        : 'text-black-900']" @click="handleitemClick(item)">
                                                    {{ item.name }}
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    </Splide>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-4 xl:col-span-4 4xl:col-span-3">
                            <!-- Add any content for the right column if needed -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Popup drawer from Top -->
        <!-- <transition name="slide-down"> -->
        <div v-show="shouldRenderDrawer"
            class="drawer fixed top-0 left-0 w-full h-auto bg-beige-300 lg:bg-black-800 shadow-md p-2 xl:p-3 z-[11]"
            :class="{ 'drawer-open': isDrawerOpen }">
            <div class="relative container">
                <div class="relative">
                    <div class="relative drawerStickywrapper">
                        <Splide :options="itemSplideOptions">
                            <SplideSlide v-for="item in items" :key="item.sectionId">
                                <div class="flex justify-center w-full">
                                    <div :class="['text-base font-medium w-full text-center py-4 px-4 cursor-pointer text-nowrap overflow-hidden',
                                        state.activeItem === item.name
                                            ? 'text-black-900 lg:text-white border-b-2 border-b-black-900 lg:border-b-white'
                                            : 'text-black-900 lg:text-white']" @click="handleitemClick(item)">
                                        {{ item.name }}
                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
        <!-- </transition> -->

        <!-- Main content area with item sections -->
        <main class="container mx-auto">
            <div class="lg:grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div class="lg:col-span-8 xl:col-span-8 4xl:col-span-9">
                    <section v-for="(item, index) in items" :key="item.sectionId" :id="item.sectionId" :class="[
                        index === 0 ? 'pt-10 md:pt-19' : '',
                        index !== items.length - 1 ? 'pb-19' : ''
                    ]">
                        <component :is="item.component"></component>
                    </section>
                </div>
                <!-- Price card -->
                <div class="lg:col-span-4 xl:col-span-4 4xl:col-span-3 justify-center hidden lg:flex"
                    :class="{ 'relative': isAtRelatedCourses }">
                    <div class="PriceCard max-w-[300px] xl:max-w-[370px]"
                        :class="{ 'fixed bottom-0 right-0 left-0 z-10': isDrawerOpen, 'related-courses-style': isAtRelatedCourses }"
                        :style="[
                            isDrawerOpen ? { top: `${drawerHeight}px` } : { top: '130px' },
                            isAtRelatedCourses ? {
                                transition: 'all .3s ease-in-out',
                                width: '100%',
                                position: 'absolute',
                                top: 'auto',
                                bottom: '0'
                            } : {}
                        ]">
                        <div class="bg-white shadow-light-shadow rounded-3 mx-auto mt-5">
                            <PriceCard :is-price-card-fixed="isPriceCardFixed" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
/* Top Drawer css smooth animation part */
.drawer {
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    opacity: 0;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.drawer.drawer-open {
    transform: translateY(0);
    opacity: 1;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Section start and section body css part */
section {
    transition: opacity 0.1s ease-in-out, top 0.6s ease-in-out;
}

@media (max-width: 991px) {
    .sticky {
        display: none;
    }
}

.PriceCard {
    transition: all 0.6s ease-in-out, opacity 0.3s ease-in-out;
    position: absolute;
}

.PriceCard.fixed {
    position: fixed;
    width: 100%;
}

.related-courses-style {
    transition: all .3s ease-in-out;
    width: 100%;
    position: absolute;
    top: auto;
    bottom: 0;
}

@media (min-width: 991px) {
    .PriceCard.fixed {
        left: auto;
        right: auto;
        /* width: calc(30% - 20px); */
        width: 100%;
        /* Adjust based on your grid system */
    }

}

.PriceCard img {
    transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
}

.PriceCard.fixed img {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
}

/* section right side shadow */
.stickyWrapper::after {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 6rem;
    content: "";
    z-index: 2;
    background: linear-gradient(90deg, hsla(40, 30%, 96%, 0), rgba(244, 246, 248, 0) .01%, #FBF6F1 98.9%);
}

/* mobile top drawer right side shadow */
.drawerStickywrapper::after {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 6rem;
    content: "";
    z-index: 2;
    background: linear-gradient(90deg, hsla(40, 30%, 96%, 0), rgba(244, 246, 248, 0) .01%, #FBF6F1 98.9%);
}

/* Desktop drawer right side shadow */
@media (min-width: 991px) {

    .drawerStickywrapper::after {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 6rem;
        content: "";
        z-index: 2;
        background: linear-gradient(90deg, hsla(40, 30%, 96%, 0), rgba(244, 246, 248, 0) .01%, #18191D 98.9%);
    }
}
</style>