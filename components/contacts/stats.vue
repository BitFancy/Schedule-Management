<template>
    <div v-if="stats?.length > 1" class="isolate overflow-hidden relative">
        <!-- Secondary navigation -->
        <header class="pb-4 sm:pb-6">
            <div class="flex flex-wrap gap-6 items-center lg:px-8 max-w-7xl mx-auto px-4 sm:flex-nowrap sm:px-6">
                <h1 class="font-semibold leading-7 text-base text-gray-900">
                    Contacts list
                </h1>
                <div class="flex font-semibold gap-x-8 leading-6 order-last sm:border-gray-200 sm:border-l sm:leading-7 sm:order-none sm:pl-6 sm:w-auto text-sm w-full">
                    <a v-for="item in secondaryNavigation" :key="item.name" :href="item.href" :class="item.current ? 'text-primary-600' : 'text-gray-700'">{{ item.name }}</a>
                </div>
                <div class="flex-1" />
                <div class="flex flex-0 space-x-2">
                    <a href="#" class="bg-primary-600 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold gap-x-1 hover:bg-primary-500 items-center ml-auto px-3 py-2 rounded-md shadow-sm text-sm text-white">
                        <plus-small-icon class="-ml-1.5 h-5 w-5" aria-hidden="true" />
                        Add contact <!-- should also allows to import CSV file -->
                    </a>
                    <a href="#" class="bg-primary-600 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold gap-x-1 hover:bg-primary-500 items-center ml-auto px-3 py-2 rounded-md shadow-sm text-sm text-white">
                        Import contacts <!-- should also allows to import CSV file -->
                    </a>
                    <a href="#" class="bg-primary-600 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold gap-x-1 hover:bg-primary-500 items-center ml-auto px-3 py-2 rounded-md shadow-sm text-sm text-white">
                        Export contacts
                    </a>
                </div>
            </div>
        </header>

        <!-- Stats -->
        <div class="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
            <dl class="grid grid-cols-1 lg:grid-cols-4 lg:px-2 max-w-7xl mx-auto sm:grid-cols-2 xl:px-0">
                <div v-for="(stat, statIdx) in stats" :key="stat.name" :class="[statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '', 'flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8']">
                    <dt class="font-medium leading-6 text-gray-500 text-sm">
                        {{ stat.name }}
                    </dt>
                    <dd :class="[stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700', 'text-xs font-medium']">
                        {{ stat.change }}
                    </dd>
                    <dd class="flex-none font-medium leading-10 text-3xl text-gray-900 tracking-tight w-full">
                        {{ stat.value }}
                    </dd>
                </div>
            </dl>
        </div>

        <div class="-rotate-90 -z-10 absolute blur-3xl left-0 mt-96 opacity-20 origin-top-left sm:-ml-96 sm:-mt-10 sm:left-1/2 sm:opacity-50 sm:rotate-0 sm:transform-gpu sm:translate-y-0 top-full transform-gpu translate-y-40" aria-hidden="true">
            <div class="aspect-[1154/678] bg-gradient-to-br from-[#FF80B5] to-[#9089FC] w-[72.125rem]" style="clip-path: polygon( 100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5% )" />
        </div>
    </div>

    <!-- New Contact List -->
    <newContact v-if="stats?.length < 1" />
</template>

<script setup>

    import newContact from './newContact.vue'
    import {
        PlusSmallIcon,
    } from '@heroicons/vue/20/solid'

    const secondaryNavigation = [
        { name: 'Last 7 days', href: '#', current: true },
        { name: 'Last 30 days', href: '#', current: false },
        { name: 'All-time', href: '#', current: false },
    ]

    const stats = [
        { name: 'Total contacts', value: '5000', change: '+4.75%', changeType: 'positive' },
        { name: 'Active contacts', value: '4500', change: '+54.02%', changeType: 'negative' },
        { name: 'New subscribers', value: '25', change: '-1.39%', changeType: 'positive' },
        { name: 'Unsubscribes', value: '10', change: '+10.18%', changeType: 'negative' },
    ]

</script>