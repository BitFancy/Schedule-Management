<template>
    <div>
        <h1 class="font-semibold mb-4 text-3xl">
            Payment Information
        </h1>
        <div class="flex my-8">
            <div class="bg-white mt-10 rounded-lg shadow-lg w-1/3">
                <!-- Card front -->
                <div class="bg-gradient-to-tr from-blue-800 px-8 py-12 relative rounded-lg">
                    <div class="font-bold mb-4 text-lg text-white">
                        My Bank
                    </div>

                    <div class="font-bold mb-6 text-3xl text-white">
                        <div class="bg-white flex h-8 items-center justify-between p-2 rounded-lg w-48">
                            <span class="concave-number">1234</span>
                            <span class="concave-number">5678</span>
                            <span class="concave-number">9012</span>
                            <span class="concave-number">3456</span>
                        </div>
                    </div>

                    <div class="flex justify-between text-white">
                        <div class="text-sm">
                            <div class="font-medium">
                                CARD HOLDER
                            </div>
                            <div class="text-base">
                                John Doe
                            </div>
                        </div>
                        <div class="text-sm">
                            <div class="font-medium">
                                EXPIRES
                            </div>
                            <div class="text-base">
                                01/23
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div class="max-w-md mt-8 mx-auto">
                <div class="gap-4 grid grid-cols-2">
                    <div class="flex flex-col">
                        <label for="name" class="font-medium text-gray-600">Name</label>
                        <input id="name" maxlength="20" type="text" class="block border-gray-300 focus:border-primary focus:ring-primary-500 form-input mt-1 rounded-md sm:text-sm w-full" />
                    </div>

                    <div class="flex flex-col">
                        <label for="cardnumber" class="font-medium text-gray-600">Card Number</label>
                        <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric" class="block border-gray-300 focus:border-primary focus:ring-primary-500 form-input mt-1 rounded-md sm:text-sm w-full" />
                    </div>

                    <div class="flex flex-col">
                        <label for="expirationdate" class="font-medium text-gray-600">Expiration (mm/yy)</label>
                        <input id="expirationdate" type="text" pattern="[0-9]*" inputmode="numeric" class="block border-gray-300 focus:border-primary focus:ring-primary-500 form-input mt-1 rounded-md sm:text-sm w-full" />
                    </div>

                    <div class="flex flex-col">
                        <label for="securitycode" class="font-medium text-gray-600">Security Code</label>
                        <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric" class="block border-gray-300 focus:border-primary focus:ring-primary-500 form-input mt-1 rounded-md sm:text-sm w-full" />
                    </div>
                </div>

                <div class="mt-6">
                    <button type="submit" class="bg-primary-600 flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 font-semibold hover:bg-primary-500 items-center justify-center px-3 py-2 rounded-md shadow-sm text-sm text-white w-1/2">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>


    export default {
        data() {
            return {
                cardNumber: "",
                expiryDate: "",
                cvv:        "",
            }
        },
        computed: {
            maskedCardNumber() {
                // Format card number with asterisks to mimic a bank card appearance
                return this.cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ")
            },
        },
        methods: {
            saveSettings() {
                // Implement the logic to save the payment settings here
                console.log("Payment settings saved!")
            },
        },
    }
  </script>
  