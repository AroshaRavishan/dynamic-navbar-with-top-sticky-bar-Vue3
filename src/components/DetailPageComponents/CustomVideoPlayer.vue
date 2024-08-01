<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';

const props = defineProps({
    src: { type: String, required: true },
    videoType: { type: String, default: 'direct' }, // 'direct' or 'vimeo'
    autoplay: { type: Boolean, default: false },
    poster: { type: String, default: '' }
});
const embedHtml = ref('');
const videoRef = ref(null);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const volume = ref(1);
const isFullscreen = ref(false);
const isControlsVisible = ref(false);
const isMuted = ref(false);
const isTooltipVisible = ref(false);
const tooltipTime = ref(0);
const tooltipPosition = ref(0);
const isLoading = ref(true);
const bufferedPercentage = ref(0);
const qualityLevels = ref([]);
const currentQuality = ref('auto');
const subtitles = ref([]);
const currentSubtitle = ref('off');
const showSettings = ref(false);
const playbackRate = ref(1);
const playbackRates = ref([0.5, 1, 1.5, 2]);

const vimeoEmbedUrl = computed(() => {
    if (props.videoType === 'vimeo') {
        const url = new URL(props.src);
        const videoId = url.pathname.split('/').pop();
        return `https://player.vimeo.com/video/${videoId}${url.search}`;
    }
    return '';
});

onMounted(async () => {
    if (props.videoType === 'vimeo') {
        try {
            const response = await fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(props.src)}`);
            const data = await response.json();
            embedHtml.value = data.html;
        } catch (error) {
            console.error('Error fetching Vimeo oEmbed data:', error);
        }
    }
});

const togglePlay = () => {
    if (props.videoType === 'direct') {
        if (videoRef.value.paused) {
            videoRef.value.play();
        } else {
            videoRef.value.pause();
        }
        isPlaying.value = !videoRef.value.paused;
    }
    // For Vimeo, you'd need to use the Vimeo Player API to control playback
};

const updateProgress = () => {
    if (props.videoType === 'direct') {
        currentTime.value = videoRef.value.currentTime;
        duration.value = videoRef.value.duration;
        updateBufferedPercentage();
    }
};

const updateBufferedPercentage = () => {
    if (props.videoType === 'direct' && videoRef.value.buffered.length > 0) {
        const bufferedEnd = videoRef.value.buffered.end(videoRef.value.buffered.length - 1);
        bufferedPercentage.value = (bufferedEnd / videoRef.value.duration) * 100;
    }
};

const setProgress = (e) => {
    if (props.videoType === 'direct') {
        const newTime = e.target.value;
        videoRef.value.currentTime = newTime;
        currentTime.value = newTime;
    }
};

const setVolume = (e) => {
    if (props.videoType === 'direct') {
        const newVolume = e.target.value;
        videoRef.value.volume = newVolume;
        volume.value = newVolume;
        isMuted.value = newVolume === 0;
    }
};

const toggleMute = () => {
    if (props.videoType === 'direct') {
        isMuted.value = !isMuted.value;
        videoRef.value.muted = isMuted.value;
        volume.value = isMuted.value ? 0 : 1;
        videoRef.value.volume = volume.value;
    }
};

const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        videoRef.value.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};

const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    if (hours > 0) {
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const showControls = () => {
    isControlsVisible.value = true;
};

const hideControls = () => {
    if (!isPlaying.value) return;
    isControlsVisible.value = false;
};

const volumeIcon = computed(() => {
    if (isMuted.value || volume.value === 0) return 'fas fa-volume-mute';
    if (volume.value < 0.5) return 'fas fa-volume-down';
    return 'fas fa-volume-up';
});

const showTooltip = (e) => {
    const rect = e.target.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    tooltipTime.value = percent * duration.value;
    tooltipPosition.value = e.clientX - rect.left;
    isTooltipVisible.value = true;
};

const hideTooltip = () => {
    isTooltipVisible.value = false;
};

const toggleSettings = () => {
    showSettings.value = !showSettings.value;
};

const setQuality = (quality) => {
    currentQuality.value = quality;
    // Implement quality switching logic here
};

const setSubtitle = (subtitle) => {
    currentSubtitle.value = subtitle;
    // Implement subtitle switching logic here
};

const setPlaybackRate = (rate) => {
    if (props.videoType === 'direct') {
        playbackRate.value = rate;
        if (videoRef.value) {
            videoRef.value.playbackRate = rate;
        }
    }
};

const handleKeydown = (e) => {
    if (props.videoType === 'direct') {
        switch (e.key) {
            case ' ':
            case 'k':
                togglePlay();
                break;
            case 'f':
                toggleFullscreen();
                break;
            case 'm':
                toggleMute();
                break;
            case 'ArrowLeft':
                videoRef.value.currentTime -= 5;
                break;
            case 'ArrowRight':
                videoRef.value.currentTime += 5;
                break;
            case 'ArrowUp':
                setVolume({ target: { value: Math.min(volume.value + 0.1, 1) } });
                break;
            case 'ArrowDown':
                setVolume({ target: { value: Math.max(volume.value - 0.1, 0) } });
                break;
        }
    }
};

const handleClickOutside = (e) => {
    if (showSettings.value && !e.target.closest('.settings-menu')) {
        showSettings.value = false;
    }
};

onMounted(() => {
    if (props.videoType === 'direct') {
        videoRef.value.addEventListener('timeupdate', updateProgress);
        videoRef.value.addEventListener('loadedmetadata', () => {
            isLoading.value = false;
            duration.value = videoRef.value.duration;
            // Implement quality levels detection here
            // Implement subtitles detection here
        });
    }
    document.addEventListener('fullscreenchange', () => {
        isFullscreen.value = !!document.fullscreenElement;
    });
    window.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleClickOutside);
    if (props.autoplay) {
        playVideo();
    }
});

onUnmounted(() => {
    if (props.videoType === 'direct') {
        videoRef.value.removeEventListener('timeupdate', updateProgress);
    }
    window.removeEventListener('keydown', handleKeydown);
    document.removeEventListener('click', handleClickOutside);
});

const playVideo = () => {
    if (props.videoType === 'direct' && videoRef.value) {
        videoRef.value.play();
        isPlaying.value = true;
    }
};

watch(isPlaying, (newValue) => {
    if (newValue) {
        hideControls();
    } else {
        showControls();
    }
});

defineExpose({ playVideo });
</script>

<template>
    <div ref="playerRef" class="relative w-full bg-black rounded-lg overflow-hidden" @mousemove="showControls"
        @mouseleave="hideControls">
        <template v-if="videoType === 'direct'">
            <video ref="videoRef" :src="src" :poster="poster" @click="togglePlay" class="w-full rounded-lg"></video>
            <div v-if="isLoading"
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                <i class="fas fa-spinner fa-spin fa-3x"></i>
            </div>
            <div
                :class="['absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ease-in-out', { 'opacity-0': !isControlsVisible, 'opacity-100': isControlsVisible }]">
                <div class="relative mb-1 px-2" @mousemove="showTooltip" @mouseleave="hideTooltip">
                    <input type="range" min="0" :max="duration" :value="currentTime" @input="setProgress"
                        class="w-full appearance-none h-0.5 rounded bg-white/60 focus:outline-none cursor-pointer" />
                    <div v-if="isTooltipVisible" :style="{ left: `${tooltipPosition}px` }"
                        class="absolute bottom-6 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2">
                        {{ formatTime(tooltipTime) }}
                    </div>
                </div>
                <div class="flex items-center justify-between space-x-4 bg-black-900 bg-opacity-50 px-2">
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-2">
                            <button @click="togglePlay" class="text-white text-xl p-1"
                                :aria-label="isPlaying ? 'Pause' : 'Play'">
                                <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
                            </button>
                            <div class="text-white text-xs hover:bg-primary-light p-0.5 px-1 rounded">
                                {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <button @click="toggleMute" class="text-white text-lg p-1"
                                :aria-label="isMuted ? 'Unmute' : 'Mute'">
                                <i :class="volumeIcon"></i>
                            </button>
                            <div class="flex items-center">
                                <input type="range" min="0" max="1" step="0.1" :value="volume" @input="setVolume"
                                    class="appearance-none w-16 h-1 rounded bg-white/60 focus:outline-none cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button @click="toggleSettings" class="text-white text-lg p-1" aria-label="Settings">
                            <i class="fas fa-cog"></i>
                        </button>
                        <button @click="toggleFullscreen" class="text-white text-lg p-1"
                            :aria-label="isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'">
                            <i :class="isFullscreen ? 'fas fa-compress' : 'fas fa-expand'"></i>
                        </button>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="videoType === 'vimeo'">
            <div v-if="embedHtml" v-html="embedHtml" class="w-full aspect-video rounded-lg"></div>
            <iframe v-else-if="vimeoEmbedUrl" :src="vimeoEmbedUrl" class="!w-full aspect-video rounded-lg !h-full"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
            </iframe>
            <div v-else class="w-full aspect-video rounded-lg bg-black flex items-center justify-center text-white">
                Error: Unable to load Vimeo video
            </div>
        </template>
        <div v-if="showSettings && videoType === 'direct'"
            class="settings-menu absolute right-0 bottom-16 bg-black-900 bg-opacity-80 text-white p-4 rounded-lg">
            <h3 class="text-lg font-bold mb-2">Settings</h3>
            <div class="mb-4">
                <h4 class="text-sm font-semibold mb-1">Quality</h4>
                <select v-model="currentQuality" @change="setQuality(currentQuality)"
                    class="bg-white/20 text-white rounded px-2 py-1 text-xs w-full">
                    <option value="auto">Auto</option>
                    <option v-for="quality in qualityLevels" :key="quality" :value="quality"> {{ quality }} </option>
                </select>
            </div>
            <div class="mb-4">
                <h4 class="text-sm font-semibold mb-1">Subtitles</h4>
                <select v-model="currentSubtitle" @change="setSubtitle(currentSubtitle)"
                    class="bg-white/20 text-white rounded px-2 py-1 text-xs w-full">
                    <option value="off">Off</option>
                    <option v-for="subtitle in subtitles" :key="subtitle" :value="subtitle"> {{ subtitle }} </option>
                </select>
            </div>
            <div>
                <h4 class="text-sm font-semibold mb-1">Playback Rate</h4>
                <div class="flex gap-2">
                    <button v-for="rate in playbackRates" :key="rate" @click="setPlaybackRate(rate)"
                        :class="['px-2 py-1 rounded', { 'bg-primary-light text-white': playbackRate === rate, 'bg-gray-200 text-gray-700': playbackRate !== rate }]"
                        class="transition duration-300 ease-in-out text-xs">
                        {{ rate }}x
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
iframe {
    width: 100% !important;
    height: 100% !important;
}
</style>