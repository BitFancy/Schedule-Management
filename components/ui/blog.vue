<template>
    <div class="card overflow-hidden px-0 py-0">
        <div class="overflow-hidden relative">
            <svg viewBox="0 0 351 240" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%">
                <rect width="350.667" height="240" fill="#F1F7FD" />
                <g clip-path="url(#clip0_4579_19465)">
                    <g filter="url(#filter0_d_4579_19465)">
                        <path d="M74 86.1596C74 81.5723 77.7187 77.8535 82.3061 77.8535H267.249C271.836 77.8535 275.555 81.5723 275.555 86.1596V213.226H74V86.1596Z" fill="#E6EFFE" />
                    </g>
                    <rect x="92.6875" y="92.3887" width="163.006" height="34.2625" rx="12.4591" fill="#ADC9F6" />
                    <rect x="92.6875" y="135.996" width="163.006" height="6.22954" rx="3.11477" fill="#ADC9F6" />
                    <rect x="92.6875" y="145.34" width="163.006" height="6.22954" rx="3.11477" fill="#ADC9F6" />
                    <rect x="92.6875" y="154.686" width="60.2189" height="6.22954" rx="3.11477" fill="#ADC9F6" />
                    <rect x="92.6875" y="170.258" width="45.6833" height="12.4591" rx="6.22954" fill="#ADC9F6" />
                    <rect x="143.562" y="170.258" width="45.6833" height="12.4591" rx="6.22954" fill="#ADC9F6" />
                    <rect x="13" y="26.8535" width="325" height="186" fill="url(#paint0_linear_4579_19465)" />
                </g>
                <defs>
                    <filter id="filter0_d_4579_19465" x="30.07" y="33.9235" width="297.415" height="231.233" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="4" dy="4" />
                        <feGaussianBlur stdDeviation="23.965" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.678431 0 0 0 0 0.788235 0 0 0 0 0.964706 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4579_19465" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4579_19465" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_4579_19465" x1="176.308" y1="-82.181" x2="176.308" y2="337.922" gradientUnits="userSpaceOnUse">
                        <stop offset="0.507988" stop-color="#F2F7FE" stop-opacity="0" />
                        <stop offset="0.66376" stop-color="#F2F7FE" />
                    </linearGradient>
                    <clipPath id="clip0_4579_19465">
                        <rect width="325" height="186" fill="white" transform="translate(13 26.8535)" />
                    </clipPath>
                </defs>
            </svg>
        </div>

        <div class="p-6">
            <div class="bg-gray-100 flex gap-1.5 items-center mb-5 pl-1 pr-2.5 py-1 rounded-2xl text-gray-600 w-max">
                <div class="bg-gray px-2.5 py-0.5 rounded-2xl text-white">
                    {{ kind }}
                </div>
                {{ time }} min read
            </div>

            <div class="mb-2 text-gray-900 text-lg">
                {{ title }}
            </div>
            <div class="text-base text-gray-600">
                {{ description }}
            </div>
        </div>
    </div>
</template>

<script setup>

    defineProps({
        kind: {
            type:    String,
            default: 'Email'
        },
        time: {
            type:    Number,
            default: 5
        },
        title: {
            type:    String,
            default: 'How to create my first campaign'
        },
        description: {
            type:    String,
            default: 'How do you create compelling campaigns that wow your colleagues...'
        }
    })

</script>