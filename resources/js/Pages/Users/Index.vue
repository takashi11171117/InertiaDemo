<template>
    <div>
        <h1 class="mb-8 font-bold text-3xl">Users</h1>
        <div class="mb-6 flex justify-between items-center">
            <search-filter v-model="form.search" class="w-full max-w-sm mr-4" @reset="reset">
                <label class="block text-grey-darkest">Role:</label>
                <select v-model="form.role" class="mt-1 w-full form-select">
                    <option :value="null" />
                    <option value="user">User</option>
                    <option value="owner">Owner</option>
                </select>
                <label class="mt-4 block text-grey-darkest">Trashed:</label>
                <select v-model="form.trashed" class="mt-1 w-full form-select">
                    <option :value="null" />
                    <option value="with">With Trashed</option>
                    <option value="only">Only Trashed</option>
                </select>
            </search-filter>
            <inertia-link class="btn-indigo" :href="route('users.create')">
                <span>Create</span>
                <span class="hidden md:inline">User</span>
            </inertia-link>
        </div>
        <div class="bg-white rounded shadow overflow-x-auto">
            <table class="w-full whitespace-no-wrap">
                <tr class="text-left font-bold">
                    <th class="px-6 pt-6 pb-4">Name</th>
                    <th class="px-6 pt-6 pb-4">Email</th>
                    <th class="px-6 pt-6 pb-4" colspan="2">Role</th>
                </tr>
                <tr v-for="user in users" :key="user.id" class="hover:bg-grey-lightest focus-within:bg-grey-lightest">
                    <td class="border-t">
                        <a class="px-6 py-4 flex items-center focus:text-indigo" href="#">
                            {{ user.name }}
                            <icon v-if="user.deleted_at" name="trash" class="flex-no-shrink w-3 h-3 fill-grey ml-2" />
                        </a>
                    </td>
                    <td class="border-t">
                        <a class="px-6 py-4 flex items-center" href="#" tabindex="-1">
                            {{ user.email }}
                        </a>
                    </td>
                    <td class="border-t">
                        <a class="px-6 py-4 flex items-center" href="#" tabindex="-1">
                            {{ user.owner ? 'Owner' : 'User' }}
                        </a>
                    </td>
                    <td class="border-t w-px">
                        <inertia-link class="px-4 flex items-center" :href="route('users.edit', user.id)" tabindex="-1">
                            <icon name="cheveron-right" class="block w-6 h-6 fill-grey" />
                        </inertia-link>
                    </td>
                </tr>
                <tr v-if="users.length === 0">
                    <td class="border-t px-6 py-4" colspan="4">No users found.</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
	import Icon from '@/Shared/Icon'
	import Layout from '@/Shared/Layout'
	import mapValues from 'lodash/mapValues'
	import pickBy from 'lodash/pickBy'
	import SearchFilter from '@/Shared/SearchFilter'
	import throttle from 'lodash/throttle'
	export default {
		metaInfo: { title: 'Users' },
		layout: Layout,
		components: {
			Icon,
			SearchFilter,
		},
		props: {
			users: Array,
			filters: Object,
		},
		data() {
			return {
				form: {
					search: this.filters.search,
					role: this.filters.role,
					trashed: this.filters.trashed,
				},
			}
		},
		watch: {
			form: {
				handler: throttle(function() {
					let query = pickBy(this.form)
					this.$inertia.replace(this.route('users', Object.keys(query).length ? query : { remember: 'forget' }))
				}, 150),
				deep: true,
			},
		},
		methods: {
			reset() {
				this.form = mapValues(this.form, () => null)
			},
		},
	}
</script>