<template>
    <div>
        <h2 class="font-semibold leading-7 text-base text-gray-900">
            Security
        </h2>
        <p class="leading-6 mt-1 text-gray-500 text-sm">
            Secure your account with these settings.
        </p>

        <div class="mt-6 sm:border-t sm:divide-gray-900/10 sm:divide-y">
            <div class="border-gray-200 gap-x-8 gap-y-10 grid grid-cols-1 md:grid-cols-3 pb-16 pt-6 px-4">
                <div>
                    <h2 class="font-semibold leading-7 text-base">
                        Change password
                    </h2>
                    <p class="leading-6 mt-1 text-gray-400 text-sm">
                        Update your password associated with your account.
                    </p>
                </div>
  
                <form class="md:col-span-2">
                    <div class="gap-x-6 gap-y-8 grid grid-cols-1 sm:grid-cols-6 sm:max-w-xl">
                        <div class="col-span-full">
                            <label for="current-password" class="block font-medium leading-6 text-sm">Current password</label>
                            <div class="mt-2">
                                <input id="current-password" name="current_password" type="password" autocomplete="current-password" class="bg-white/5 block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 py-1.5 ring-1 ring-black/10 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm w-full" />
                            </div>
                        </div>
  
                        <div class="col-span-full">
                            <label for="new-password" class="block font-medium leading-6 text-sm">New password</label>
                            <div class="mt-2">
                                <input id="new-password" name="new_password" type="password" autocomplete="new-password" class="bg-white/5 block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 py-1.5 ring-1 ring-black/10 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm w-full" />
                            </div>
                        </div>
  
                        <div class="col-span-full">
                            <label for="confirm-password" class="block font-medium leading-6 text-sm">Confirm password</label>
                            <div class="mt-2">
                                <input id="confirm-password" name="confirm_password" type="password" autocomplete="new-password" class="bg-white/5 block border-0 focus:ring-2 focus:ring-inset focus:ring-primary-500 py-1.5 ring-1 ring-black/10 ring-inset rounded-md shadow-sm sm:leading-6 sm:text-sm w-full" />
                            </div>
                        </div>
                    </div>
  
                    <div class="flex mt-8">
                        <button type="submit" class="bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 font-semibold hover:bg-primary-400 px-3 py-2 rounded-md shadow-sm text-sm text-white">
                            Save
                        </button>
                    </div>
                </form>
            </div>
  
            <div class="gap-x-8 gap-y-10 grid grid-cols-1 lg:px-8 max-w-7xl md:grid-cols-3 px-4 py-16 sm:px-6">
                <div>
                    <h2 class="font-semibold leading-7 text-base">
                        Two factur authentication
                    </h2>
                    <p class="leading-6 mt-1 text-gray-400 text-sm">
                        Please enter your password to confirm you would like to log out of your other sessions across all of your devices.
                    </p>
                </div>
  
                <div class="md:col-span-2">
                    <s-switch v-model="automaticTimezoneEnabled" :class="[automaticTimezoneEnabled ? 'bg-primary-600' : 'bg-gray-200', 'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600']">
                        <span aria-hidden="true" :class="[automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
                    </s-switch>
                </div>
            </div>

            <div class="gap-x-8 gap-y-10 grid grid-cols-1 lg:px-8 max-w-7xl md:grid-cols-3 px-4 py-16 sm:px-6">
                <div>
                    <h2 class="font-semibold leading-7 text-base">
                        Associated accounts
                    </h2>
                    <p class="leading-6 mt-1 text-gray-400 text-sm">
                        Login using social media accounts.
                    </p>
                </div>
  
                <div>
                    <div class="flex gap-5 items-center md:col-span-2">
                        <div>
                            <s-switch v-model="automaticTimezoneEnabled" :class="[automaticTimezoneEnabled ? 'bg-primary-600' : 'bg-gray-200', 'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600']">
                                <span aria-hidden="true" :class="[automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
                            </s-switch>
                        </div>
                        Google
                    </div>
                    <div class="flex gap-5 items-center md:col-span-2">
                        <div>
                            <s-switch v-model="automaticTimezoneEnabled" :class="[automaticTimezoneEnabled ? 'bg-primary-600' : 'bg-gray-200', 'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600']">
                                <span aria-hidden="true" :class="[automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
                            </s-switch>
                        </div>
                        Apple
                    </div>
                </div>
            </div>
  
            <div class="gap-x-8 gap-y-10 grid grid-cols-1 lg:px-8 max-w-7xl md:grid-cols-3 px-4 py-16 sm:px-6">
                <div>
                    <h2 class="font-semibold leading-7 text-base">
                        Delete account
                    </h2>
                    <p class="leading-6 mt-1 text-gray-400 text-sm">
                        No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.
                    </p>
                </div>
  
                <form class="flex items-start md:col-span-2">
                    <button type="submit" class="bg-red-500 font-semibold hover:bg-red-400 px-3 py-2 rounded-md shadow-sm text-sm text-white">
                        Yes, delete my account
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script setup>

    import { Switch as SSwitch } from '@headlessui/vue'


    const automaticTimezoneEnabled = ref(false)

</script>