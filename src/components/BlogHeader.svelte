<script>
	import { page } from '$app/stores';
	import Toggle from './Toggle.svelte';

	export let title;
	export let darkMode;

	const toggleDarkMode = () => {
		const bodyElement = document.querySelector('body');

		if (bodyElement) {
			const classList = bodyElement.classList;

			if (classList.contains('dark')) {
				classList.remove('dark');
			} else {
				classList.add('dark');
			}
		}
	};
</script>

<header class="header">
	{#if $page.url.pathname === '/'}
		<h1 class="primaryTitle">
			<a class="link" href="/">
				{title}
			</a>
		</h1>
	{:else}
		<h3 class="tertiaryTitle">
			<a class="link" href="/">
				{title}
			</a>
		</h3>
	{/if}
	<Toggle {darkMode} toggleId="dark-mode" onToggle={toggleDarkMode} />
</header>

<style>
	.header {
		font-family: 'Montserrat';
		font-weight: 900;

		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2.5rem;
	}

	.link {
		box-shadow: none;
		text-decoration: none;
	}

	.primaryTitle {
		font-size: 2rem;
		line-height: 2.5rem;
		margin-bottom: 0;
		margin-top: 0;
		font-weight: 900;
		color: var(--textTitle);
	}

	.primaryTitle a {
		color: var(--textTitle);
	}

	.tertiaryTitle {
		margin-top: 0;
		line-height: 2.5rem;
	}

	.tertiaryTitle a {
		color: rgb(255, 167, 196);
	}
</style>
