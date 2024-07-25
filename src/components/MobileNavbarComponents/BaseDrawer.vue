<!-- BaseDrawer.vue -->

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    isOpen: Boolean,
    name: String,
});

const emit = defineEmits(['close', 'backMenu']);

const close = () => {
    emit('close');
};

const backMenu = () => {
    emit('backMenu');
};

</script>

<template>
    <transition enter-active-class="transition ease-out duration-300" enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0" leave-active-class="transition ease-in duration-300"
        leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 translate-x-full">
        <div v-if="isOpen" class="fixed inset-0 overflow-hidden z-50 block lg:hidden">
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="close"></div>
                <section class="absolute inset-y-0 right-0 max-w-full flex">
                    <div class="w-screen">
                        <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                            <div class="flex-1 px-6">
                                <div class="py-6 mx-0 border-b border-ash-1500 flex items-center justify-between">

                                    <button @click="backMenu" class="flex items-center">
                                        <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="#141727">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        <h3 class="text-sm font-medium text-ash-650">{{ name }}</h3>
                                    </button>
                                    <button @click="close" class="">
                                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#141727">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>
