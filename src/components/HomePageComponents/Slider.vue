<template>
    <div class="relative font-inter antialiased">
        <main class="relative flex flex-col justify-center bg-slate-900 overflow-hidden">
            <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <div class="text-center">
                    <!-- Logo Carousel animation  -->
                    <div class="relative w-full overflow-hidden">
                        <div class="logo-carousel flex animate-infinite-scroll">
                            <ul class="flex items-center [&_li]:mx-8 [&_img]:max-w-none">
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                                        alt="Facebook" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                                        alt="Disney" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                                        alt="Airbnb" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" alt="Apple" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" alt="Spark" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                                        alt="Samsung" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" alt="Quora" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" alt="Sass" />
                                </li>
                                <!-- Duplicate logos for seamless looping -->
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg"
                                        alt="Facebook" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/disney.svg"
                                        alt="Disney" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg"
                                        alt="Airbnb" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/apple.svg" alt="Apple" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/spark.svg" alt="Spark" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg"
                                        alt="Samsung" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/quora.svg" alt="Quora" />
                                </li>
                                <li>
                                    <img src="https://cruip-tutorials.vercel.app/logo-carousel/sass.svg" alt="Sass" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- End: Logo Carousel animation  -->
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // Additional logic if needed
});
</script>

<style scoped>
@keyframes infinite-scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.logo-carousel {
    display: flex;
    white-space: nowrap;
    will-change: transform;
}

.animate-infinite-scroll {
    animation: infinite-scroll 20s linear infinite;
}
</style>
