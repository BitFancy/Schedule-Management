<template>
    <div>
        <h2 class="font-semibold leading-7 text-base text-gray-900">
            Auto Tracking
        </h2>
        <p class="leading-6 mt-1 text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="mt-6 pb-12 sm:border-t sm:divide-gray-900/10 sm:divide-y sm:pb-0 sm:space-y-0 space-y-10">
            <fieldset>
                <legend class="sr-only">
                    Email Statistics
                </legend>
                <div class="sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
                    <h2 class="font-semibold leading-7 text-base">
                        Email Statistics
                    </h2>
                    <div class="mt-4 sm:col-span-2 sm:mt-0">
                        <div class="max-w-lg space-y-6">
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="comments" name="comments" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="comments" class="font-medium text-gray-900">Click Tracking</label>
                                    <p class="mt-1 text-gray-600">
                                        Track how many people clicked on links inside your mails
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="comments" name="comments" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="comments" class="font-medium text-gray-900">Google Analytics Tags</label>
                                    <p class="mt-1 text-gray-600">
                                        Automatically add Google Analytics tags to your links to track your campaigns.
                                    </p>
                                    
                                    <ui-modal v-model="editOpen">
                                        <template #button="{onClick}">
                                            <a class="bg-white cursor-pointer font-semibold hidden hover:bg-gray-50 px-2.5 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md shadow-sm sm:block text-gray-900 text-sm w-max" @click="onClick">Configure Tags</a>
                                        </template>

                                        <!-- modal content -->
                                        <div class="flex flex-col gap-3">
                                            Confgure GA Tags

                                            <ui-input label="utm source" />
                                            <ui-input label="utm medium" />
                                            <ui-input label="utm term" />
                                            <ui-input label="utm content" />
                                            <h3 class="text-red">
                                                Todo add link to documentation blog
                                            </h3>

                                            <div class="flex">
                                                <ui-button class="flex-1" @click="editOpen = false">
                                                    cancel
                                                </ui-button>
                                                <ui-button primary class="flex-1">
                                                    save
                                                </ui-button>
                                            </div>
                                        </div>
                                    </ui-modal>
                                </div>
                            </div>
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="candidates" name="candidates" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="candidates" class="font-medium text-gray-900">Open Tracking</label>
                                    <p class="mt-1 text-gray-600">
                                        Track how many people opened your mails. This option could not work with some largly used email clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <!-- handle Unsubscribes -->
            <fieldset>
                <legend class="sr-only">
                    Handle Unsubscribes
                </legend>
                <div class="sm:gap-4 sm:grid sm:grid-cols-3 sm:items-baseline sm:py-6">
                    <h2 class="font-semibold leading-7 text-base">
                        Handle Unsubscribes
                    </h2>
                    <div class="mt-4 sm:col-span-2 sm:mt-0">
                        <div class="max-w-lg space-y-6">
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="comments" name="comments" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="comments" class="font-medium text-gray-900">Email unsubscribe</label>
                                    <p class="mt-1 text-gray-600">
                                        Auto add links to your emails to handle unsubscribe.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <input id="candidates" name="candidates" type="checkbox" class="border-gray-300 focus:ring-primary-600 h-4 rounded text-primary-600 w-4" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="candidates" class="font-medium text-gray-900">SMS unsubscribe</label>
                                    <p class="mt-1 text-gray-600">
                                        Auto add a text to your sms's to let your contacts unsubscribe.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <!-- mailing categories -->
            <fieldset>
                <legend class="sr-only">
                    Communication Categories
                </legend>
                <div class="sm:gap-4 sm:grid sm:grid-cols-3 sm:items-baseline sm:py-6">
                    <h2 class="font-semibold leading-7 text-base">
                        Communication Categories
                    </h2>
                    <div class="mt-4 sm:col-span-2 sm:mt-0">
                        <p class="leading-6 max-w-3xl mb-6 text-gray-600 text-sm">
                            Configure the types of emails available for your customers to choose from. Empower your clients to decide which categories of emails they wish to receive.
                        </p>
                        <div class="max-w-lg space-y-6">
                            <div v-for="k in kinds" :key="k" class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <trash-icon class="h-5 w-5" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="comments" class="font-medium text-gray-900">{{ k }} (translated in 5 languages)</label>
                                </div>
                            </div>
                            <div>
                                <ui-button primary>
                                    add new category
                                </ui-button>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>


            <!-- mailing categories -->
            <fieldset>
                <legend class="sr-only">
                    Allowed Email Addresses
                </legend>
                <div class="sm:gap-4 sm:grid sm:grid-cols-3 sm:items-baseline sm:py-6">
                    <h2 class="font-semibold leading-7 text-base">
                        Allowed Email Addresses
                    </h2>
                    <div class="mt-4 sm:col-span-2 sm:mt-0">
                        <p class="leading-6 max-w-3xl mb-6 text-gray-600 text-sm">
                            Filter allowed contacts based on their host name.
                        </p>
                        <div class="max-w-lg space-y-6">
                            <div>
                                <div>
                                    <label for="location" class="block font-medium leading-6 text-gray-900 text-sm">Authorization Mode</label>
                                    <select id="location" v-model="listMode" name="location" class="block border-0 focus:ring-2 focus:ring-indigo-600 mt-2 pl-3 pr-10 py-1.5 ring-1 ring-gray-300 ring-inset rounded-md sm:leading-6 sm:text-sm text-gray-900 w-full">
                                        <option>
                                            Whitelist
                                        </option>
                                        <option>Blacklist</option>
                                    </select>
                                    <p v-if="listMode == 'Whitelist'" class="mt-1 text-gray-600">
                                        Only email addresses from this list will be allowed to join your contacts
                                    </p>
                                    <p v-else class="mt-1 text-gray-600">
                                        Email addresses from this list will not be allowed to join your contacts
                                    </p>
                                </div>
                            </div>

                            <div v-for="k in hosts" :key="k" class="flex gap-x-3 relative">
                                <div class="flex h-6 items-center">
                                    <trash-icon class="h-5 w-5" />
                                </div>
                                <div class="leading-6 text-sm">
                                    <label for="comments" class="font-medium text-gray-900">{{ k }}</label>
                                </div>
                            </div>
                            <div>
                                <ui-button primary>
                                    add host
                                </ui-button>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</template>

<script setup>

    import { TrashIcon } from '@heroicons/vue/24/outline'

    const kinds = [
        'marketing', 'promotions', 'changelogs', 'transactions'
    ]

    const hosts = [
        'gmail.com', 'yahoo.com', 'hotmail.com'
    ]

    const listMode = ref('Whitelist')
    const editOpen = ref(false)

</script>
