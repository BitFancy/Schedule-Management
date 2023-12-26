<template>
    <div>
        <div class="lg:max-w-none lg:mx-0 max-w-2xl mx-auto sm:space-y-20 space-y-16">
            <div>
                <h2 class="font-semibold leading-7 text-base text-gray-900">
                    Profile
                </h2>
                <p class="leading-6 mt-1 text-gray-500 text-sm">
                    This information will be displayed publicly so be careful what you share.
                </p>

                <dl class="border-gray-200 border-t divide-gray-100 divide-y leading-6 mt-6 space-y-6 text-sm">
                    <div class="pt-6 sm:flex">
                        <dt class="font-medium sm:flex-none sm:pr-6 sm:w-64 text-gray-900">
                            Full name
                        </dt>
                        <dd class="flex gap-x-6 justify-between mt-1 sm:flex-auto sm:mt-0">
                            <div class="text-gray-900">
                                Tom Cook
                            </div>
                            <button type="button" class="font-semibold hover:text-primary-500 text-primary-600">
                                Update
                            </button>
                        </dd>
                    </div>
                    <div class="pt-6 sm:flex">
                        <dt class="font-medium sm:flex-none sm:pr-6 sm:w-64 text-gray-900">
                            Email address
                        </dt>
                        <dd class="flex gap-x-6 justify-between mt-1 sm:flex-auto sm:mt-0">
                            <div class="text-gray-900">
                                tom.cook@example.com
                            </div>
                            <button type="button" class="font-semibold hover:text-primary-500 text-primary-600">
                                Update
                            </button>
                        </dd>
                    </div>
                    <div class="pt-6 sm:flex">
                        <dt class="font-medium sm:flex-none sm:pr-6 sm:w-64 text-gray-900">
                            Title
                        </dt>
                        <dd class="flex gap-x-6 justify-between mt-1 sm:flex-auto sm:mt-0">
                            <div class="text-gray-900">
                                Human Resources Manager
                            </div>
                            <button type="button" class="font-semibold hover:text-primary-500 text-primary-600">
                                Update
                            </button>
                        </dd>
                    </div>
                </dl>
            </div>

            <!-- integrations -->
            <div v-if="false">
                <h2 class="font-semibold leading-7 text-base text-gray-900">
                    Integrations
                </h2>
                <p class="leading-6 mt-1 text-gray-500 text-sm">
                    Connect applications to your account.
                </p>

                <ul role="list" class="border-gray-200 border-t divide-gray-100 divide-y leading-6 mt-6 text-sm">
                    <li class="flex gap-x-6 justify-between py-6">
                        <div class="font-medium text-gray-900">
                            QuickBooks
                        </div>
                        <button type="button" class="font-semibold hover:text-primary-500 text-primary-600">
                            Update
                        </button>
                    </li>
                </ul>

                <div class="border-gray-100 border-t flex pt-6">
                    <button type="button" class="font-semibold hover:text-primary-500 leading-6 text-primary-600 text-sm">
                        <span aria-hidden="true">+</span> Add another application
                    </button>
                </div>
            </div>

            <div>
                <h2 class="font-semibold leading-7 text-base text-gray-900">
                    Language and dates
                </h2>
                <p class="leading-6 mt-1 text-gray-500 text-sm">
                    Choose what language and date format to use throughout your account.
                </p>

                <dl class="border-gray-200 border-t divide-gray-100 divide-y leading-6 mt-6 space-y-6 text-sm">
                    <div class="pt-6 sm:flex">
                        <dt class="font-medium sm:flex-none sm:pr-6 sm:w-64 text-gray-900">
                            Language
                        </dt>
                        <dd class="flex gap-x-6 justify-between mt-1 sm:flex-auto sm:mt-0">
                            <div class="text-gray-900">
                                English
                            </div>
                            <button type="button" class="font-semibold hover:text-primary-500 text-primary-600">
                                Update
                            </button>
                        </dd>
                    </div>
                    <div class="pt-6 sm:flex">
                        <dt class="font-medium sm:flex-none sm:pr-6 sm:w-64 text-gray-900">
                            Theme
                        </dt>
                        <dd class="flex gap-x-6 justify-between mt-1 sm:flex-auto sm:mt-0">
                            <div class="text-gray-900">
                                Light
                            </div>
                            <button type="button" class="font-semibold hover:text-primary-500 text-primary-600">
                                Switch (auto | dark | light)
                            </button>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>