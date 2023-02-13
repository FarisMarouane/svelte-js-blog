<footer class="footer">
	<a href="https://twitter.com/MarouaneFaris1" target="_blank" rel="noreferrer"> Twitter </a>{' '}
	<div>
		&nbsp; &bull; &nbsp;
		<a href="https://github.com/FarisMarouane/next-js-blog" target="_blank" rel="noreferrer">
			Github
		</a>{' '}
	</div>
	<div>
		&nbsp; &bull; &nbsp;
		<a
			href="https://stackoverflow.com/users/6375543/faris-marouane"
			target="_blank"
			rel="noreferrer"
		>
			Stackoverflow
		</a>
	</div>
	<a href="/about_me">About me</a>
</footer>

<style lang="scss">
	.footer {
		position: absolute;
		bottom: 15px;
		display: flex;
		justify-content: space-between;
		padding: 1.8rem 1.5rem 0;
		margin: 4.5rem auto 0;
		left: 0;
		right: 0;
	}
	@media screen and (max-width: 400px) {
		.footer div:nth-child(2) {
			display: none;
		}
	}
	.footer a:last-child {
		margin-left: auto;
	}
</style>
