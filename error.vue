<template>
    <layout>
        <main class="lg:px-8 max-w-7xl mx-auto px-6 py-16 sm:pb-24 w-full">
            <div class="max-w-2xl mx-auto text-center">
                <p class="font-semibold leading-8 text-base text-primary-600">
                    404
                </p>
                <h1 class="font-bold mt-4 sm:text-5xl text-3xl text-gray-900 tracking-tight">
                    This page does not exist
                </h1>
                <p class="leading-7 mt-4 sm:leading-8 sm:mt-6 sm:text-lg text-base text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
            </div>
            <div class="flow-root max-w-lg mt-16 mx-auto sm:mt-20">
                <h2 class="sr-only">
                    Popular pages
                </h2>
                <ul role="list" class="-mt-6 border-b border-gray-900/5 divide-gray-900/5 divide-y">
                    <li v-for="(link, linkIdx) in links" :key="linkIdx" class="flex gap-x-6 py-6 relative">
                        <div class="flex flex-none h-10 items-center justify-center ring-1 ring-gray-900/10 rounded-lg shadow-sm w-10">
                            <component :is="link.icon" class="h-6 text-primary-600 w-6" aria-hidden="true" />
                        </div>
                        <div class="flex-auto">
                            <h3 class="font-semibold leading-6 text-gray-900 text-sm">
                                <a :href="link.href">
                                    <span class="absolute inset-0" aria-hidden="true" />
                                    {{ link.name }}
                                </a>
                            </h3>
                            <p class="leading-6 mt-2 text-gray-600 text-sm">
                                {{ link.description }}
                            </p>
                        </div>
                        <div class="flex-none self-center">
                            <chevron-right-icon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    </layout>
</template>
  
<script setup>

    import { ChevronRightIcon } from '@heroicons/vue/20/solid'
    import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/vue/24/solid'
    import Layout from './layouts/default.vue'

    const links = [
        {
            name:        'Documentation',
            href:        '#',
            description: 'Learn how to integrate our tools with your app.',
            icon:        BookOpenIcon,
        },
        { name: 'API Reference', href: '#', description: 'A complete API reference for our libraries.', icon: QueueListIcon },
        {
            name:        'Guides',
            href:        '#',
            description: 'Installation guides that cover popular setups.',
            icon:        BookmarkSquareIcon,
        },
        { name: 'Blog', href: '#', description: 'Read our latest news and articles.', icon: RssIcon },
    ]

  </script>