<template>
    <div>
        <h2 class="font-semibold leading-7 px-5 text-base text-gray-900">
            Integrations
        </h2>
        <p class="leading-6 mt-1 px-5 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="isolate mt-6 relative">
            <svg class="-z-10 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] absolute h-full hidden inset-0 sm:block stroke-gray-200 w-full" aria-hidden="true">
                <defs>
                    <pattern id="55d3d46d-692e-45f2-becd-d8bdc9344f45" width="200" height="200" x="50%" y="0" patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y="0" class="fill-gray-50 overflow-visible">
                    <path d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z" stroke-width="0" />
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" />
            </svg>
            <div class="relative">
                <div class="-translate-y-1/2 -z-10 absolute blur-3xl inset-x-0 opacity-30 overflow-hidden top-1/2 transform-gpu" aria-hidden="true">
                    <div class="aspect-[1313/771] bg-gradient-to-tr from-[#ff80b5] ml-[max(50%,38rem)] to-[#9089fc] w-[82.0625rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="-z-10 absolute blur-3xl flex inset-x-0 opacity-25 overflow-hidden pt-8 top-0 transform-gpu xl:justify-end" aria-hidden="true">
                    <div class="aspect-[1313/771] bg-gradient-to-tr flex-none from-[#ff80b5] ml-[-22rem] origin-top-right rotate-[30deg] to-[#9089fc] w-[82.0625rem] xl:ml-0 xl:mr-[calc(50%-12rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="lg:px-8 max-w-7xl mx-auto px-6">
                    <div class="max-w-xl mx-auto sm:text-center">
                        <p class="font-bold mt-2 pt-10 sm:text-4xl text-3xl text-gray-900 tracking-tight">
                            extend our solution by integrating with other tools
                        </p>
                    </div>

                    <!-- enabled integrations -->
                    <div class="card mt-16">
                        <ul role="list" class="divide-gray-100 divide-y">
                            <template v-for="(person, i) in people">
                                <li v-if="i < 3" :key="person.email" class="flex gap-x-6 justify-between py-5">
                                    <div class="flex gap-x-4 min-w-0">
                                        <img class="bg-gray-50 flex-none h-12 rounded-full w-12" :src="person.logo" alt="" />
                                        <div class="flex-auto min-w-0">
                                            <p class="font-semibold leading-6 text-gray-900 text-sm">
                                                <a href="#" class="hover:underline">{{ person.name }}</a>
                                            </p>
                                            <p class="flex leading-5 mt-1 text-gray-500 text-xs">
                                                {{ person.description }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex gap-x-6 items-center shrink-0">
                                        <nuxt-link :to="person.to" class="bg-white font-semibold hidden hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm">
                                            Configure
                                        </nuxt-link>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </div>

                    <!-- recommended integrations -->
                    <div class="card mt-8">
                        <h1 class="font-bold mb-3">
                            Other popular integrations
                        </h1>
                        <ul role="list" class="divide-gray-100 divide-y">
                            <template v-for="(person, i) in people">
                                <li v-if="i>3" :key="person.email" class="flex gap-x-6 justify-between py-5">
                                    <div class="flex gap-x-4 min-w-0">
                                        <img class="bg-gray-50 flex-none h-12 rounded-full w-12" :src="person.logo" alt="" />
                                        <div class="flex-auto min-w-0">
                                            <p class="font-semibold leading-6 text-gray-900 text-sm">
                                                <a href="#" class="hover:underline">{{ person.name }}</a>
                                            </p>
                                            <p class="flex leading-5 mt-1 text-gray-500 text-xs">
                                                {{ person.description }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex gap-x-6 items-center shrink-0">
                                        <div class="bg-white font-semibold hidden hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm">
                                            View
                                        </div>
                                    </div>
                                </li>
                            </template>
                        </ul>

                        <ui-button primary>
                            Browse more
                        </ui-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>



    const people = [
        {
            logo:        'https://prismatic.io/static/87717afa92d74c348bb09e0d11aa533c/aa5b9/iconPath.avif',
            name:        "API",
            description: "Integrate custom solutions using API endpoints.",
            to:          "/settings/api",
        },
        {
            logo:        'https://prismatic.io/static/87717afa92d74c348bb09e0d11aa533c/aa5b9/iconPath.avif',
            name:        "Webhook",
            to:          "/settings/webhooks",
            description: "Receive real-time data updates with webhooks."
        },
        {
            logo:        'https://prismatic.io/static/901f0ca70a1152d4c9d980f75d2cba36/aa5b9/iconPath.avif',
            name:        "Salesforce",
            description: "Integrate customer data for targeted outreach."
        },
        {
            logo:        'https://prismatic.io/static/4ea6b5faad075c8ed4e74de04041c7a1/aa5b9/iconPath.avif',
            name:        "Shopify",
            description: "Automate order notifications and updates."
        },
        {
            logo:        'https://prismatic.io/static/9a94c9ad1be4d26cda83d3aaa4d45d29/aa5b9/iconPath.avif',
            name:        "Zendesk",
            description: "Convert support tickets into informative emails."
        },
        {
            logo:        'https://prismatic.io/static/9eaa161c25a4c9d8f8ac12cdaaebc05f/aa5b9/iconPath.avif',
            name:        "HubSpot",
            description: "Combine CRM insights with personalized emails."
        },
        {
            logo:        'https://prismatic.io/static/2b68a82ef5e7f0db8413ff1b0d677fbc/aa5b9/iconPath.avif',
            name:        "WooCommerce",
            description: "Integrate e-commerce activities for tailored emails."
        },
        {
            logo:        'https://prismatic.io/static/e402a1d49c1e4738f4a90c327eb38c0f/aa5b9/iconPath.avif',
            name:        "Microsoft Dynamics 365",
            description: "Streamline communications with comprehensive data."
        },
        {
            logo:        'https://images.ctfassets.net/lzny33ho1g45/6YoKV9RS3goEx54iFv96n9/78100cf9cba971d04ac52d927489809a/logo-symbol.png',
            name:        "Zapier",
            description: "Connect with 2,000+ apps for versatile automation."
        }
    ]

</script>
