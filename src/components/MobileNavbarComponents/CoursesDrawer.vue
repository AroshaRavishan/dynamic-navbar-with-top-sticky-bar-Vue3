<!-- LiveOnlineCoursesDrawer.vue -->
<template>
    <BaseDrawer :isOpen="isOpen" @close="$emit('close')" @backMenu="$emit('backMenu')">
        <h2 class="text-xl font-bold mb-4">Live Online Courses</h2>
        <!-- Add content specific to Live Online Courses here -->
    </BaseDrawer>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import BaseDrawer from './BaseDrawer.vue';

defineProps({
    isOpen: Boolean,
});

defineEmits(['close', 'backMenu']);
</script>