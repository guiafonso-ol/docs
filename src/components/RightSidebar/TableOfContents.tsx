interface Props {
	toc: TocItem[];
	labels: {
		onThisPage: string;
	};
	isMobile?: boolean;
}

import type { ComponentChildren, JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import type { TocItem } from '~/util/generateToc';
import { unescape } from '~/util/html-entities';

const TableOfContents = ({ toc = [], labels, isMobile }: Props) => {
	// console.log(`toc: `, toc);
	// console.log(`labels: `, labels);
	// console.log(' ');

	const [
		currentHeading,
		setCurrentHeading
	] = useState({
		slug: toc[0].slug,
		text: toc[0].text
	});
	const [open, setOpen] = useState(!isMobile);
	const onThisPageID = 'on-this-page-heading';

	const Container = ({ children }: { children: ComponentChildren }) => {
		return isMobile ? (
			<details
				{...{ open }}
				onToggle={(e: JSX.TargetedEvent<HTMLDetailsElement>) => setOpen(e.currentTarget.open)}
				className="toc-mobile-container"
			>
				{children}
			</details>
		) : (
			<>{children}</>
		);
	};

	const HeadingContainer = ({ children }: { children: JSX.Element }) => {
		return isMobile ? (
			<summary className="toc-mobile-header">
				<div className="toc-mobile-header-content">
					<div className="toc-toggle">
						{children}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 1 16 16"
							width="16"
							height="16"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
							></path>
						</svg>
					</div>
					{!open && currentHeading?.slug !== 'overview' && (
						<span className="toc-current-heading">{unescape(currentHeading?.text || '')}</span>
					)}
				</div>
			</summary>
		) : (
			children
		);
	};

	useEffect(() => {
		console.log('useEffect loading page');
		
		const setCurrent: IntersectionObserverCallback = (entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const { id } = entry.target;
					
					if (id === onThisPageID) continue;
					
					setCurrentHeading({
						slug: entry.target.id,
						text: entry.target.textContent || '',
					});
					
					break;
				}
			}
		};

		const observerOptions: IntersectionObserverInit = {
			// Negative top margin accounts for `scroll-margin`.
			// Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
			rootMargin: '-40px 0% -86%',
			threshold: 1,
		};

		const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

		// Observe all the headings in the main page content.
		document.querySelectorAll('article :is(h1,h2,h3)').forEach((h) => headingsObserver.observe(h));

		// Stop observing when the component is unmounted.
		return () => headingsObserver.disconnect();
	}, []);

	const onLinkClick = (e: JSX.TargetedMouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const targetHref = e.currentTarget.getAttribute('href');
		const selectorTitle = document.querySelector(`${targetHref}`);
		const getOffsetTop = selectorTitle.offsetTop - 96;

		window.scrollTo({
			top: getOffsetTop,
			behavior: 'smooth',
		});
		
		// if (!isMobile) return;	
		// setOpen(false);
		// setCurrentHeading({
		// 	slug: e.currentTarget.getAttribute('href')!.replace('#', ''),
		// 	text: e.currentTarget.textContent || '',
		// });
	};

	const TableOfContentsItem = ({ heading }: { heading: TocItem }) => {
		const { depth, slug, text, children } = heading;
		return (
			<li>
				<a
					className={`px-3 py-1 rounded hover:underline hover:text-color text-sm flex items-center gap-3 leading-1  depth-${depth} ${
						currentHeading.slug === slug ? 'surface-200' : ''
					}`.trim()}
					href={`#${slug}`}
					onClick={onLinkClick}
				>
					{unescape(text)}
				</a>
				{children.length > 0 ? (
					<ul class="px-3">
						{children.map((heading) => (
							<TableOfContentsItem key={heading.slug} heading={heading} />
						))}
					</ul>
				) : null}
			</li>
		);
	};

	return (
		<Container>
			<HeadingContainer>
				<p className="mt-2 mb-4 text-sm" id={onThisPageID}>
					<strong class="font-medium">
						{labels.onThisPage}
					</strong>
				</p>
			</HeadingContainer>
			<ul>
				{toc.map((heading2) => (
					<TableOfContentsItem key={heading2.slug} heading={heading2} />
				))}
			</ul>
		</Container>
	);
};

export default TableOfContents;
