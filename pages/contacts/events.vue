<template>
    <div>
        <!-- heading -->
        <header class="pb-4 px-4 sm:pb-6">
            <div class="flex flex-wrap gap-6 items-center lg:px-8 max-w-7xl mx-auto px-4 sm:flex-nowrap sm:px-6">
                <h1 class="font-semibold leading-7 text-base text-gray-900">
                    Events
                </h1>
            </div>
        </header>
        <hr class="mb-10" />

        <div class="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
            <ui-select class="mb-6 w-64" label="event type" :items="items('all', 'spam complaints', 'bounces', 'unsubscribes', 'new subscriptions', 'tags')" />
            <ul role="list">
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
</template>
  
<script setup>

    import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/vue/20/solid'

    function items() {
        const res = []
        for(var n of arguments) {
            res.push({ name: n })
        }

        return res
    }

    const timeline = [
        {
            id:             1,
            content:        'Create new contact',
            target:         'sacha@skyhark.be',
            href:           '#',
            date:           'Sep 20',
            datetime:       '2020-09-20',
            icon:           UserIcon,
            iconBackground: 'bg-gray-400',
        },
        {
            id:             2,
            content:        'Added tag <dev> to',
            target:         'sacha@skyhkar.be',
            href:           '#',
            date:           'Sep 22',
            datetime:       '2020-09-22',
            icon:           HandThumbUpIcon,
            iconBackground: 'bg-blue-500',
        },
        {
            id:             3,
            content:        'Completed phone screening with',
            target:         'Martha Gardner',
            href:           '#',
            date:           'Sep 28',
            datetime:       '2020-09-28',
            icon:           CheckIcon,
            iconBackground: 'bg-green-500',
        },
        {
            id:             4,
            content:        'Advanced to interview by',
            target:         'Bethany Blake',
            href:           '#',
            date:           'Sep 30',
            datetime:       '2020-09-30',
            icon:           HandThumbUpIcon,
            iconBackground: 'bg-blue-500',
        },
        {
            id:             5,
            content:        'Completed interview with',
            target:         'Katherine Snyder',
            href:           '#',
            date:           'Oct 4',
            datetime:       '2020-10-04',
            icon:           CheckIcon,
            iconBackground: 'bg-green-500',
        },
    ]
</script>