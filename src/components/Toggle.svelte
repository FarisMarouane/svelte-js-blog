<script>
	export let onToggle;
	export let darkMode;
	export let toggleId;

	let checked = false;
	let focused = false;

	let checkbox;

	$: if (darkMode) {
		checked = true;
		checkbox.click();
	}

	const onClick = () => {
		checked = !checked;
		onToggle();
		if (checked) {
			checkbox.click();
			checkbox.focus();
			return;
		}
		if (!checked) {
			checkbox.click();
			checkbox.focus();
			return;
		}
	};

	const onInputClick = (e) => {
		// Prevent container's click form triggering
		e.stopPropagation();
	};

	const onFocus = () => {
		focused = true;
	};

	const onBlur = () => {
		focused = false;
	};

	const onKeyup = (e) => {
		e.preventDefault();
		if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
			checked = !checked;
			onToggle();
			checkbox.click();
		}
	};
</script>

<div
	on:click={onClick}
	on:keyup={onKeyup}
	on:focus={onFocus}
	on:blur={onBlur}
	tabindex="-1"
	class={`toggle ${focused ? 'toggle--focused' : ''} ${checked ? 'toggle--checked' : ''}`}
>
	<div class="track">
		<div class="unchecked_icon">
			<img src="/crescent.png" alt="cresent" width={16} height={16} loading="lazy" />
		</div>
		<div class="checked_icon">
			<img src="/sun.png" alt="sun" width={16} height={16} loading="lazy" />
		</div>
	</div>
	<div class="thumb" />
	<label class="toggle-screenreader-only" for={toggleId} />
	<input
		bind:this={checkbox}
		tabindex="0"
		on:click={onInputClick}
		on:focus={onFocus}
		on:blur={onBlur}
		class="toggle-screenreader-only"
		type="checkbox"
		id={toggleId}
		name={toggleId}
	/>
</div>

<style>
	.toggle {
		touch-action: pan-x;
		display: inline-block;
		position: relative;
		cursor: pointer;
		background-color: transparent;
		border: 0;
		padding: 0;
		outline: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	}

	.toggle--focused .thumb {
		box-shadow: 0 0 2px 3px #ffa7c4;
	}

	.toggle--checked .thumb {
		transform: translateX(26px);
		border-color: #19ab27;
	}

	.track {
		width: 50px;
		height: 24px;
		padding: 0;
		border-radius: 30px;
		background-color: #0f1114;
	}

	.unchecked_icon {
		position: absolute;
		width: 17px;
		height: 17px;
		left: 5px;
		top: 0;
		bottom: 0;
		margin-top: auto;
		margin-bottom: auto;
		line-height: 0;
	}

	.checked_icon {
		position: absolute;
		width: 17px;
		height: 17px;
		right: 5px;
		top: 0;
		bottom: 0;
		margin-top: auto;
		margin-bottom: auto;
		line-height: 0;
	}

	.thumb {
		position: absolute;
		top: 1px;
		left: 1px;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background-color: #fafafa;
		box-sizing: border-box;
		transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
	}

	.toggle-screenreader-only {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
</style>
