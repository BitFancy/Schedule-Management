<template>
    <div>
        <div class="flex justify-between">
            <div>
                <h2 class="font-semibold leading-7 text-base text-gray-900">
                    API keys
                </h2>
                <p class="leading-6 mt-1 text-gray-500 text-sm">
                    We'll always let you know about important changes, but you pick what else you want to hear about.
                </p>
            </div>

            <div>
                <nuxt-link href="/settings/new-key" class="bg-primary-600 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold gap-x-1 hover:bg-primary-500 items-center ml-auto px-3 py-2 rounded-md shadow-sm text-sm text-white">
                    <plus-small-icon class="-ml-1.5 h-5 w-5" aria-hidden="true" />
                    New key
                </nuxt-link>
            </div>
        </div>

        <!-- tags list -->
        <!-- <div  class="mt-6 sm:border-t sm:divide-gray-900/10 sm:divide-y"></div> -->
        <div class="border-gray-900/10 border-t mt-6 pt-6">
            <div class="flex items-center justify-between mb-5">
                <div class="flex items-center">
                    <div class="flex-0 min-w-0 px-7 relative sm:px-6">
                        <div v-if="false" class="absolute bg-primary-600 inset-y-0 left-0 w-0.5" />
                        <input type="checkbox" class="-mt-2 absolute border-gray-300 focus:ring-primary-600 h-4 left-4 rounded text-primary-600 top-1/2 w-4" />
                    </div>
                    <span class="font-medium text-primary-600">select all</span>
                </div>

                <!-- search bar-->
                <div class="flex font-semibold gap-x-8 order-last sm:order-none sm:w-auto text-sm w-full">
                    <label for="mobile-search-candidate" class="sr-only">Search</label>
                    <label for="desktop-search-candidate" class="sr-only">Search</label>
                    <div class="flex rounded-md shadow-sm">
                        <div class="flex-grow focus-within:z-10 relative">
                            <div class="absolute flex inset-y-0 items-center left-0 pl-3 pointer-events-none">
                                <magnifying-glass-icon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                            </div>
                            <input id="mobile-search-candidate" type="text" name="mobile-search-candidate" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 pl-10 placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-l-md rounded-none sm:hidden text-gray-900 w-full" placeholder="Search" />
                            <input id="desktop-search-candidate" type="text" name="desktop-search-candidate" class="border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 hidden leading-6 pl-10 placeholder:text-gray-400 py-1.5 ring-1 ring-gray-300 ring-inset rounded-l-md rounded-none sm:block text-gray-900 text-sm w-full" placeholder="Search key" />
                        </div>
                        <button type="button" class="-ml-px font-semibold gap-x-1.5 hover:bg-gray-50 inline-flex items-center px-3 py-2 relative ring-1 ring-gray-300 ring-inset rounded-r-md text-gray-900 text-sm">
                            <bars-arrow-up-icon class="-ml-0.5 h-5 text-gray-400 w-5" aria-hidden="true" />
                            Sort
                            <chevron-down-icon class="-mr-1 h-5 text-gray-400 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr class="mb-1" />
        <div>
            <ul role="list" class="divide-gray-100 divide-y">
                <li v-for="project in projects" :key="project.id" class="flex gap-x-6 items-center justify-between py-5">
                    <div class="flex flex-1 items-center">
                        <div class="flex-0 min-w-0 px-7 relative sm:px-6">
                            <div v-if="selectedPeople.includes(project.id)" class="absolute bg-primary-600 inset-y-0 left-0 w-0.5" />
                            <input v-model="selectedPeople" type="checkbox" class="-mt-2 absolute border-gray-300 focus:ring-primary-600 h-4 left-4 rounded text-primary-600 top-1/2 w-4" :value="project.id" />
                        </div>
                        <div class="min-w-0">
                            <div class="flex gap-x-3 items-start">
                                <p class="font-semibold leading-6 text-gray-900 text-sm">
                                    API KEY
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/4">
                        ✅ IP Whitelisting enabled
                    </div>
                    <div class="flex flex-none gap-x-4 items-center justify-end w-1/6">
                        <a :href="project.href" class="bg-white font-semibold hidden hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm">View key<span class="sr-only">, {{ project.name }}</span></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
  
  <script setup>

    import { PlusSmallIcon, BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

    const selectedPeople = []

    const projects = [
        {
            id:          1,
            name:        'Sacha Vandamme',
            href:        '#',
            status:      'Complete',
            createdBy:   'Leslie Alexander',
            dueDate:     'March 17, 2023',
            dueDateTime: '2023-03-17T00:00Z',
        },
        {
            id:          2,
            name:        'Sacha B',
            href:        '#',
            status:      'In progress',
            createdBy:   'Leslie Alexander',
            dueDate:     'May 5, 2023',
            dueDateTime: '2023-05-05T00:00Z',
        },
        {
            id:          3,
            name:        'Sacha Vandamme',
            href:        '#',
            status:      'In progress',
            createdBy:   'Courtney Henry',
            dueDate:     'May 25, 2023',
            dueDateTime: '2023-05-25T00:00Z',
        },
        {
            id:          4,
            name:        'Sacha Vandamme',
            href:        '#',
            status:      'In progress',
            createdBy:   'Leonard Krasner',
            dueDate:     'June 7, 2023',
            dueDateTime: '2023-06-07T00:00Z',
        },
        {
            id:          5,
            name:        'Sacha Vandamme',
            href:        '#',
            status:      'Archived',
            createdBy:   'Courtney Henry',
            dueDate:     'June 10, 2023',
            dueDateTime: '2023-06-10T00:00Z',
        },
    ]

</script>