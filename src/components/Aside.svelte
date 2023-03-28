<aside>
	<div class="aside">
		<img
			class="profile_pic"
			src="/photo_linkedin.jpeg"
			alt="marouane_faris_profile_pic"
			loading="lazy"
			width={56}
			height={56}
		/>
		<p class="description">
			Personal blog by{' '}
			<a href="https://github.com/FarisMarouane/" target="_blank" rel="noreferrer">
				Marouane Faris
			</a>
			.
			<br />
			Ideas expressed on this blog are stricly my own, and not those of potential employers.
			<br />
			<br />
			Made using the{' '}
			<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer"> SvelteKit framework </a>
		</p>
	</div>
</aside>

<style>
	.aside {
		display: flex;
		margin-bottom: 3.5rem;
	}

	.description {
		max-width: 310px;
	}

	.profile_pic {
		margin-right: 0.8rem;
		margin-bottom: 0;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
	}
</style>
