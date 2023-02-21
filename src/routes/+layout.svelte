<script>
	import { onMount } from 'svelte';
	import BlogHeader from '../components/BlogHeader.svelte';

	let darkMode = false;

	onMount(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			darkMode = true;
			const bodyElement = document.querySelector('body');
			bodyElement && bodyElement.classList.add('dark');
		}
	});
</script>

<div class="layout">
	<BlogHeader {darkMode} title="Marouane Faris" />
	<slot />
</div>

<style>
	.layout {
		word-wrap: break-word;
		font-kerning: normal;

		position: relative;
		margin-left: auto;
		margin-right: auto;
		max-width: 42rem;
		padding: 2.5rem 1.5rem;
		min-height: 100vh;
	}
</style>
