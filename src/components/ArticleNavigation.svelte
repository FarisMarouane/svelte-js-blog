<script>
	export let articlesLinks;
	export let currentArticleId;
</script>

<nav>
	<ul class="unorderedList">
		{#if articlesLinks.length === 1}
			<li style={`margin-left: ${currentArticleId === 0 ? 'auto' : 'initial'}`}>
				<a rel={currentArticleId !== 0 ? 'prev' : 'next'} href={articlesLinks[0].path}>
					{currentArticleId !== 0 ? '← ' : ''}
					{articlesLinks[0].name}{' '}
					{currentArticleId === 0 ? ' →' : ''}
				</a>
			</li>
		{:else}
			{#each articlesLinks as { path, name }, index}
				<li key={name}>
					<a rel={index === 0 ? 'prev' : 'next'} href={path}>
						{index === 0 ? '← ' : ''}
						{name}
						{index === 1 ? ' →' : ''}
					</a>
				</li>
			{/each}
		{/if}
	</ul>
</nav>

<style>
	.unorderedList {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		list-style: none;
		padding: 0;
	}
</style>
