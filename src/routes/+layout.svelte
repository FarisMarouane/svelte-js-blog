<script>
	import '@fontsource/merriweather'; // Defaults to weight 400.
	import BlogHeader from '../components/BlogHeader.svelte';
	import '../global.css';
</script>

<div class="layout">
	<BlogHeader title="Marouane Faris" />
	<slot />
</div>

<style>
	.layout {
		font-family: 'Merriweather';
		font-weight: 400;
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
