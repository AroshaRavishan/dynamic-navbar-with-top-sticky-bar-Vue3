<script setup>
import { ref, defineProps, nextTick } from 'vue';
// import PrimaryButton from '../WebCommoncomponents/PrimaryButton.vue';
// import SecondaryButton from '../WebCommoncomponents/SecondaryButton.vue';
import CustomVideoPlayer from '../DetailPageComponents/CustomVideoPlayer.vue';

const videoPlayerRef = ref(null)

// Define props
const props = defineProps({
    isPriceCardFixed: {
        type: Boolean,
        default: false
    }
})
// Reactive variable to track the selected tab
const selectedTab = ref('payFull')

// New ref to control modal visibility
const isModalOpen = ref(false)

// Add a ref for the modal's opacity
const modalOpacity = ref(0)
const modalScale = ref(0.9)

// Update the openModal function
const openModal = () => {
    isModalOpen.value = true
    setTimeout(() => {
        modalOpacity.value = 1
        modalScale.value = 1
        nextTick(() => {
            if (videoPlayerRef.value) {
                videoPlayerRef.value.playVideo()
            }
        })
    }, 50)
}

// Update the closeModal function
const closeModal = () => {
    modalOpacity.value = 0
    modalScale.value = 0.9
    setTimeout(() => {
        isModalOpen.value = false
    }, 300)
}

const showAll = ref(false);

const toggleShowAll = () => {
    showAll.value = !showAll.value;
};


</script>

<template>
    <div>
        <div v-if="!isPriceCardFixed" class="relative videomodal hidden lg:block">
            <img v-if="!isPriceCardFixed" loading="lazy"
                src="https://d2rqt2vap50klh.cloudfront.net/700c23f2-b2fd-45ee-b61b-cf168116d5b1/web-assets/CourseBannerTopImage.png"
                alt="price card" class="w-full transition-opacity duration-300 ease-in-out"
                :class="{ 'opacity-0 max-h-0 overflow-hidden': isPriceCardFixed }">
            <button @click="openModal" class="play-button w-14 h-14 absolute top-1/2 left-1/2
                transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                <img src='https://www.imperiallearning.co.uk/_next/static/media/playbtn.f9077a86.png' alt="Play Button"
                    class="play-icon" />
                <div class="wave-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
            </button>
        </div>

        <!-- Video Modal -->
        <Transition name="fade">
            <div v-if="isModalOpen"
                class="fixed inset-0 bg-black-900 bg-opacity-80 z-50 flex items-center justify-center"
                :style="{ opacity: modalOpacity }" @click="closeModal">
                <div class="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/5 relative"
                    :style="{ transform: `scale(${modalScale})` }" @click.stop>
                    <button @click="closeModal"
                        class="h-7 w-7 modal-close absolute -top-2.5 -right-2.5 cursor-pointer text-xl text-black-900 z-[1000] bg-white rounded-full flex justify-center items-center border">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                    <div class="aspect-w-16 aspect-h-9">
                        <CustomVideoPlayer ref="videoPlayerRef" videoType="direct"
                            src="https://s3.eu-west-2.amazonaws.com/imperiallearning.co.uk/promo-video/Imperial+learning+Portfolio+03.mp4" />

                        <!-- <CustomVideoPlayer ref="videoPlayerRef" videoType="vimeo"
                            src="https://player.vimeo.com/video/617862018?h=f24e02288b" /> -->
                    </div>
                </div>
            </div>
        </Transition>

        <div
            class="bg-white rounded-3 my-10 lg:bg-transparent shadow-light-shadow lg:shadow-none lg:rounded-0 lg:my-0 py-6 px-4">
            <div>
                <div class="bg-ash-1900 p-1 rounded-2 flex lg:grid xl:flex xl:gap-2">
                    <!-- Tabs -->
                    <button @click="selectedTab = 'payFull'"
                        :class="{ 'bg-white text-black-900': selectedTab === 'payFull', 'bg-transparent text-black-900': selectedTab !== 'payFull' }"
                        class="text-sm sm:text-xl font-medium py-2.5 px-4 rounded-1 w-full whitespace-nowrap">
                        Pay in full
                    </button>
                    <button @click="selectedTab = 'payMonthly'"
                        :class="{ 'bg-white text-black-900': selectedTab === 'payMonthly', 'bg-transparent text-black-900': selectedTab !== 'payMonthly' }"
                        class="text-sm sm:text-xl font-medium py-2.5 px-4 rounded-1 w-full whitespace-nowrap">
                        Pay Monthly
                    </button>
                </div>

                <div>
                    <!-- Content based on selected tab -->
                    <div v-if="selectedTab === 'payFull'">
                        <div class="mt-6">
                            <div class="text-base sm:text-xl font-medium text-black-900 text-center">Buy Now at: <span
                                    class="ml-1 text-orange-300">Ends in 4Hrs</span></div>
                            <div class="mt-6 flex justify-center">
                                <div class="flex flex-wrap gap-2 items-center">
                                    <h1 class="text-3xl sm:text-4xl font-semibold text-black-900">
                                        £798
                                    </h1>
                                    <p class="text-base sm:text-lg font-semibold text-ash-1600 line-through">£1229</p>
                                    <div class="relative">
                                        <!-- <img loading="lazy"
                                            :src="$page.props.assetURL ? $page.props.assetURL + '/web-assets/WebRevamp/pricetag.png' : '../../web-assets/WebRevamp/pricetag.png'"
                                            alt="price tag" class=""> -->
                                        <span
                                            class="text-sm sm:text-base font-bold text-black-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">35%
                                            OFF!</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 flex flex-col gap-3">
                                <PrimaryButton
                                    class="whitespace-nowrap gap-3 flex items-center text-white font-medium py-2.5 px-4 border border-black-800 bg-black-800 rounded-2 text-base sm:text-lg w-full justify-center">
                                    Enquire now
                                </PrimaryButton>
                                <SecondaryButton
                                    class="whitespace-nowrap gap-3 flex items-center text-black-800 font-medium py-2.5 px-4 border border-black-800 bg-transparent rounded-2 text-base sm:text-lg w-full justify-center">
                                    Buy now
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                    <div v-if="selectedTab === 'payMonthly'">
                        <div class="mt-6">
                            <!-- Add content for pay monthly tab -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Common Section -->

           
            <div class="mt-6">
                <form class="">
                    <div class="relative">
                        <input type="search" id="default-search"
                            class="block w-full p-4 text-sm text-ash-450 border border-ash-1100 rounded-lg bg-gray-white focus:ring-primary-light focus:border-primary-light dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-light dark:focus:border-primary-light"
                            placeholder="GEL30" required />
                        <button type="submit"
                            class="text-white absolute end-2.5 bottom-2.5 bg-black-800 font-semibold rounded-lg text-sm px-4 py-2">Copy</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
    transition: max-height 0.5s ease-in-out;
    overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
    max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
    max-height: 300px;
    /* Adjust this value based on your content */
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

img {
    transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
}

.wave-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.wave {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    animation: wave 2s infinite;
}

.wave:nth-child(2) {
    animation-delay: 0.3s;
}

.wave:nth-child(3) {
    animation-delay: 0.6s;
}

@keyframes wave {
    0% {
        transform: scale(0.5);
        opacity: 1;
    }

    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fixed {
    transition: opacity 0.3s ease-in-out;
}

.bg-white {
    transition: transform 0.3s ease-in-out;
}
</style>