<script setup>
import RelatedCourses from '../components/DetailPageComponents/RelatedCourses.vue';
import StickySlider from '../components/DetailPageComponents/StickySlider.vue';
import TopBanner from '../components/DetailPageComponents/TopBanner.vue';
import WebLayout from '../layouts/WebLayout.vue';
</script>


<template>
    <WebLayout>
        <div class="bg-beige-300">

            <TopBanner/>
    
            <StickySlider />

            <RelatedCourses />

        </div>
    </WebLayout>
</template>

