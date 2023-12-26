<template>
    <disclosure #default="{ open }" as="nav" class="dark:border-b dark:border-border shadow">
        <div class="lg:px-8 mx-auto px-2 sm:px-4">
            <div class="flex h-16 justify-between">
                <div class="flex lg:px-0 px-2">
                    <div class="flex flex-shrink-0 items-center">
                        <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=primary&shade=600" alt="Your Company" /> -->

                        <svg class="h-8 w-auto" height="45" viewBox="0 0 76 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.4 44.6C0.75 43 0.4 41.35 0.4 39.7C0.4 39 0.55 37.85 0.8 36.3C1.05 34.75 2 33.05 3.65 31.15C5.3 29.3 7.2 28.1 9.3 27.6C11.4 27.1 13.1 26.85 14.5 26.85C16.65 26.85 19.05 27.2 21.7 27.9L21.55 28.8C21.3 30 21.2 31.3 21.2 31.8C21.2 33.55 21.55 36.9 24.9 36.9C28.8 36.9 31.25 30.9 33.85 23.85C35.4 19.4 37.35 15.2 39.6 11.25C38.05 10.9 36.55 10.6 35.1 10.25C32.15 9.5 29.95 9.1 28.6 9.1C27.35 9.1 26.6 9.4 26.3 9.95C26 10.55 25.85 11 25.85 11.4C25.85 11.75 26 12.2 26.25 12.75C26.5 13.3 27.15 13.55 28.1 13.6C27.85 15.2 26.65 20.75 20.1 20.75C17.55 20.75 15.55 20.05 14.2 18.7C12.8 17.35 12 16 11.85 14.75C11.7 13.5 11.6 12.6 11.6 12.1C11.6 9.15 12.7 5.4 16.3 2.6C18.05 1.25 20.3 0.549997 23.05 0.549997C27.8 0.549997 32.25 2.2 36.65 3.95C39 4.9 41.35 5.7 43.7 6.35C45.75 4.6 48.2 3.55 51.2 3.55C52.95 3.55 54.3 3.95 55.2 4.7C56.1 5.45 56.55 6.1 56.6 6.65C56.6 7.2 56.6 7.45 56.6 7.5C56.6 9.5 54.9 11.5 51.15 12.15L51.55 24.5L51.5 24.8C54.25 17.25 58 10.55 62.85 6.55C65.3 4.55 68.05 3.55 71.1 3.55C75.35 3.55 75.6 6.2 75.6 7.45C75.6 7.95 75.5 9.05 75.15 10.05L74.9 10.8C74.15 10.6 73.45 10.5 72.75 10.5C68.15 10.5 63.6 15.5 60.05 24.45C58.3 28.9 56.85 33.35 55.8 37.75C54.75 42.15 54 45.6 53.65 48.15H44.95V16.95C44.4 18.4 43.85 20 43.3 21.7C40.7 29.45 37.25 38.95 31.3 45.4C27.25 49.8 21.9 52.6 14.7 52.6C7.75 52.6 3.25 49.2 1.4 44.6Z" fill="#095ce5" />
                            <defs xmlns="http://www.w3.org/2000/svg">
                                <linearGradient id="%%GRADIENT_ID%%" x1="33.999" x2="1" y1="16.181" y2="16.181" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="%%GRADIENT_TO%%" />
                                    <stop offset="1" stop-color="%%GRADIENT_FROM%%" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div class="hidden lg:flex lg:ml-6 lg:space-x-8">
                        <!-- Current: "border-primary text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                        <nuxt-link v-for="(item, index) in menu" :key="index" :to="item.uri" :class="{ 'border-b-2 font-medium inline-flex items-center pt-1 px-1 dark:text-white text-gray-900 text-sm': true, 'border-primary': index == current, 'border-transparent hover:border-gray-300 hover:text-gray-700': index != current }">
                            {{ item.name }}
                        </nuxt-link>
                    </div>
                </div>
                <div class="flex flex-1 items-center justify-center lg:justify-end lg:ml-6 px-2">
                    <div class="lg:max-w-xs max-w-lg w-full">
                        <label for="search" class="sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute flex inset-y-0 items-center left-0 pl-3 pointer-events-none">
                                <magnifying-glass-icon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                            </div>
                            <input id="search" name="search" class="bg-white block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 pl-10 placeholder:text-gray-400 pr-3 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md sm:leading-6 sm:text-sm text-gray-900 w-full" placeholder="Search" type="search" />
                        </div>
                    </div>
                </div>
                <div class="flex items-center lg:hidden">
                    <!-- Mobile menu button -->
                    <disclosure-button class="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                        <span class="sr-only">Open main menu</span>
                        <bars3-icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <x-mark-icon v-else class="block h-6 w-6" aria-hidden="true" />
                    </disclosure-button>
                </div>
                <div class="hidden lg:flex lg:items-center lg:ml-4">
                    <!-- Profile dropdown -->
                    <menu-x as="div" class="flex-shrink-0 ml-4 relative">
                        <div>
                            <menu-button class="bg-white flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-full text-sm">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 rounded-full w-8" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </menu-button>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <menu-items class="absolute bg-white focus:outline-none mt-2 origin-top-right py-1 right-0 ring-1 ring-black ring-opacity-5 rounded-md shadow-lg w-48 z-10">
                                <menu-item #default="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                                    xz
                                </menu-item>
                                <menu-item #default="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                                </menu-item>
                                <menu-item #default="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                                </menu-item>
                            </menu-items>
                        </transition>
                    </menu-x>
                </div>
            </div>
        </div>

        <disclosure-panel class="lg:hidden">
            <div class="pb-3 pt-2 space-y-1">
                <!-- Current: "bg-primary-50 border-primary text-primary-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
                <disclosure-button as="a" href="#" class="bg-primary-50 block border-l-4 border-primary font-medium pl-3 pr-4 py-2 text-base text-primary-700">
                    Dashboard
                </disclosure-button>
                <disclosure-button as="a" href="#" class="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 pl-3 pr-4 py-2 text-base text-gray-600">
                    Contacts
                </disclosure-button>
                <disclosure-button as="a" href="#" class="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 pl-3 pr-4 py-2 text-base text-gray-600">
                    Templates
                </disclosure-button>
                <disclosure-button as="a" href="#" class="block border-l-4 border-transparent font-medium hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 pl-3 pr-4 py-2 text-base text-gray-600">
                    Configuration
                </disclosure-button>
            </div>
            <div class="border-gray-200 border-t pb-3 pt-4">
                <div class="space-y-1">
                    <disclosure-button as="a" href="#" class="block font-medium hover:bg-gray-100 hover:text-gray-800 px-4 py-2 text-base text-gray-500">
                        Settings
                    </disclosure-button>
                    <disclosure-button as="a" href="#" class="block font-medium hover:bg-gray-100 hover:text-gray-800 px-4 py-2 text-base text-gray-500">
                        Sign out
                    </disclosure-button>
                </div>
            </div>
        </disclosure-panel>
    </disclosure>
</template>

<script setup>

    import { Disclosure, DisclosureButton, DisclosurePanel, Menu as MenuX, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

    const menu = [
        {
            name: 'Dashboard',
            uri:  '/dashboard',
        },
        {
            name: 'Contacts',
            uri:  '/contacts',
        },
        {
            name: 'Templates',
            uri:  '/templates',
        },
        {
            name: 'Invoices',
            uri:  '/billing',
        },
        {
            name: 'Settings',
            uri:  '/settings',
        },
    ]

    const route = useRoute()
    const current = computed(() => {
        const path = route.path
        return menu.findIndex((o) => path == o.uri || path.startsWith(o.uri + '/'))
    })

</script>
