<script setup lang="ts">
    useHead({ title: 'Edit Lindsay Walton\'s profile' })
</script>

<template>
    <form class="flex justify-center">
        <div class="auto center py-10 space-y-12 w-1/2">
            <div class="pb-12">
                <h2 class="font-semibold leading-7 text-2xl text-gray-900">
                    Edit Profile
                </h2>
                <div class="gap-x-6 gap-y-8 grid grid-cols-1 mt-5 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block font-medium leading-6 text-gray-900 text-sm">First name</label>
                        <div class="mt-2">
                            <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" value="First name" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block font-medium leading-6 text-gray-900 text-sm">Last name</label>
                        <div class="mt-2">
                            <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" value="Last name" />
                        </div>
                    </div>

                    <div class="sm:col-span-full">
                        <label for="email" class="block font-medium leading-6 text-gray-900 text-sm">Email address</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" class="block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-600 placeholder:text-gray-400 px-2 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm text-gray-900 w-full" value="test@example.com" />
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="photo" class="block font-medium leading-6 text-gray-900 text-sm">Avatar</label>
                        <div class="flex gap-x-3 items-center mt-2">
                            <img class="h-12 rounded-full w-12" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <button type="button" class="bg-white font-semibold hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm text-gray-900 text-sm">
                                Change
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex gap-x-2 items-center justify-end mt-6">
                    <button class="bg-red-500 font-semibold hover:bg-red-400 px-3 py-2 rounded-md shadow-sm text-sm text-white">
                        Delete account
                    </button>
                    <button class="bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold hover:bg-primary-500 px-3 py-2 rounded-md shadow-sm text-sm text-white">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>