<template>
    <div class="container flex flex-col items-center justify-center mx-auto pb-10 pt-20">
        <template v-for="(colors, name) in theme.colors">
            <div v-if="colors[500]" :key="name" class="flex mb-10 space-x-5">
                <div class="2xl:col-end-1 2xl:pt-2.5 font-semibold text-right text-sm w-32">
                    {{ name }}
                </div>
                <div class="2xl:mt-0 gap-x-2 gap-y-3 grid grid-cols-1 mt-3 sm:grid-cols-11 sm:mt-2">
                    <template v-for="(color, nuance) in colors" :key="nuance">
                        <div v-if="n.includes(parseInt(nuance))" class="flex relative">
                            <div class="cursor-pointer flex gap-x-3 items-center sm:block sm:space-y-1.5 w-full">
                                <div
                                    class="dark:ring-1 dark:ring-inset dark:ring-white/10 h-10 rounded sm:w-full w-10"
                                    :style="{ backgroundColor: color }"
                                />
                                <div class="px-0.5">
                                    <div class="2xl:w-full dark:text-white font-medium text-xs w-6">
                                        {{ nuance }}
                                    </div>
                                    <div class="2xl:text-xs font-mono lg:text-[0.625rem] lowercase md:text-xs sm:text-[0.625rem] text-xs">
                                        {{ color }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">

    import theme from '../../assets/theme.mjs'

    const n = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

</script>