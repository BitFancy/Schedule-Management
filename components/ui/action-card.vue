<template>
    <div class="card overflow-hidden p-10 relative text-center">
        <div class="flex items-center justify-center">
            <svg v-if="image == 1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16699 9.6665H9.18033M1.16699 5.93317L1.16699 11.8992C1.16699 12.5514 1.16699 12.8776 1.24067 13.1845C1.306 13.4566 1.41374 13.7167 1.55995 13.9553C1.72486 14.2244 1.95546 14.455 2.41667 14.9162L12.6415 25.141C14.2256 26.7251 15.0176 27.5171 15.9309 27.8139C16.7343 28.0749 17.5997 28.0749 18.4031 27.8139C19.3164 27.5171 20.1084 26.7251 21.6925 25.141L24.6415 22.192C26.2256 20.6079 27.0176 19.8159 27.3144 18.9026C27.5754 18.0992 27.5754 17.2338 27.3144 16.4304C27.0176 15.5171 26.2256 14.7251 24.6415 13.141L14.4167 2.91618C13.9555 2.45498 13.7249 2.22437 13.4557 2.05946C13.2172 1.91325 12.957 1.80551 12.6849 1.74018C12.378 1.6665 12.0519 1.6665 11.3997 1.6665L5.43366 1.6665C3.94019 1.6665 3.19345 1.6665 2.62302 1.95715C2.12125 2.21282 1.7133 2.62076 1.45764 3.12253C1.16699 3.69296 1.16699 4.4397 1.16699 5.93317ZM9.83366 9.6665C9.83366 10.0347 9.53518 10.3332 9.16699 10.3332C8.7988 10.3332 8.50033 10.0347 8.50033 9.6665C8.50033 9.29831 8.7988 8.99984 9.16699 8.99984C9.53518 8.99984 9.83366 9.29831 9.83366 9.6665Z" stroke="#1D46F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_3720_19971" x1="174.001" y1="3.99951" x2="30.501" y2="197.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1D46F3" />
                        <stop offset="0.714713" stop-color="#1D46F3" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg v-else-if="image == 2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.8337 14.9998C27.8337 22.3636 21.8641 28.3332 14.5003 28.3332M27.8337 14.9998C27.8337 7.63604 21.8641 1.6665 14.5003 1.6665M27.8337 14.9998H22.5003M14.5003 28.3332C7.13653 28.3332 1.16699 22.3636 1.16699 14.9998M14.5003 28.3332V22.9998M1.16699 14.9998C1.16699 7.63604 7.13653 1.6665 14.5003 1.6665M1.16699 14.9998H6.50033M14.5003 1.6665V6.99984" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_3720_20031" x1="165.801" y1="-7.76596" x2="-6.99112" y2="173.991" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1D46F3" />
                        <stop offset="0.714713" stop-color="#1D46F3" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8336 9.6665V5.6665L23.8336 1.6665L25.1669 4.33317L27.8336 5.6665L23.8336 9.6665H19.8336ZM19.8336 9.6665L14.5003 14.9998M27.8337 14.9998C27.8337 22.3636 21.8641 28.3332 14.5003 28.3332C7.13653 28.3332 1.16699 22.3636 1.16699 14.9998C1.16699 7.63604 7.13653 1.6665 14.5003 1.6665M21.167 14.9998C21.167 18.6817 18.1822 21.6665 14.5003 21.6665C10.8184 21.6665 7.83366 18.6817 7.83366 14.9998C7.83366 11.3179 10.8184 8.33317 14.5003 8.33317" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_3720_20015" x1="165.801" y1="-7.76596" x2="-6.99112" y2="173.991" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#1D46F3" />
                        <stop offset="0.714713" stop-color="#1D46F3" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <p class="font-semibold leading-7 pt-1 text-2xl text-gray-900">
            {{ action }}   
        </p>
        <div class="pt-2 text-gray-600 text-lg">
            {{ description }}
        </div>
    </div>
</template>

<script setup>

    defineProps({
        image: {
            type:    Number,
            default: 1
        },
        action: {
            type:    String,
            default: 'Lorem ipsum dolor'
        },
        description: {
            type:    String,
            default: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut'
        }
    })

</script>