import { tv, type VariantProps } from 'tailwind-variants';

export const skillTag = tv({
	base: 'flex items-center gap-1.5 rounded-md bg-stone-100 px-2.5 py-1 text-sm font-medium text-neutral-700 outline outline-1 outline-stone-300 duration-75 hover:text-white dark:text-stone-400 dark:outline-stone-700 dark:hover:text-red-200 dark:bg-stone-950',
	variants: {
		tone: {
			django:
				'hover:bg-green-100 hover:text-green-900 dark:hover:outline-green-700 dark:hover:bg-green-900 dark:hover:text-green-200',
			python:
				'hover:bg-orange-100 hover:text-orange-950 dark:hover:outline-orange-700 dark:hover:bg-orange-900 dark:hover:text-orange-200',
			svelte:
				'hover:bg-amber-100 hover:text-amber-950 dark:hover:outline-amber-700 dark:hover:bg-amber-900 dark:hover:text-amber-200',
			rails:
				'hover:bg-rose-100 hover:text-rose-950 dark:hover:outline-rose-700 dark:hover:bg-rose-900 dark:hover:text-rose-200',
			react:
				'hover:bg-cyan-100 hover:text-cyan-950 dark:hover:outline-cyan-700 dark:hover:bg-cyan-900 dark:hover:text-cyan-200',
			github:
				'hover:bg-gray-100 hover:text-gray-950 dark:hover:outline-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-200',
			tailwind:
				'hover:bg-blue-100 hover:text-blue-950 dark:hover:outline-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-200',
			typescript:
				'hover:bg-blue-100 hover:text-blue-950 dark:hover:outline-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-200',
			javascript:
				'hover:bg-yellow-100 hover:text-yellow-950 dark:hover:outline-yellow-700 dark:hover:bg-yellow-900 dark:hover:text-yellow-200',
			rust: 'hover:bg-orange-100 hover:text-orange-950 dark:hover:outline-orange-700 dark:hover:bg-orange-900 dark:hover:text-orange-200',
			go: 'hover:bg-sky-100 hover:text-sky-950 dark:hover:outline-sky-700 dark:hover:bg-sky-900 dark:hover:text-sky-200',
			sockets:
				'hover:bg-indigo-100 hover:text-indigo-950 dark:hover:outline-indigo-700 dark:hover:bg-indigo-900 dark:hover:text-indigo-200'
		}
	}
});

export type SkillTone = VariantProps<typeof skillTag>['tone'];

export const skillTagIcon = 'w-3.5 h-3.5 text-sm shrink-0';

export const socialTag = tv({
	base: 'flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-stone-200 text-sm font-medium drop-shadow duration-100 duration-200 hover:text-white active:scale-95 dark:text-stone-400 dark:hover:text-red-200 dark:bg-stone-900 dark:drop-shadow-none dark:outline dark:outline-1',
	variants: {
		tone: {
			linkedin:
				'hover:bg-cyan-300 hover:text-cyan-950 dark:hover:outline-cyan-700 dark:hover:bg-cyan-900 dark:hover:text-cyan-200',
			twitter:
				'hover:bg-blue-300 hover:text-blue-950 dark:hover:outline-blue-400 dark:hover:bg-blue-900 dark:hover:text-blue-200',
			instagram:
				'hover:bg-pink-300 hover:text-pink-950 dark:hover:outline-pink-700 dark:hover:bg-pink-900 dark:hover:text-pink-200',
			github:
				'hover:bg-gray-300 hover:text-gray-950 dark:hover:outline-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-200',
			facebook:
				'hover:bg-blue-300 hover:text-blue-950 dark:hover:outline-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-200',
			reddit:
				'hover:bg-orange-300 hover:text-orange-950 dark:hover:outline-orange-700 dark:hover:bg-orange-900 dark:hover:text-orange-200'
		}
	}
});

export type SocialTone = VariantProps<typeof socialTag>['tone'];

export const goLink = tv({
	base: 'flex items-center gap-2 text-lg duration-100 active:scale-95',
	variants: {
		linkable: {
			true: 'text-gray-950 hover:text-blue-950 dark:text-gray-50 dark:hover:text-blue-50'
		}
	}
});
