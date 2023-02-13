<script>
	import BlogHeader from '../components/BlogHeader.svelte';
	import '../global.css';
</script>

<div class="layout">
	<BlogHeader title="Marouane Faris" />
	<slot />
</div>

<style>
	.layout {
		position: relative;
		margin-left: auto;
		margin-right: auto;
		max-width: 42rem;
		padding: 2.5rem 1.5rem;
		min-height: 100vh;
	}
</style>
