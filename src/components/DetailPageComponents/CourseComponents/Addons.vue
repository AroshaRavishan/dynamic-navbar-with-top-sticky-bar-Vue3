<script setup>
import { ref } from 'vue';

const courses = ref([
    {
        name: 'PeopleCert Official Mock ExamPRINCE2® Foundation',
        subtitle: 'PeopleCert Official PRINCE2® Foundation, 6th edition Mock Exam',
        price:'£49',
        cutprice: '£60'
        
    },
    {
        name: 'My Axelos Membership',
        subtitle: 'MyAxelos Standard Individual Subscription Annual  (Valid for 1 Year)',
        price: '£99.99',
        cutprice: '£250'
        
    },
]);
</script>

<template>
    <div>
        <p class="text-xl font-bold text-black-500">Add-Ons</p>
        <p class="text-sm sm:text-base font-normal text-black-500 mt-8">Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.</p>
        <div class="mt-11">
            <div class="lg:grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div v-for="course in courses" :key="course.name" class="bg-white rounded-3 shadow-light-shadow mb-6">
                    <div class="px-4 py-6">
                        <div class="flex items-baseline gap-4">
                            <div class="flex items-center">
                                <input checked id="checked-checkbox" type="checkbox" value=""
                                    class="w-4 h-4 text-primary-light bg-gray-100 border-gray-300 rounded-full focus:ring-primary-light dark:focus:ring-primary-light dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="flex flex-col">
                                <p class="text-base font-medium text-black-900 overflow-hidden onelineClamp max-h-7">
                                    {{ course.name }}
                                </p>
                                <p class="text-xs font-medium text-ash-1600 overflow-hidden mt-2 onelineClamp max-h-7">
                                    {{ course.subtitle }}
                                </p>
                                <p class="mt-4 text-2xl font-extrabold text-black-900">{{ course.price }} <span
                                        class="ml-2 text-base font-semibold text-ash-1600 line-through">{{
                                        course.cutprice }}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>