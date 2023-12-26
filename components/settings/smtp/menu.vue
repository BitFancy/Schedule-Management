<template>
    <div
        ref="menuRef"
        class="inline-block relative text-gray-800 text-left"
    >
        <div class="w-56">
            <span class="rounded-md shadow-sm">
                <button
                    id="options-menu" type="button"
                    class="bg-white border border-gray-200 duration-150 ease-in-out focus:bg-primary-50 focus:border-0 focus:outline-none focus:shadow-outline-blue focus:text-primary font-medium h-10 hover:text-primary inline-flex items-center justify-between leading-6 px-4 py-4 rounded-md text-[#667085] text-sm transition w-full"
                    aria-haspopup="true" aria-expanded="true" @click="menuVisible = !menuVisible"
                >
                    <div class="flex flex-grow gap-2 items-center justify-start">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2634 12.9141L5.65303 13.7904C5.76886 14.0512 5.95788 14.2729 6.19718 14.4284C6.43648 14.5839 6.71577 14.6667 7.00118 14.6667C7.28659 14.6667 7.56588 14.5839 7.80518 14.4284C8.04448 14.2729 8.2335 14.0512 8.34933 13.7904L8.73896 12.9141C8.87766 12.6031 9.11096 12.3439 9.40562 12.1733C9.70215 12.0023 10.0452 11.9294 10.3856 11.9652L11.339 12.0667C11.6227 12.0967 11.9091 12.0437 12.1634 11.9142C12.4177 11.7847 12.6289 11.5842 12.7716 11.337C12.9143 11.09 12.9824 10.8069 12.9674 10.5219C12.9524 10.237 12.855 9.96253 12.6871 9.73185L12.1227 8.9563C11.9217 8.67809 11.8143 8.34321 11.816 8C11.8159 7.65773 11.9243 7.32423 12.1256 7.04741L12.6901 6.27185C12.858 6.04117 12.9553 5.76671 12.9703 5.48178C12.9853 5.19685 12.9173 4.91369 12.7745 4.66667C12.6319 4.41949 12.4207 4.21899 12.1664 4.08948C11.9121 3.95998 11.6257 3.90702 11.3419 3.93704L10.3886 4.03852C10.0481 4.07427 9.70511 4.00141 9.40859 3.83037C9.11334 3.65883 8.87997 3.39824 8.74192 3.08593L8.34933 2.20963C8.2335 1.94878 8.04448 1.72714 7.80518 1.5716C7.56588 1.41605 7.28659 1.33329 7.00118 1.33333C6.71577 1.33329 6.43648 1.41605 6.19718 1.5716C5.95788 1.72714 5.76886 1.94878 5.65303 2.20963L5.2634 3.08593C5.12535 3.39824 4.89198 3.65883 4.59674 3.83037C4.30021 4.00141 3.95718 4.07427 3.61674 4.03852L2.66044 3.93704C2.37666 3.90702 2.09026 3.95998 1.83598 4.08948C1.5817 4.21899 1.37045 4.41949 1.22785 4.66667C1.08506 4.91369 1.01703 5.19685 1.03202 5.48178C1.04701 5.76671 1.14437 6.04117 1.31229 6.27185L1.87673 7.04741C2.07803 7.32423 2.18643 7.65773 2.18636 8C2.18643 8.34227 2.07803 8.67577 1.87673 8.95259L1.31229 9.72815C1.14437 9.95883 1.04701 10.2333 1.03202 10.5182C1.01703 10.8031 1.08506 11.0863 1.22785 11.3333C1.37059 11.5804 1.58187 11.7808 1.83611 11.9103C2.09036 12.0398 2.37668 12.0928 2.66044 12.063L3.61377 11.9615C3.95422 11.9257 4.29725 11.9986 4.59377 12.1696C4.89012 12.3407 5.12458 12.6013 5.2634 12.9141Z" stroke="#1D46F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.99999 10C8.10456 10 8.99999 9.10457 8.99999 8C8.99999 6.89543 8.10456 6 6.99999 6C5.89542 6 4.99999 6.89543 4.99999 8C4.99999 9.10457 5.89542 10 6.99999 10Z" stroke="#1D46F3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span> Settings </span>
                    </div>
                    <img
                        src="https://s.svgbox.net/hero-solid.svg?ic=chevron-down&fill=grey-800"
                        class="-mr-1 h-5 ml-2 w-5"
                    />
                </button>
            </span>
        </div>
        <transition
            enter-active-class="transition ease-out duration-100" enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95"
        >
            <div
                v-if="menuVisible"
                class="absolute border mt-1 origin-top-right overflow-hidden right-0 rounded-md shadow-lg text-sm w-56 z-20"
            >
                <div
                    class="bg-white rounded-md shadow-xs" role="menu" aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div class="flex flex-col gap-1 py-1">
                        <nuxt-link to="/" class="flex font-medium gap-2 hover:bg-primary-300 hover:text-white items-center justify-start leading-6 px-3 py-3 rounded-md text-[#667085] text-sm">
                            <div class="w-1/12" />
                            <span class="flex-grow"> General </span>
                        </nuxt-link>
                        <nuxt-link to="/" class="cursor-pointer flex font-medium gap-2 hover:bg-primary-300 hover:text-white items-center justify-start leading-6 px-3 py-3 rounded-md text-[#667085] text-sm">
                            <div class="w-1/12" />
                            <span class="flex-grow"> Security </span>
                        </nuxt-link>

                        <nuxt-link to="/" class="cursor-pointer flex font-medium gap-2 hover:bg-primary-300 hover:text-white items-center justify-start leading-6 px-3 py-3 rounded-md text-[#667085] text-sm">
                            <div class="w-1/12" />
                            <span class="flex-grow"> Notifications </span>
                        </nuxt-link>

                        <nuxt-link to="/" class="cursor-pointer flex font-medium gap-2 hover:bg-primary-300 hover:text-white items-center justify-start leading-6 px-3 py-3 rounded-md text-[#667085] text-sm">
                            <div class="w-1/12" />
                            <span class="flex-grow"> Team Members </span>
                        </nuxt-link>
                        <nuxt-link to="/" class="cursor-pointer flex font-medium gap-2 hover:bg-primary-300 hover:text-white items-center justify-start leading-6 px-3 py-3 rounded-md text-[#667085] text-sm">
                            <div class="w-1/12" />
                            <span class="flex-grow"> Contact </span>
                        </nuxt-link>
                        <nuxt-link to="/" class="cursor-pointer flex font-medium gap-2 hover:bg-primary-300 hover:text-white items-center justify-start leading-6 px-3 py-3 rounded-md text-[#667085] text-sm">
                            <div class="w-1/12" />
                            <span class="flex-grow"> Integrations </span>
                        </nuxt-link>
                        <nuxt-link to="/" class="cursor-pointer flex font-medium gap-2 hover:bg-primary-300 hover:text-white items-center justify-start leading-6 px-3 py-3 rounded-md text-[#667085] text-sm">
                            <div class="w-1/12" />
                            <span class="flex-grow"> Mailing Server </span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
    import { useClickAway } from '~/composables/useClickAway'

    const menuVisible = ref(false)

    const closeMenu = () => {
        menuVisible.value = false
    }

    const menuRef = useClickAway(closeMenu)
</script>