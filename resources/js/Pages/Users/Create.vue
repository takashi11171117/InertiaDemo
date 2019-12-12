<template>
    <div>
        <h1 class="mb-8 font-bold text-3xl">
            <inertia-link class="text-indigo-light hover:text-indigo-dark" :href="route('users')">Users</inertia-link>
            <span class="text-indigo-light font-medium">/</span> Create
        </h1>
        <div class="bg-white rounded shadow overflow-hidden max-w-lg">
            <form @submit.prevent="submit">
                <div class="p-8 -mr-6 -mb-8 flex flex-wrap">
                    <text-input v-model="form.first_name" class="pr-6 pb-8 w-full lg:w-1/2" label="First name" />
                    <text-input v-model="form.last_name" class="pr-6 pb-8 w-full lg:w-1/2" label="Last name" />
                    <text-input v-model="form.email" class="pr-6 pb-8 w-full lg:w-1/2" label="Email" />
                    <text-input v-model="form.password" class="pr-6 pb-8 w-full lg:w-1/2" type="password" autocomplete="new-password" label="Password" />
                    <select-input v-model="form.owner" class="pr-6 pb-8 w-full lg:w-1/2" label="Owner">
                        <option :value="true">Yes</option>
                        <option :value="false">No</option>
                    </select-input>
                </div>
                <div class="px-8 py-4 bg-grey-lightest border-t border-grey-lighter flex justify-end items-center">
                    <loading-button :loading="sending" class="btn-indigo" type="submit">Create User</loading-button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
	import Layout from '@/Shared/Layout'
	import LoadingButton from '@/Shared/LoadingButton'
	import SelectInput from '@/Shared/SelectInput'
	import TextInput from '@/Shared/TextInput'

	export default {
		metaInfo: { title: 'Create User' },
		layout: Layout,
		components: {
			LoadingButton,
			SelectInput,
			TextInput,
		},
		data() {
			return {
				sending: false,
				form: {
					first_name: null,
					last_name: null,
					email: null,
					password: null,
					owner: false,
				},
			}
		},
		methods: {
			submit() {
				this.sending = true
				const data = new FormData()
				data.append('first_name', this.form.first_name || '')
				data.append('last_name', this.form.last_name || '')
				data.append('email', this.form.email || '')
				data.append('password', this.form.password || '')
				data.append('owner', this.form.owner ? '1' : '0')
				this.$inertia.post(this.route('users.store'), data)
				.then(() => this.sending = false)
			},
		},
	}
</script>