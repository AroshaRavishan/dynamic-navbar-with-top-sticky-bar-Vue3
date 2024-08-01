<script setup>
import { ref } from 'vue';

const tutors = ref([
    {
        name: 'Gerry Steinhauer',
        specialization: 'Specialised in Project Management Training, Agile Development Training',
        description: 'Gerry Steinhauer is an accredited and highly experienced project management trainer. He is specialised in Project Management Training, Agile Development Training, Project, NLP Block Busting, Programme and Portfolio Management Support and Mentoring, Business and Personal Life Breakthrough Coaching. He also has experience in developing...',
        image: 'https://www.study365.co.uk/wp-content/uploads/2024/04/Franklin-Folahan.png'
    },
]);
</script>

<template>
    <div>
        <p class="text-xl font-bold text-black-500">Meet your tutor</p>
        <p class="text-sm sm:text-base font-normal text-black-500 mt-8">Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
        <div class="mt-11">
            <div v-for="tutor in tutors" :key="tutor.name" class="bg-white rounded-6 shadow-light-shadow mb-6">
                <div class="px-4 py-6">
                    <div class="flex items-center gap-4">
                        <img :src="tutor.image" alt="image"
                            class="max-w-[92px] max-h-[92px] block flex-shrink-0 rounded-full" loading="lazy">
                        <div class="flex flex-col">
                            <p class="text-base sm:text-xl font-medium text-black-500 overflow-hidden onelineClamp">
                                {{ tutor.name }}
                            </p>
                            <p class="text-xs sm:text-lg font-medium text-ash-1700 overflow-hidden mt-1">
                                {{ tutor.specialization }}
                            </p>
                        </div>
                    </div>
                    <p class="text-sm sm:text-base font-normal text-ash-1800 overflow-hidden mt-11">
                        "{{ tutor.description }}"
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
