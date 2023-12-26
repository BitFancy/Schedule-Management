<template>
    <div>
        <div class="lg:px-8 max-w-7xl mx-auto px-6">
            <div class="lg:max-w-none max-w-2xl mx-auto">
                <div class="flex gap-10 justify-between">
                    <div>
                        <h2 class="font-bold sm:text-4xl text-3xl text-gray-900 tracking-tight">
                            Giannis
                        </h2>
                        <p class="leading-8 mt-4 text-gray-600 text-lg">
                            Giannis@gmail.com
                        </p>
                    </div>
                    <div class="flex gap-3">
                        <ui-button primary class="h-min">
                            unsubscribe
                        </ui-button>
                        <ui-button primary class="h-min">
                            remove
                        </ui-button>
                    </div>
                </div>

                <!-- show stats per channel -->
                <div class="bg-gray-100 card mt-8 rounded-2xl">
                    <div class="grid grid-cols-2 text-left">
                        <div class="sm:hidden">
                            <label for="tabs" class="sr-only">Select a tab</label>
                            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                            <select id="tabs" name="tabs" class="block border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md w-full">
                                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
                                    {{ tab.name }}
                                </option>
                            </select>
                        </div>
                        <div class="hidden sm:block">
                            <nav class="flex space-x-4" aria-label="Tabs">
                                <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'bg-gray-200 text-gray-800' : 'text-gray-600 hover:text-gray-800', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</a>
                            </nav>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2">
                        <div v-for="stat in stats" :key="stat.name" class="px-3 py-6">
                            <p class="font-medium leading-6 text-black-400 text-sm">
                                {{ stat.name }}
                            </p>
                            <p class="flex gap-x-2 items-baseline mt-2">
                                <span class="font-semibold text-4xl text-primary-900 tracking-tight">{{ stat.value }}</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- profile -->
                <dl class="card grid grid-cols-2 mt-8 rounded-2xl text-left">
                    <div class="col-span-2 mb-2">
                        Subscribed 1st juanry 2023
                    </div>

                    <table>
                        <tbody>
                            <tr>
                                <th class="w-48">
                                    Email Address:
                                </th>
                                <td>sacha@skyhark.be</td>
                            </tr>
                            <tr>
                                <th>Phone number:</th>
                                <td>05911414</td>
                            </tr>
                            <tr>
                                <th>Given name:</th>
                                <td>sacha</td>
                            </tr>
                            <tr>
                                <th>Last name:</th>
                                <td>vandamme</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <th class="w-48">
                                    Language
                                </th>
                                <td>FR</td>
                            </tr>
                            <tr>
                                <th>Custom field 1:</th>
                                <td>test</td>
                            </tr>
                            <tr>
                                <th>Custom field 2:</th>
                                <td>test</td>
                            </tr>
                        </tbody>
                    </table>


                    <nuxt-link to="#" class="bg-white font-semibold hidden hover:bg-gray-50 mt-3 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm w-max">
                        update details
                    </nuxt-link>

                    <hr class="col-span-2 my-6" />
                    <div class="col-span-2">
                        <b>Tags:</b>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-gray-200 flex gap-1 items-center px-2 py-1 rounded-full text-gray-600 text-sm">
                                Dev
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                            <span class="bg-gray-200 flex gap-1 items-center px-2 py-1 rounded-full text-gray-600 text-sm">
                                FR
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                            <span class="bg-gray-200 flex gap-1 items-center px-2 py-1 rounded-full text-gray-600 text-sm">
                                Marketing
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                        </div>

                        <nuxt-link to="#" class="bg-white font-semibold hidden hover:bg-gray-50 mt-3 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm w-max">
                            add tag
                        </nuxt-link>
                    </div>

                    <hr class="col-span-2 my-6" />
                    <div class="col-span-2">
                        <b>Subscribed communications:</b>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-primary-500 flex gap-1 items-center px-2 py-1 rounded-full text-sm text-white">
                                Email
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                            <span class="bg-primary-500 flex gap-1 items-center px-2 py-1 rounded-full text-sm text-white">
                                Mobile notifications
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                            <span class="bg-primary-500 flex gap-1 items-center px-2 py-1 rounded-full text-sm text-white">
                                SMS
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                        </div>
                        <div class="flex gap-2 mt-2">
                            <span class="bg-gray-200 flex gap-1 items-center px-2 py-1 rounded-full text-gray-600 text-sm">
                                Promotions
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                            <span class="bg-gray-200 flex gap-1 items-center px-2 py-1 rounded-full text-gray-600 text-sm">
                                Newsletter
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                            <span class="bg-gray-200 flex gap-1 items-center px-2 py-1 rounded-full text-gray-600 text-sm">
                                Updates
                                <x-mark-icon style="width: 16px; height: 16px" />
                            </span>
                        </div>

                        <nuxt-link to="#" class="bg-white font-semibold hidden hover:bg-gray-50 mt-3 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm w-max">
                            add to list
                        </nuxt-link>
                    </div>
                </dl>

                <!-- show activity -->
                <div class="flow-root mt-8">
                    <h2 class="font-bold mb-6">
                        Activity logs
                    </h2>
                    <ul role="list" class="-mb-8">
                        <li v-for="(event, eventIdx) in timeline" :key="event.id">
                            <div class="pb-8 relative">
                                <span v-if="eventIdx !== timeline.length - 1" class="-ml-px absolute bg-gray-200 h-full left-4 top-4 w-0.5" aria-hidden="true" />
                                <div class="flex relative space-x-3">
                                    <div>
                                        <span :class="[event.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
                                            <component :is="event.icon" class="h-5 text-white w-5" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div class="flex flex-1 justify-between min-w-0 pt-1.5 space-x-4">
                                        <div>
                                            <p class="text-gray-500 text-sm">
                                                {{ event.content }} <a :href="event.href" class="font-medium text-gray-900">{{ event.target }}</a>
                                            </p>
                                        </div>
                                        <div class="text-gray-500 text-right text-sm whitespace-nowrap">
                                            <time :datetime="event.datetime">{{ event.date }}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import { XMarkIcon } from '@heroicons/vue/24/outline'

    const stats = [
        { id: 1, name: 'Messages send', value: '256' },
        { id: 2, name: 'Open Rate', value: '3%' },
        { id: 3, name: 'Click Rate', value: '2%' },
        { id: 4, name: 'Last message', value: '30 days ago' },
    ]

    const tabs = [
        { name: 'Mail Stats', href: '#', current: false },
        { name: 'Mobile Notification Stats', href: '#', current: false },
        { name: 'SMS Stats', href: '#', current: true },
    ]

    import { CheckIcon, HandThumbUpIcon } from '@heroicons/vue/20/solid'

    const timeline = [
        {
            id:             3,
            content:        'Added tag',
            target:         'Dev',
            href:           '#',
            date:           'Sep 28',
            datetime:       '2020-09-28',
            icon:           CheckIcon,
            iconBackground: 'bg-green-500',
        },
        {
            id:             4,
            content:        'Added tag',
            target:         'FR',
            href:           '#',
            date:           'Sep 30',
            datetime:       '2020-09-30',
            icon:           HandThumbUpIcon,
            iconBackground: 'bg-blue-500',
        },
        {
            id:             5,
            content:        'Subscribed email address',
            target:         'sacha@skyhark.be',
            href:           '#',
            date:           'Oct 4',
            datetime:       '2020-10-04',
            icon:           CheckIcon,
            iconBackground: 'bg-green-500',
        },
    ]

</script>