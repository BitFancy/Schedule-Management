<template>
    <div>
        <div class="lg:px-8 max-w-10xl mx-auto px-6">
            <div class="max-w-4xl mx-auto sm:text-center">
                <h2 class="font-semibold leading-7 text-base text-primary-600">
                    Pricing
                </h2>
                <p class="font-bold mt-2 sm:text-5xl text-4xl text-gray-900 tracking-tight">
                    Choose the right plan for&nbsp;you
                </p>
            </div>
            <p class="leading-8 max-w-2xl mt-6 mx-auto sm:text-center text-gray-600 text-lg">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
            </p>
            <div class="flow-root mt-20">
                <div class="-mt-16 divide-gray-100 divide-y gap-y-16 grid grid-cols-1 isolate lg:-mx-8 lg:divide-x lg:divide-y-0 lg:grid-cols-5 lg:max-w-none lg:mt-0 max-w-sm sm:mx-auto xl:-mx-4">
                    <div v-for="tier in tiers" :key="tier.id" class="lg:pt-0 lg:px-8 pt-16 xl:px-14">
                        <h3 :id="tier.id" class="font-semibold leading-7 text-base text-gray-900">
                            {{ tier.name }}
                        </h3>
                        <p class="flex gap-x-1 items-baseline mt-6">
                            <span class="font-bold text-5xl text-gray-900 tracking-tight">{{ tier.price.monthly }}</span>
                            <span class="font-semibold leading-6 text-gray-600 text-sm">/month</span>
                        </p>
                        <p class="leading-6 mt-3 text-gray-500 text-sm">
                            {{ tier.price.annually }} per month if paid annually
                        </p>
                        <a :href="tier.href" :aria-describedby="tier.id" class="bg-primary-600 block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold hover:bg-primary-500 leading-6 mt-10 px-3 py-2 rounded-md shadow-sm text-center text-sm text-white">Buy plan</a>
                        <p class="font-semibold leading-6 mt-10 text-gray-900 text-sm">
                            {{ tier.description }}
                        </p>
                        <ul role="list" class="leading-6 mt-6 space-y-3 text-gray-600 text-sm">
                            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                <check-circle-icon class="flex-none h-6 text-primary-600 w-5" aria-hidden="true" />
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script setup>

    import { CheckCircleIcon } from '@heroicons/vue/20/solid'


    const tiers = [
        {
            name:        'Basic',
            id:          'tier-basic',
            href:        '#',
            price:       { monthly: '$15', annually: '$12' },
            description: 'Everything necessary to get started.',
            features:    ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
        },
        {
            name:        'Essential',
            id:          'tier-essential',
            href:        '#',
            price:       { monthly: '$30', annually: '$24' },
            description: 'Everything in Basic, plus essential tools for growing your business.',
            features:    [
                '25 products',
                'Up to 10,000 subscribers',
                'Advanced analytics',
                '24-hour support response time',
                'Marketing automations',
            ],
        },
        {
            name:        'Growth',
            id:          'tier-growth',
            href:        '#',
            price:       { monthly: '$60', annually: '$48' },
            description: 'Everything in Essential, plus collaboration tools and deeper insights.',
            features:    [
                'Unlimited products',
                'Unlimited subscribers',
                'Advanced analytics',
                '1-hour, dedicated support response time',
                'Marketing automations',
                'Custom reporting tools',
            ],
        },
        {
            name:        'Growth',
            id:          'tier-growth',
            href:        '#',
            price:       { monthly: '$60', annually: '$48' },
            description: 'Everything in Essential, plus collaboration tools and deeper insights.',
            features:    [
                'Unlimited products',
                'Unlimited subscribers',
                'Advanced analytics',
                '1-hour, dedicated support response time',
                'Marketing automations',
                'Custom reporting tools',
            ],
        },
        {
            name:        'Growth',
            id:          'tier-growth',
            href:        '#',
            price:       { monthly: '$60', annually: '$48' },
            description: 'Everything in Essential, plus collaboration tools and deeper insights.',
            features:    [
                'Unlimited products',
                'Unlimited subscribers',
                'Advanced analytics',
                '1-hour, dedicated support response time',
                'Marketing automations',
                'Custom reporting tools',
            ],
        },
    ]
  </script>