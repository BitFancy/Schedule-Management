<template>
    <div class="flex items-center justify-between p-8">
        <h1 class="font-bold text-lg">
            {{ title }}
        </h1>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

    defineProps({
        title: String,
    })

</script>