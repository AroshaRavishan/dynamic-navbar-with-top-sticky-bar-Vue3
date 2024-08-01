<script setup>
import {
    usePage
} from '@inertiajs/vue3'
import {
    ref,
    onMounted
} from 'vue';
import {
    Splide,
    SplideSlide
} from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const colors = ['#E8DCFA', '#FFF3CF', '#FFDA6E'];

const slides = [
{
    id: 1,
    description: "Project Managers play a crucial role in delivering projects on time, within budget, and with high quality,",
    
    name: "Project Manager",
    price:'£70000',
    position: "Management",
    bgColor: colors[0]
},
{
    id: 2,
    description: "ProjectTeam Members collaborate to achieve project goals, each contributing their skills and expertise in their respective roles.",
    
    name: "Project Team Member",
    price: '£30000',
    position: "Executive",
    bgColor: colors[1]
},
{
    id: 3,
    description: "Professionals who provide administrative or support roles in project management and wish to understand how PRINCE2® projects are structured",
    
    name: "Project Support Staff",
    price: '£150000',
    position: "Admin",
    bgColor: colors[2]
},
    {
        id: 4,
        description: "Project Managers play a crucial role in delivering projects on time, within budget, and with high quality,",
        
        name: "Project Manager",
        price: '£70000',
        position: "Management",
        bgColor: colors[0]
    },
    {
        id: 5,
        description: "ProjectTeam Members collaborate to achieve project goals, each contributing their skills and expertise in their respective roles.",
        
        name: "Project Team Member",
        price: '£30000',
        position: "Executive",
        bgColor: colors[1]
    },
    {
        id: 6,
        description: "Professionals who provide administrative or support roles in project management and wish to understand how PRINCE2® projects are structured",
        
        name: "Project Support Staff",
        price: '£150000',
        position: "Admin",
        bgColor: colors[2]
    },
];


const contentSplideOptions = {
    type: "slide",
    autoplay: false,
    focus: 'left',
    wheel: true,
    releaseWheel: true,
    autoWidth: true,
    trimSpace: true,
    arrows: false,
    pagination: false,
    gap: "1rem",
    perMove: 1,
    interval: 3000,
};

const splideRef = ref(null);
const progress = ref(0);

const prevSlide = () => {
    splideRef.value?.go('-1');
};

const nextSlide = () => {
    splideRef.value?.go('+1');
};

const onMoved = (splide) => {
    const totalSlides = splide.length;
    const currentIndex = splide.index;
    progress.value = ((currentIndex + 1) / totalSlides) * 100;
};

onMounted(() => {
    if (splideRef.value) {
        splideRef.value.splide.on('mounted move', () => {
            const splide = splideRef.value.splide;
            const end = splide.length;
            const rate = Math.min((splide.index + 1) / end, 1);
            progress.value = rate * 100;
        });
    }
});
</script>

<template>
    <section class="">
        <div>
            <div class="">
                <Splide :options="contentSplideOptions" @moved="onMoved" ref="splideRef" class="">
                    <SplideSlide v-for="(slide, index) in slides" :key="index" class="">
                        <div class="rounded-xl shadow-light-shadow w-[300px] sm:w-[425px] py-4 px-5 my-5"
                            :style="{ backgroundColor: slide.bgColor }">
                            <div class="flex items-center gap-4">
                                <img loading="lazy" :src="slide.image" alt="image"
                                    class="w-16 h-16 block flex-shrink-0 max-w-full rounded-full hidden">
                                <div class="flex flex-col">
                                    <p
                                        class="text-sm sm:text-base font-medium text-black-500 overflow-hidden onelineClamp">
                                        {{ slide.name }}
                                    </p>
                                    <p class="text-sm font-normal text-ash-1600 overflow-hidden">{{
                                        slide.position }}</p>
                                </div>
                            </div>
                            <div class="block">
                                <p
                                    class="mt-6 text-sm sm:text-base font-normal text-black-500 overflow-hidden h-[78px] threelineClamp">
                                    {{ slide.description }}
                                </p>
                            </div>
                            <div class="mt-8">
                                <p
                                    class="text-xl sm:text-[22px] font-semibold text-black-500 overflow-hidden">
                                    {{ slide.price }}
                                </p>
                                <p class="text-xs font-medium text-black-500 mt-1">Approx. / per annum</p>
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>

        </div>
    </section>
</template>

<style scoped>

.my-slider-progress {
    background: #A4A4A4;
    height: 4px;
}

.my-slider-progress-bar {
    background: white;
    height: 4px;
    transition: width 400ms ease;
    width: 0;
}
</style>