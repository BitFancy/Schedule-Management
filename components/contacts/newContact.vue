<template>
    <div class="px-8 py-6">
        <div class="Domain-wrappper flex items-center justify-between mb-[45px]">
            <div class="flex">
                <span class="border-r font-bold pr-5 text-3xl text-black-400">Contact List</span>
                <div class="flex gap-5 items-center pl-5 text-black-300">
                    <span>Last 7 days</span>
                    <span class="font-normal text-primary">Last 30 days</span>
                    <span>All time</span>
                </div>
            </div>
        </div>
  
        <div class="bg-[#F8F9FF] flex flex-col gap-4 how-add-domain-info px-[25px] py-4 relative">
            <div class="absolute close-icon cursor-pointer right-3 top-3" @click="closeContactListModel">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="x">
                        <path id="Vector" d="M6 6L18 18M6 18L18 6L6 18Z" stroke="#686D79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            </div>
            <h2 class="font-medium text-black-500 text-xl">
                What are the contacts? how it helps me? Do not worry if you have number of contacts!
            </h2>
            <p class="font-normal max-w-5xl text-black-200">
                Are you tired of juggling countless contacts and struggling to maintain meaningful connections with your customers? Say goodbye to scattered information and missed opportunities! Introducing our state-of-the-art CRM (Customer Relationship Manageme...
            </p>
            <nuxt-link to="#" class="font-medium px-4 py-2 text-primary text-sm">
                Learn More
            </nuxt-link>
        </div>
  
        <div class="expand-domain-wrapper flex flex-col gap-4 items-center mb-52 mt-8 mx-auto w-full">
            <h2 class="font-bold text-2xl text-black-400">
                How would you  like to create contact base?
            </h2>
            <div class="flex gap-32 items-center">
                <div class="flex flex-col gap-4 items-center min-w-[274px]">
                    <div>
                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
                            <g id="add-user 1">
                                <path id="Vector" d="M56.5 45H49.5V38C49.5 37.4696 49.2893 36.9609 48.9142 36.5858C48.5391 36.2107 48.0304 36 47.5 36C46.9696 36 46.4609 36.2107 46.0858 36.5858C45.7107 36.9609 45.5 37.4696 45.5 38V45H38.5C37.9696 45 37.4609 45.2107 37.0858 45.5858C36.7107 45.9609 36.5 46.4696 36.5 47C36.5 47.5304 36.7107 48.0391 37.0858 48.4142C37.4609 48.7893 37.9696 49 38.5 49H45.5V56C45.5 56.5304 45.7107 57.0391 46.0858 57.4142C46.4609 57.7893 46.9696 58 47.5 58C48.0304 58 48.5391 57.7893 48.9142 57.4142C49.2893 57.0391 49.5 56.5304 49.5 56V49H56.5C57.0304 49 57.5391 48.7893 57.9142 48.4142C58.2893 48.0391 58.5 47.5304 58.5 47C58.5 46.4696 58.2893 45.9609 57.9142 45.5858C57.5391 45.2107 57.0304 45 56.5 45Z" fill="#3B82F6" />
                                <path id="Vector_2" d="M32.5 58H12.5C11.9696 58 11.4609 57.7893 11.0858 57.4142C10.7107 57.0391 10.5 56.5304 10.5 56C10.5069 50.1674 12.8269 44.5756 16.9513 40.4513C21.0756 36.3269 26.6673 34.0069 32.5 34C36.3656 34.0119 40.1057 32.6283 43.0329 30.1034C45.96 27.5785 47.8775 24.082 48.433 20.2565C48.9885 16.4309 48.1446 12.5334 46.0565 9.28026C43.9684 6.02711 40.7763 3.63689 37.0669 2.54889C33.3575 1.4609 29.3801 1.74823 25.8656 3.35809C22.3511 4.96794 19.5357 7.79215 17.9368 11.3117C16.3379 14.8312 16.063 18.8095 17.1626 22.5155C18.2622 26.2214 20.6623 29.406 23.922 31.484C18.8377 33.2646 14.4314 36.5792 11.3108 40.9704C8.19028 45.3616 6.50937 50.613 6.5 56C6.5 57.5913 7.13214 59.1174 8.25736 60.2426C9.38258 61.3679 10.9087 62 12.5 62H32.5C33.0304 62 33.5391 61.7893 33.9142 61.4142C34.2893 61.0391 34.5 60.5304 34.5 60C34.5 59.4696 34.2893 58.9609 33.9142 58.5858C33.5391 58.2107 33.0304 58 32.5 58ZM20.5 18C20.5 15.6266 21.2038 13.3066 22.5224 11.3332C23.8409 9.35977 25.7151 7.8217 27.9078 6.91345C30.1005 6.0052 32.5133 5.76756 34.8411 6.23058C37.1689 6.6936 39.3071 7.83649 40.9853 9.51472C42.6635 11.193 43.8064 13.3311 44.2694 15.6589C44.7324 17.9867 44.4948 20.3995 43.5866 22.5922C42.6783 24.7849 41.1402 26.6591 39.1668 27.9776C37.1935 29.2962 34.8734 30 32.5 30C29.3184 29.9968 26.268 28.7315 24.0182 26.4818C21.7685 24.232 20.5032 21.1816 20.5 18Z" fill="#3B82F6" />
                            </g>
                        </svg>
                    </div>

                    <h3>Add Contact</h3>

                    <p>You can create a contact manually!</p>

                    <button class="bg-primary flex gap-[6px] items-center justify-center px-4 py-2 rounded text-white w-44">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="plus">
                                <path id="Vector" d="M10.5 5.5V10.5M10.5 10.5V15.5M10.5 10.5H15.5M10.5 10.5H5.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        <span class="font-medium text-sm">
                            Add Contact
                        </span>
                    </button>
                </div>
                <div class="flex flex-col gap-4 items-center min-w-[274px]">
                    <div>
                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
                            <g id="add-user 1">
                                <path id="Vector" d="M56.5 45H49.5V38C49.5 37.4696 49.2893 36.9609 48.9142 36.5858C48.5391 36.2107 48.0304 36 47.5 36C46.9696 36 46.4609 36.2107 46.0858 36.5858C45.7107 36.9609 45.5 37.4696 45.5 38V45H38.5C37.9696 45 37.4609 45.2107 37.0858 45.5858C36.7107 45.9609 36.5 46.4696 36.5 47C36.5 47.5304 36.7107 48.0391 37.0858 48.4142C37.4609 48.7893 37.9696 49 38.5 49H45.5V56C45.5 56.5304 45.7107 57.0391 46.0858 57.4142C46.4609 57.7893 46.9696 58 47.5 58C48.0304 58 48.5391 57.7893 48.9142 57.4142C49.2893 57.0391 49.5 56.5304 49.5 56V49H56.5C57.0304 49 57.5391 48.7893 57.9142 48.4142C58.2893 48.0391 58.5 47.5304 58.5 47C58.5 46.4696 58.2893 45.9609 57.9142 45.5858C57.5391 45.2107 57.0304 45 56.5 45Z" fill="#3B82F6" />
                                <path id="Vector_2" d="M32.5 58H12.5C11.9696 58 11.4609 57.7893 11.0858 57.4142C10.7107 57.0391 10.5 56.5304 10.5 56C10.5069 50.1674 12.8269 44.5756 16.9513 40.4513C21.0756 36.3269 26.6673 34.0069 32.5 34C36.3656 34.0119 40.1057 32.6283 43.0329 30.1034C45.96 27.5785 47.8775 24.082 48.433 20.2565C48.9885 16.4309 48.1446 12.5334 46.0565 9.28026C43.9684 6.02711 40.7763 3.63689 37.0669 2.54889C33.3575 1.4609 29.3801 1.74823 25.8656 3.35809C22.3511 4.96794 19.5357 7.79215 17.9368 11.3117C16.3379 14.8312 16.063 18.8095 17.1626 22.5155C18.2622 26.2214 20.6623 29.406 23.922 31.484C18.8377 33.2646 14.4314 36.5792 11.3108 40.9704C8.19028 45.3616 6.50937 50.613 6.5 56C6.5 57.5913 7.13214 59.1174 8.25736 60.2426C9.38258 61.3679 10.9087 62 12.5 62H32.5C33.0304 62 33.5391 61.7893 33.9142 61.4142C34.2893 61.0391 34.5 60.5304 34.5 60C34.5 59.4696 34.2893 58.9609 33.9142 58.5858C33.5391 58.2107 33.0304 58 32.5 58ZM20.5 18C20.5 15.6266 21.2038 13.3066 22.5224 11.3332C23.8409 9.35977 25.7151 7.8217 27.9078 6.91345C30.1005 6.0052 32.5133 5.76756 34.8411 6.23058C37.1689 6.6936 39.3071 7.83649 40.9853 9.51472C42.6635 11.193 43.8064 13.3311 44.2694 15.6589C44.7324 17.9867 44.4948 20.3995 43.5866 22.5922C42.6783 24.7849 41.1402 26.6591 39.1668 27.9776C37.1935 29.2962 34.8734 30 32.5 30C29.3184 29.9968 26.268 28.7315 24.0182 26.4818C21.7685 24.232 20.5032 21.1816 20.5 18Z" fill="#3B82F6" />
                            </g>
                        </svg>
                    </div>

                    <h3>Import Contacts</h3>

                    <p>Smartly move your contacts to list</p>

                    <button class="bg-primary flex gap-[6px] items-center justify-center px-4 py-2 rounded text-white w-44">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="upload">
                                <path id="Vector" d="M3.33398 13.8333V14.6667C3.33398 15.3297 3.59738 15.9656 4.06622 16.4344C4.53506 16.9033 5.17094 17.1667 5.83398 17.1667H14.1673C14.8304 17.1667 15.4662 16.9033 15.9351 16.4344C16.4039 15.9656 16.6673 15.3297 16.6673 14.6667V13.8333M13.334 7.16667L10.0007 3.83334M10.0007 3.83334L6.66732 7.16667M10.0007 3.83334V13.8333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>

                        <span class="font-medium text-sm">
                            Import Contacts
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script setup>
    const closeContactListModel = () => {
        console.log('closed icon clicked')
    } 
  </script>
  