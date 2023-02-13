<!-- const font = Montserrat({ subsets: ['latin'], weight: '900' });

const { pathname } = useRouter();
const { theme, setTheme } = useContext(ThemeContext); -->
<script>
	import { page } from '$app/stores';

	export let title;

	// const toggleDarkMode = () => {
	//   const bodyElement = document.querySelector('body');

	//   if (bodyElement) {
	//     const classList = bodyElement.classList;

	//     if (classList.contains('dark')) {
	//       classList.remove('dark');
	//       setTheme('light');
	//     } else {
	//       classList.add('dark');
	//       setTheme('dark');
	//     }
	//   }
	// };
</script>

<!-- import { useRouter } from 'next/router';
import { useContext, Context } from 'react';
import { ThemeContext, ThemeContextType, ThemeType } from './ContextProvider';
import styles from '../styles/components/Header.module.css';
import Link from 'next/link';

import { Montserrat } from '@next/font/google';
import ToggleInput from './Toggle'; -->

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
	<!-- <ToggleInput
        checked={theme === 'dark' ? true : false}
        onChange={toggleDarkMode}
      /> -->
</header>

<style>
	.header {
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
