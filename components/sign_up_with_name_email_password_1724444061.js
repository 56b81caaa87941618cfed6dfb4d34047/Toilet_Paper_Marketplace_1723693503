<template>
  <main class="flex flex-col items-center justify-center bg-gray-50 w-1/2 sm:px-4 py-10 mx-auto">
    <div class="w-full space-y-6 text-gray-600 sm:max-w-md">
      <div class="text-center">
        <div class="mt-5 space-y-2">
          <div class="flex justify-center">
            <h3 class="text-gray-800 text-xl font-bold">
              SIGN_UP_COMPONENT_CREATE_ACCOUNT_PLACEHOLDER_TEXT
            </h3>
          </div>
          <p class="text-center">SIGN_UP_COMPONENT_ALREADY_HAVE_ACCOUNT_PLACEHOLDER_TEXT
            <a href="javascript:void(0)" class="text-center font-medium text-indigo-600 hover:text-indigo-500">SIGN_UP_COMPONENT_LOGIN_PLACEHOLDER_TEXT</a>
          </p>
        </div>
      </div>
      <div class="bg-white text-center shrink shadow py-6 sm:p-6 sm:rounded-lg">
        <form @submit.prevent class="space-y-5">
          <div>
            <label class="font-medium">SIGN_UP_COMPONENT_NAME_PLACEHOLDER_TEXT</label>
            <input type="text" required class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
          </div>
          <div>
            <label class="font-medium">SIGN_UP_COMPONENT_EMAIL_PLACEHOLDER_TEXT</label>
            <input type="email" required class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
          </div>
          <div>
            <label class="font-medium">SIGN_UP_COMPONENT_PASSWORD_PLACEHOLDER_TEXT</label>
            <input type="password" required class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"/>
          </div>
          <div>
            <button class="text-xs px-4 py-2 pr-10 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              <h6 class="text-gray-800 text-xs text-white font-medium">SIGN_UP_COMPONENT_ADD_ACCOUNT_BUTTON_PLACEHOLDER_TEXT</h6>
            </button>
          </div>
        </form>
        <div class="mt-5">
          <button class="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-xs font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
            <!-- Comment: Google Icon SVG here -->
            <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg" alt="Google" class="h-5"/>
            <span class="text-xs font-medium">SIGN_UP_COMPONENT_GOOGLE_PLACEHOLDER_TEXT</span>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SignUpWithNameEmailPassword',
  data() { 
    return { 
      // Data properties can be added here 
    } 
  },
}
</script>

<style scoped>
/* Add any component specific styles here */
</style>