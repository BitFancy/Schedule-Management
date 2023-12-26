<template>
    <div>
        <transition-root as="template" :show="sidebarOpen">
            <d-dialog as="div" class="lg:hidden relative z-50" @close="sidebarOpen = false">
                <transition-child as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="bg-gray-900/80 fixed inset-0" />
                </transition-child>
  
                <div class="fixed flex inset-0">
                    <transition-child as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                        <dialog-panel class="flex flex-1 max-w-xs mr-16 relative w-full">
                            <transition-child as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                                <div class="absolute flex justify-center left-full pt-5 top-0 w-16">
                                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <x-mark-icon class="h-6 text-white w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </transition-child>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->
                            <div class="bg-white flex flex-col gap-y-5 grow overflow-y-auto pb-4 px-6">
                                <div class="flex h-16 items-center shrink-0">
                                    <ui-logo />
                                </div>
                                <nav class="flex flex-1 flex-col">
                                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" class="-mx-2 space-y-1">
                                                <li v-for="item in navigation" :key="item.name">
                                                    <a :href="item.href" :class="[item.current ? 'bg-gray-50 text-primary-600' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                                        <component :is="item.icon" :class="[item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                                        {{ item.name }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="mt-auto">
                                            <a href="#" class="-mx-2 flex font-semibold gap-x-3 group hover:bg-gray-50 hover:text-primary-600 leading-6 p-2 rounded-md text-gray-700 text-sm">
                                                <cog6-tooth-icon class="group-hover:text-primary-600 h-6 shrink-0 text-gray-400 w-6" aria-hidden="true" />
                                                Settings
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </dialog-panel>
                    </transition-child>
                </div>
            </d-dialog>
        </transition-root>
  
        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:flex lg:flex-col lg:inset-y-0 lg:w-72 lg:z-50">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="bg-white border-gray-200 border-r flex flex-col gap-y-5 grow overflow-y-auto pb-4 px-6">
                <div class="flex h-16 items-center shrink-0">
                    <ui-logo />
                </div>
                <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" class="-mx-2 space-y-1">
                                <li v-for="item in navigation" :key="item.name">
                                    <nuxt-link v-if="!item.children" :to="item.href" :class="[item.current ? 'bg-primary-50 text-primary' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                        <component :is="item.icon" :class="[item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                        {{ item.name }}
                                    </nuxt-link>
                                    <disclosure v-else #default="{ open }" as="div">
                                        <disclosure-button :class="['text-gray-700 hover:text-primary-600 hover:bg-gray-50', 'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700']">
                                            <component :is="item.icon" :class="[item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                            {{ item.name }}
                                            <div class="flex-1" />
                                            <chevron-right-icon :class="[open ? 'rotate-90' : '', 'h-5 w-5 shrink-0', item.current ? 'text-primary' : '']" aria-hidden="true" />
                                        </disclosure-button>
                                        <disclosure-panel as="ul" class="-top-1  border-l  border-l-gray-300  border-solid  left-4  mt-1  pl-3  pr-8  relative">
                                            <li v-for="subItem in item.children" :key="subItem.name">
                                                <nuxt-link :to="subItem.href" :class="[subItem.current ? 'bg-primary-50 text-primary' : 'hover:bg-gray-50', 'block rounded-md py-2 pl-6 text-sm leading-6 text-gray-700']">
                                                    {{ subItem.name }}
                                                </nuxt-link>
                                            </li>
                                        </disclosure-panel>
                                    </disclosure>
                                </li>
                            </ul>
                        </li>

                        <li class="mt-auto">
                            <ul role="list" class="-mx-2 space-y-1">
                                <li v-for="item in bottomNavigation" :key="item.name">
                                    <a :href="item.href" :class="[item.current ? 'bg-gray-50 text-primary-600' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold', item.outline ? 'border border-gray-200' : '']">
                                        <component :is="item.icon" :class="[item.current ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600', 'h-6 w-6 shrink-0']" aria-hidden="true" />
                                        {{ item.name }}
                                        <span v-if="item.badge" class="bg-yellow font-medium inline-flex items-center ml-auto px-3 py-1 rounded-full shadow text-white text-xs">{{ item.badge }}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
  
        <div class="lg:pl-72">
            <div class="lg:max-w-7xl lg:mx-auto lg:px-8">
                <div class="flex gap-x-4 h-16 items-center lg:px-0 lg:shadow-none pb-4 pt-6 shadow-sm sm:gap-x-6 sm:px-6">
                    <button type="button" class="-m-2.5 lg:hidden p-2.5 text-gray-700" @click="sidebarOpen = true">
                        <span class="sr-only">Open sidebar</span>
                        <bars3-icon class="h-6 w-6" aria-hidden="true" />
                    </button>
  
                    <!-- Separator -->
                    <div class="bg-gray-200 h-6 lg:hidden w-px" aria-hidden="true" />
  
                    <div class="flex flex-1 gap-x-4 items-center lg:gap-x-6 self-stretch">
                        <!-- <form class="flex flex-1 relative" action="#" method="GET">
                            <ui-input placeholder="Search" type="search" class="w-96" />
                        </form> -->
                        <div class="flex flex-1">
                            <div class="flex flex-col flex-grow gap-[10px] max-w-md">
                                <div class="flex items-center justify-between relative text-black-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute h-6 left-[10px] top-[10px] w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
    
                                    <input id="search" type="search" placeholder="Search" class="bg-white border border-gray-300 font-normal leading-6 px-12 py-[9px] rounded-lg text-gray-400 text-sm w-full" />
                                    <span class="absolute border border-gray-200 font-medium px-3 py-1 right-[10px] rounded-lg text-gray-700 top-[5px]">/</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-x-4 items-center lg:gap-x-6">
                            <button type="button" class="-m-2.5 flex gap-5 hover:text-gray-500 items-center justify-center p-2.5 text-gray-400">
                                <span class="sr-only">View notifications</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9935)">
                                        <path d="M15 1.66666L15.5148 2.69631C15.7361 3.13879 15.8467 3.36003 15.9945 3.55175C16.1256 3.72187 16.2781 3.87439 16.4482 4.00552C16.6399 4.1533 16.8612 4.26392 17.3037 4.48516L18.3333 4.99999L17.3037 5.51482C16.8612 5.73606 16.6399 5.84668 16.4482 5.99446C16.2781 6.12559 16.1256 6.27811 15.9945 6.44823C15.8467 6.63995 15.7361 6.86119 15.5148 7.30367L15 8.33332L14.4852 7.30367C14.2639 6.86119 14.1533 6.63995 14.0055 6.44823C13.8744 6.27811 13.7219 6.12559 13.5518 5.99446C13.36 5.84668 13.1388 5.73606 12.6963 5.51482L11.6667 4.99999L12.6963 4.48516C13.1388 4.26392 13.36 4.1533 13.5518 4.00552C13.7219 3.87439 13.8744 3.72187 14.0055 3.55175C14.1533 3.36003 14.2639 3.13879 14.4852 2.69631L15 1.66666Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17.5 11.1577C16.4075 13.0742 14.3454 14.3662 11.9816 14.3662C8.47589 14.3662 5.63395 11.5243 5.63395 8.0186C5.63395 5.65461 6.92623 3.59244 8.84291 2.49999C4.81648 2.88176 1.66666 6.27243 1.66666 10.3988C1.66666 14.7809 5.21909 18.3333 9.60124 18.3333C13.7274 18.3333 17.1179 15.1838 17.5 11.1577Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9935">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.79514 17.5C7.38275 18.0186 8.15462 18.3333 9 18.3333C9.84537 18.3333 10.6172 18.0186 11.2048 17.5M14 6.66666C14 5.34057 13.4732 4.0688 12.5355 3.13112C11.5978 2.19344 10.3261 1.66666 9 1.66666C7.67391 1.66666 6.40214 2.19344 5.46446 3.13112C4.52678 4.0688 4 5.34057 4 6.66666C4 9.24181 3.35039 11.005 2.62472 12.1712C2.0126 13.1549 1.70654 13.6467 1.71777 13.784C1.73019 13.9359 1.76238 13.9938 1.88481 14.0846C1.99538 14.1667 2.49382 14.1667 3.49071 14.1667H14.5093C15.5062 14.1667 16.0046 14.1667 16.1152 14.0846C16.2376 13.9938 16.2698 13.9359 16.2822 13.784C16.2934 13.6467 15.9874 13.1549 15.3753 12.1712C14.6496 11.005 14 9.24181 14 6.66666Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <!-- <bell-icon class="h-6 w-6" aria-hidden="true" /> -->
                            </button>

                            <!-- Profile dropdown -->
                            <m-menu as="div" class="relative">
                                <menu-button class="border border-1 border-gray-300 flex hover:bg-gray-100 items-center p-1.5 rounded">
                                    <span class="sr-only">Open user menu</span>
                                    <span class="hidden lg:flex lg:items-center">
                                        <span class="font-medium ml-4 text-[#344054] text-sm" aria-hidden="true">Tom Cook</span>
                                        <chevron-down-icon class="h-5 ml-2 text-gray-400 w-5" aria-hidden="true" />
                                    </span>
                                </menu-button>
                                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                    <menu-items class="absolute bg-white focus:outline-none mt-2.5 origin-top-right py-2 right-0 ring-1 ring-gray-900/5 rounded-md shadow-lg w-32 z-10">
                                        <menu-item v-for="item in userNavigation" :key="item.name" #default="{ active }">
                                            <a :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 font-medium text-[#344054] text-sm']">{{ item.name }}</a>
                                        </menu-item>
                                    </menu-items>
                                </transition>
                            </m-menu>
                        </div>
                    </div>
                </div>
            </div>
  
            <main class="py-10">
                <div class="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
  
<script setup lang="ts">

    import { ref } from 'vue'
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

    import {
        Dialog as DDialog,
        DialogPanel,
        Menu as MMenu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
    } from '@headlessui/vue'

    import {
        Bars3Icon,
        // BellIcon,
        Cog6ToothIcon,
        DocumentDuplicateIcon,
        HomeIcon,
        UsersIcon,
        XMarkIcon,
        PaperAirplaneIcon,
        InformationCircleIcon,
        StarIcon,
    } from '@heroicons/vue/24/outline'

    import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
  
    const route = useRoute()

    const navItems = [
        { 
            name: 'Dashboard', 
            href: '/dashboard', 
            icon: HomeIcon, 
        },
        { 
            name:     'Contacts', 
            href:     '/contacts', 
            icon:     UsersIcon, 
            children: [
                { name: 'contacts list', href: '/contacts' },
                { name: 'tags', href: '/contacts/tags' },
                { name: 'segments', href: '/contacts/segments' },
                { name: 'events', href: '/contacts/events' },
            ],
        },
        { 
            name:     'Campaigns', 
            href:     '/templates', 
            icon:     PaperAirplaneIcon, 
            children: [
                { name: 'overview', href: '/templates' },
                { name: 'campaigns', href: '/templates/campaigns' },
                { name: 'transactional templates', href: '/templates/transactional' },
                { name: 'layouts', href: '/templates/layouts' },
            ],
        },
        { 
            name:     'Billing', 
            href:     '/billing', 
            icon:     DocumentDuplicateIcon, 
            children: [
                { name: 'current plan', href: '/billing/current-plan' },
                { name: 'invoices', href: '/billing' },
                { name: 'payment settings', href: '/billing/settings' },
            ],
        },
        { 
            name:     'Settings', 
            href:     '/settings', 
            icon:     Cog6ToothIcon, 
            children: [
                { name: 'General', href: '/settings' },
                { name: 'Security', href: '/settings/security' },
                { name: 'Notifications', href: '/settings/notifications' },
                { name: 'Team Members', href: '/settings/members' },
                { name: 'Contact Preferences', href: '/settings/contacts' },
                { name: 'Integrations', href: '/settings/integrations' },
                { name: 'Mailing Server', href: '/settings/smtp' },
            ],
        },
    ]

    const navigation = computed(() => navItems.map((o) => ({
        ...o,
        current:  route.path.startsWith(o.href),
        children: o.children?.map((c) => ({
            ...c,
            current: route.path === c.href,
        })),
    })))

    const bottomNavigation = [
        { name: 'Support', href: '#', icon: InformationCircleIcon, current: false },
        { name: 'Free Plan', href: '#', icon: StarIcon, current: false, outline: true, badge: 'Upgrade' },
    ]


    const userNavigation = [
        { name: 'Your profile', href: '#' },
        { name: 'Sign out', href: '#' },
    ]
  
    const sidebarOpen = ref(false)

    // todo: sub menu
    // todo: responsive
    // todo: top bar

  </script>