<template>
    <component
        :is="component"
        :to="to"
        :class="{
            'cursor-pointer flex flex-row gap-2 px-3 py-2 rounded justify-center': true,
            'bg-primary text-white': primary,
            'bg-white text-gray-800 border-gray-200 border': white,
            'w-full': block,
            'px-8 py-2.5': large,
        }"
    >
        <slot />
    </component>
</template>

<script setup>

    const props = defineProps({
        primary: Boolean,
        white:   Boolean,
        to:      String,
        block:   Boolean,
        large:   Boolean,
    })

    const component = computed(() => {

        if (props.to || props.href) 
            return resolveComponent('NuxtLink')

        return 'button'
    })

</script>