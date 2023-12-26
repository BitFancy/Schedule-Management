<template>
    <div>
        <!-- heading -->
        <div>
            <p class="font-semibold leading-7 mt-1 px-1.5 text-4xl text-gray-900">
                Tags
            </p>
            <p class="mb-3 pt-5 text-gray-900 text-left">
                Take control of your mailing service by creating personalized tags for your contacts.
            </p>
        </div>
        <!-- tag-empty-state -->
        <div class="border-2 border-slate-300 flex flex-col justify-between mt-7 px-1.5 py-1.5 rounded-md sm:flex-row w-full">
            <div class="flex items-center px-1.5 py-1.5">
                <img src="../../../assets/svg/infor.svg" alt="image" />
                <p class="text-gray-900 text-left">
                    &nbsp;Learn more about Tags Read Docs
                </p>
            </div>
            <ui-button white class="items-center px-4 py-2.5">
                Read Docs
                <arrow-up-right-icon style="height: 22px" />
            </ui-button>
        </div>
        <!---------------------------------- first page ---------------------------------------->
        <div v-if="projects.length > 1" class="mt-12">
            <ui-tag-state />
            <p class="font-semibold leading-7 mt-10 px-1.5 py-1.5 text-2xl text-gray-900">
                Quick Action
            </p>
            <div class="gap-4 grid grid-cols-3 pt-6">
                <ui-action-card action="Create" description="Tags are a quick way to segment your contact list" @click="setModalShow(true)" />
                <ui-action-card action="Assign Tag" description="Assign tags to a specific contact to easily target" :image="2" />
                <ui-action-card action="Send a Targeted Campaign" description="Target a specific segment in your contact list" :image="3" />
            </div>
        </div>
        <!---------------------------------------------- second page----------------------------- -->
        <div v-if="projects.length < 0">
            <!-- tags list -->
            <div class="">
                <div class="flex flex-row justify-between py-8">
                    <div class="flex items-center">
                        <div class="flex-0 min-w-0 pr-4 sm:pr-4">
                            <input type="checkbox" class="-mt-1 border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                        </div>
                        <span class="font-medium text-primary-600">select all</span>
                    </div>
                    <!-- ------------------------Action --------------------------------------------->
                    <div>
                        <m-menu as="div">
                            <menu-button class="border-2 flex flex-row pl-3 pr-2 pt-2 rounded">
                                Action
                                <img src="../../../assets/svg/arrow-down.svg" class="px-2 py-2.5" alt="image" />
                            </menu-button>
                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <menu-item #default="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Rename
                                        <span class="sr-only">, {{ $project.name }}</span>
                                    </a>
                                </menu-item>
                            </transition>
                        </m-menu>
                    </div>
                    <!-- check box -->
                    <!------------------------- search bar-------------------------------->
                    <div class="w-1/3">
                        <label for="mobile-search-candidate" class="sr-only">Search</label>
                        <label for="desktop-search-candidate" class="sr-only">Search</label>
                        <div class="flex rounded-md shadow-sm w-auto w-full">
                            <div class="flex-grow focus-within:z-10 relative">
                                <div class="absolute flex inset-y-0 items-center left-0 pl-3 pointer-events-none">
                                    <magnifying-glass-icon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                                </div>
                                <input id="mobile-search-candidate" type="text" name="mobile-search-candidate" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 pl-10 placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-l-md rounded-none sm:hidden text-gray-900 w-full" placeholder="Search" />
                                <input id="desktop-search-candidate" type="text" name="desktop-search-candidate" class="border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 hidden leading-6 pl-10 placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-l-md rounded-none sm:block text-gray-900 text-sm w-full" placeholder="Search tag" />
                            </div>
                        </div>
                    </div>
                    <!------------------------ Add tag ----------------------------------------->
                    <div class="flex flex-0 space-x-2">
                        <a href="#" class="bg-primary-600 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold gap-x-1 hover:bg-primary-500 items-center ml-auto px-3 py-2 rounded-md shadow-sm text-sm text-white">
                            <plus-small-icon class="-ml-1.5 h-5 w-5" aria-hidden="true" />Add tag
                        </a>
                    </div>
                </div>
            </div>
            <hr class="mb-1" />
            <div class="border-2 border-slate-300 lg:px-8 max-w-7xl mx-auto px-4 rounded sm:px-6 text-primary-600">
                <ul role="list" class="divide-gray-100 divide-y">
                    <li v-for="project in projects" :key="project.id" class="flex gap-x-6 items-center justify-between py-5">
                        <div class="flex items-center">
                            <div class="flex-0 min-w-0 pr-4 sm:pr-4">
                                <input type="checkbox" class="-mt-1 border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                            </div>
                            <div class="min-w-0">
                                <div class="flex gap-x-3 items-start">
                                    <p class="font-semibold leading-6 text-gray-900 text-sm">
                                        {{ project.name }}
                                    </p>
                                    <p :class="['text-gray-600 bg-gray-50 ring-gray-500/10', 'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset']">
                                        500 contacts
                                    </p>
                                </div>
                                <div class="flex gap-x-2 items-center leading-5 mt-1 text-gray-500 text-xs">
                                    <p class="whitespace-nowrap">
                                        Created on <time :datetime="project.dueDateTime">{{ project.dueDate }}</time>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-none gap-x-4 items-center">
                            <nuxt-link to="/contacts" class="bg-white font-semibold hidden hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm">
                                View tag<span class="sr-only">, {{ project.name }}</span>
                            </nuxt-link>
                            <m-menu as="div" class="flex-none relative">
                                <menu-button class="-m-2.5 block hover:text-gray-900 p-2.5 text-gray-500">
                                    <span class="sr-only">Open options</span>
                                    <ellipsis-vertical-icon class="h-5 w-5" aria-hidden="true" />
                                </menu-button>
                                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                    <menu-items class="absolute bg-white focus:outline-none mt-2 origin-top-right py-2 right-0 ring-1 ring-gray-900/5 rounded-md shadow-lg w-32 z-10">
                                        <menu-item #default="{ active }">
                                            <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Rename
                                                <span class="sr-only">, {{ project.name }}</span></a>
                                        </menu-item>
                                        <menu-item #default="{ active }">
                                            <nuxt-link to="/contacts/tags/bulk" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">
                                                Edit Tag<span class="sr-only">, {{ project.name }}</span>
                                            </nuxt-link>
                                        </menu-item>
                                        <menu-item #default="{ active }">
                                            <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">
                                                ExportCSV<span class="sr-only">, {{ project.name }}</span></a>
                                        </menu-item>
                                        <menu-item #default="{ active }">
                                            <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">SendCompaign
                                                <span class="sr-only">, {{ project.name }}</span></a>
                                        </menu-item>
                                        <menu-item #default="{ active }">
                                            <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Duplicate<span class="sr-only">, {{ project.name }}</span></a>
                                        </menu-item>
                                        <menu-item #default="{ active }">
                                            <a href="#" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900 text-green-500']">Delete<span class="sr-only">, {{ project.name }}</span></a>
                                        </menu-item>
                                    </menu-items>
                                </transition>
                            </m-menu>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <modal :modelValue="showModal" :setModalShow="setModalShow" />
</template>
  
<script setup>

    import { PlusSmallIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
    // import { PlusSmallIcon, BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

    import { Menu as MMenu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
    import { ArrowUpRightIcon } from '@heroicons/vue/20/solid'

    import modal from '~/components/ui/modal.vue'

    import { ref } from 'vue';

    // Define reactive state using ref
    const showModal = ref(false);

    // Define methods
    function setModalShow(value) {
        showModal.value = value;
    }


    const projects = [
        {
            id:          1,
            name:        'DEV',
            href:        '#',
            status:      'Complete',
            createdBy:   'Leslie Alexander',
            dueDate:     'March 17, 2023',
            dueDateTime: '2023-03-17T00:00Z',
        },
        {
            id:          2,
            name:        'PROMOTIONS',
            href:        '#',
            status:      'In progress',
            createdBy:   'Leslie Alexander',
            dueDate:     'May 5, 2023',
            dueDateTime: '2023-05-05T00:00Z',
        },
        {
            id:          3,
            name:        'NEWSLETTER',
            href:        '#',
            status:      'In progress',
            createdBy:   'Courtney Henry',
            dueDate:     'May 25, 2023',
            dueDateTime: '2023-05-25T00:00Z',
        },
        {
            id:          4,
            name:        'ACTIVE',
            href:        '#',
            status:      'In progress',
            createdBy:   'Leonard Krasner',
            dueDate:     'June 7, 2023',
            dueDateTime: '2023-06-07T00:00Z',
        },
        {
            id:          5,
            name:        'TRANSACTING',
            href:        '#',
            status:      'Archived',
            createdBy:   'Courtney Henry',
            dueDate:     'June 10, 2023',
            dueDateTime: '2023-06-10T00:00Z',
        },
    ]



// const articles = [
//     {
//         name: 'Whare are tags and how are they used?',
//         text: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     },
//     {
//         name: 'Improve campaign performance with tags',
//         text: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     },
//     {
//         name: 'Start automating tags creation',
//         text: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     },
// ]

</script>