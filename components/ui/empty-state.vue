<template>
    <div class="bg-black flex flex-col gap-8 items-center justify-center p-16 relative rounded-2xl text-center text-gray-700 w-full" style="background-color: #F2F7FE;">
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.649 48.93L57.827 66.157C59.192 67.5255 61.292 67.417 62.328 65.786C65.518 60.7443 67.2089 54.8996 67.2035 48.9335C67.2092 41.7705 64.7749 34.8193 60.3015 29.225L40.649 48.93ZM31.5 50.386V24.6435C25.665 25.4916 20.3308 28.4132 16.4742 32.8734C12.6176 37.3335 10.4967 43.0337 10.5 48.93C10.5 62.496 21.469 73.5 35 73.5C40.2877 73.5 45.4313 71.7761 49.651 68.5895L31.5 50.386ZM57.1585 21.7455C58.5235 20.377 58.436 18.249 56.847 17.15C52.3825 14.0576 47.3104 11.9517 41.9685 10.9725C40.0645 10.6225 38.5 12.0645 38.5 14V40.46L57.1585 21.7455Z" fill="#5783EF" />
        </svg>

        <div>
            <div class="mb-6 text-4xl text-primary-200">
                You don’t have any segments
            </div>

            <p class="text-gray-400 text-sm">
                Nemo enim ipsam voluptatem quia voluptas sit
            </p>
        </div>

        <div class="flex gap-4">
            <ui-button primary large to="/contacts/segments/1">
                Create a segment
            </ui-button>
            <ui-button white class="items-center px-4 py-2.5">
                Use a pre-build segment
                <arrow-right-icon style="height: 22px" />
            </ui-button>
        </div>
    </div>
</template>

<script setup>

    import { ArrowRightIcon } from '@heroicons/vue/20/solid'
    // TODO use props to make it dynamic

</script>