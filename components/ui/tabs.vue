<template>
    <div class="bg-gray-50 border-[1px] border-gray-200 border-solid flex flex-row gap-[8px] items-center justify-start p-1 rounded-2xl text-sm w-max">
        <template v-for="(tab, index) in tabs" :key="index">
            <div :class="['flex flex-row gap-[8px] items-center justify-start overflow-hidden px-6 py-2 rounded-smi', selected == index && 'bg-white border-1 border-gray-200 border rounded-2xl']">
                <div class="font-medium leading-[24px] relative">
                    {{ tab }}
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">

    defineProps({
        tabs: {
            type:     Array,
            required: true
        },
    })

    const selected = ref(0)

</script>