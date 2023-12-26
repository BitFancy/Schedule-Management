<template>
    <div>
        <!-- heading -->
        <header class="pb-4 px-5 sm:pb-6">
            <div class="flex flex-wrap gap-6 items-center lg:px-8 max-w-7xl mx-auto px-4 sm:flex-nowrap sm:px-6">
                <h1 class="font-semibold leading-7 text-base text-gray-900">
                    Create segment
                </h1>
                <div class="flex-1" />
                <div class="flex flex-0 space-x-2">
                    <nuxt-link href="/contacts/segments/new" class="bg-primary-600 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold gap-x-1 hover:bg-primary-500 items-center ml-auto px-3 py-2 rounded-md shadow-sm text-sm text-white">
                        Continue
                    </nuxt-link>
                </div>
            </div>
        </header>
        <hr class="mb-10" />

        <div class="pb-4 px-5 sm:pb-6">
            <div class="flex flex-col flex-wrap gap-6 lg:px-8 max-w-7xl mx-auto px-4 sm:flex-nowrap sm:px-6">
                <div>
                    <h2 class="font-bold sm:text-xl text-gray-900 text-xl tracking-tight">
                        Add filters to define your segment
                    </h2>
                    <p class="leading-8 mt-1 text-gray-600 text-lg">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                        <a href="#" class="font-bold text-primary underline">tutorial</a>
                    </p>
                </div>

                <div class="card flex flex-col gap-6">
                    <div class="gap-6 grid grid-cols-3">
                        <ui-select label="field" :items="items('tag', 'bith day', 'given name', 'family_name')" />
                        <ui-select label="operator" :items="items('equals', 'contains', 'is not equal to')" />
                        <ui-input label="value" />
                    </div>

                    <b>or</b>

                    <div class="gap-6 grid grid-cols-3">
                        <ui-select label="field" :items="items('tag', 'bith day', 'given name', 'family_name')" />
                        <ui-select label="operator" :items="items('equals', 'contains', 'is not equal to')" />
                        <ui-input label="value" />
                    </div>

                    <nuxt-link to="#" class="bg-white font-semibold hidden hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm w-max">
                        + or
                    </nuxt-link>
                </div>

                <b>
                    and
                </b>


                <div class="card flex flex-col gap-6">
                    <div class="gap-6 grid grid-cols-3">
                        <ui-select label="field" :items="items('tag', 'bith day', 'given name', 'family_name')" />
                        <ui-select label="operator" :items="items('equals', 'contains', 'is not equal to')" />
                        <ui-input label="value" />
                    </div>

                    <nuxt-link to="#" class="bg-white font-semibold hidden hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm w-max">
                        + or
                    </nuxt-link>
                </div>


                <nuxt-link to="#" class="bg-white font-semibold hidden hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm w-max">
                    + and
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    function items() {
        const res = []
        for(var n of arguments) {
            res.push({ name: n })
        }

        return res
    }

</script>