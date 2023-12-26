<template>
    <div>
        <h2 class="font-semibold leading-7 text-base text-gray-900">
            Notifications
        </h2>
        <p class="leading-6 mt-1 text-gray-500 text-sm">
            We'll always let you know about important changes, but you pick what else you want to hear about.
        </p>

        <div class="mt-6 pb-12 sm:border-t sm:divide-gray-900/10 sm:divide-y sm:pb-0 sm:space-y-0 space-y-10">
            <fieldset>
                <legend class="sr-only">
                    General
                </legend>
                <div class="sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
                    <h2 class="font-semibold leading-7 text-base">
                        General
                    </h2>
                    <div class="mt-4 sm:col-span-2 sm:mt-0">
                        <div class="max-w-lg space-y-6">
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="comments" name="comments" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="comments" class="font-medium text-gray-900">Tips & Tricks</label>
                                    <p class="mt-1 text-gray-600">
                                        Get notified when someones posts a comment on a posting.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="candidates" name="candidates" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="candidates" class="font-medium text-gray-900">Product Updates</label>
                                    <p class="mt-1 text-gray-600">
                                        Receive notifications about new features, enhancements, and improvements
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="offers" name="offers" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="offers" class="font-medium text-gray-900">Promotions</label>
                                    <p class="mt-1 text-gray-600">
                                        Get notified whenever we have a special promotion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend class="sr-only">
                    Account
                </legend>
                <div class="sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
                    <h2 class="font-semibold leading-7 text-base">
                        Account
                    </h2>
                    <div class="mt-4 sm:col-span-2 sm:mt-0">
                        <div class="max-w-lg space-y-6">
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="comments" name="comments" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="comments" class="font-medium text-gray-900">Security Alerts</label>
                                    <p class="mt-1 text-gray-600">
                                        Receive notifcations about any suspicious login attempts or changes to your account settings to enhance security.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="candidates" name="candidates" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="candidates" class="font-medium text-gray-900">Weekly Report</label>
                                    <p class="mt-1 text-gray-600">
                                        Receive a weekly report of your account activity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</template>

<script setup>



</script>