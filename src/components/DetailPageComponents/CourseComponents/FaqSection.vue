<script setup>
import { ref } from 'vue';

const activefaqIndex = ref(null);

const togglefaqs = (index) => {
    if (activefaqIndex.value === index) {
        activefaqIndex.value = null;
    } else {
        activefaqIndex.value = index;
    }
};

const faqs = ref([
    {
        title: 'Is PRINCE2® a professional qualification?',
        answer: 'This is the answer for FAQ Title 1.'
    },
    {
        title: 'What is the Importance of the PRINCE2® Foundation Course?',
        answer: 'This is the answer for FAQ Title 2.'
    },
    {
        title: 'How Long do I Have Access to the Course Material?',
        answer: 'This is the answer for FAQ Title 2.'
    },
    // Add more FAQs if needed
]);
</script>

<template>
    <div>
        <p class="text-xl font-bold text-black-500">Frequently Asked Questions (FAQs)</p>
        <p class="text-sm sm:text-base font-normal text-black-500 mt-8">Lorem ipsum dolor sit amet consectetur
            adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
        <div class="mt-11">
            <div class="accordion bg-white rounded-3 border border-ash-750">
                <div v-for="(faq, index) in faqs" :key="index"
                    :class="['border-b border-ash-750' , { 'last:border-0': index === faqs.length - 1 }]">
                    <div class="p-7 bg-white flex items-center justify-between cursor-pointer rounded-3"
                        @click="togglefaqs(index)">
                        <span class="text-black-500 font-medium text-base">{{ faq.title }}</span>
                        <svg :class="{ rotated: activefaqIndex === index }" xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="accordion-icon">
                            <path fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div v-if="activefaqIndex === index" class="bg-white rounded-3 px-7 pb-7">
                        <div class="text-ash-1200 font-normal text-sm">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.accordion-icon {
    transition: transform 0.3s;
}

.rotated {
    transform: rotate(180deg);
}

.last\:border-0 {
    border-bottom: 0;
}
</style>
