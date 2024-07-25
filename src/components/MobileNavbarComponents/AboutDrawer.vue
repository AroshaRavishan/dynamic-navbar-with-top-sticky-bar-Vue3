<!-- FreeResourcesDrawer.vue -->
<template>
    <BaseDrawer :isOpen="isOpen" @close="$emit('close')" @backMenu="$emit('backMenu')">
        <h2 class="text-xl font-bold mb-4">About us</h2>
        <!-- Add content specific to Free Resources here -->
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