<template>
    <form class="flex justify-center">
        <div class="auto center py-10 space-y-12 w-1/2">
            <div class="pb-12">
                <h2 class="font-semibold leading-7 text-2xl text-gray-900">
                    New Member
                </h2>
                <div class="gap-x-6 gap-y-8 grid grid-cols-1 mt-5 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block font-medium leading-6 text-gray-900 text-sm">First name</label>
                        <div class="mt-2">
                            <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block font-medium leading-6 text-gray-900 text-sm">Last name</label>
                        <div class="mt-2">
                            <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" />
                        </div>
                    </div>

                    <div class="sm:col-span-full">
                        <label for="email" class="block font-medium leading-6 text-gray-900 text-sm">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" />
                        </div>
                    </div>

                    <div class="sm:col-span-full">
                        <ui-select class="w-full" label="role" :items="items('admin', 'it', 'marketeer')" />
                    </div>
                    <h1 class="sm:col-span-full text-red">
                        TODO: We should show links to documentation to explain the different roles or at least show which permissions they will provide
                    </h1>
                </div>

                <div class="flex gap-x-6 items-center justify-end mt-6">
                    <button type="submit" class="bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold hover:bg-primary-500 px-3 py-2 rounded-md shadow-sm text-sm text-white">
                        Invite
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>

    useHead({ title: 'Add new Member' })

    function items() {
        const res = []
        for(var n of arguments) {
            res.push({ name: n })
        }

        return res
    }

</script>