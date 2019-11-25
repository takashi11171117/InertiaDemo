<template>
    <div>
        <div class="flex flex-col">
            <div class="h-screen flex flex-col">
                <div class="md:flex">
                    <div class="bg-indigo-darkest md:flex-no-shrink md:w-56 px-6 py-4 flex items-center justify-between md:justify-center">
                    </div>
                </div>
                <div class="flex flex-grow overflow-hidden">
                    <div class="w-full overflow-hidden px-4 py-8 md:p-12 overflow-y-auto" scroll-region>
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				showUserMenu: false,
				accounts: null,
			}
		},
		methods: {
		},
	}
</script>