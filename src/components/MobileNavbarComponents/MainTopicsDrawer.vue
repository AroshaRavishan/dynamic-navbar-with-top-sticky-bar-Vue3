<!-- AwardingBodiesDrawer.vue -->
<template>
    <BaseDrawer :name="name" :isOpen="isOpen" @close="$emit('close')" @backMenu="$emit('backMenu')">
        <h2 class="text-xl font-bold mb-4">Main topics</h2>
        <!-- Add content specific to Awarding Bodies here -->
    </BaseDrawer>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import BaseDrawer from './BaseDrawer.vue';

defineProps({
    isOpen: Boolean,
    name: String
});

defineEmits(['close', 'backMenu']);
</script>