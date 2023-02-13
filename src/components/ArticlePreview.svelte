<script>
	export let title;
	export let publicationDate;
	export let readingTime;
	export let description;
	export let slug;
</script>

<article>
	<header>
		<h2 class="title">
			<a href="/blog/{slug}">{title}</a>
		</h2>
		<small>
			{publicationDate}&nbsp;&bull;&nbsp;{readingTime}
		</small>
	</header>
	<p>{description}</p>
</article>

<style>
	.title {
		font-size: 1.75rem;
		margin-bottom: 0.5rem;
	}
</style>
