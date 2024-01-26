/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven't translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Documentation', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'documentation' },
	{ text: 'Guides', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/', key: 'guides' },
	{ text: 'Dev Tools', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/devtools/', key: 'devTools' },

	/// START HERE :::: DO NOT REMOVE the strings above, it's a work around for header on mobile /// 
	{ text: 'Overview', header: true, anchor: true, slug: '/documentation/learn/', key: 'learnOverview', hasLabel: 'menu.learn' },
	

	{
			text: 'Edge Foundations I', header: true, type: 'learn', key: 'editEdgeApp', children: [
					{ text: 'Welcome to Edge Computing', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'mainSettings' },
					{ text: 'From Past to Present', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'deviceGroups' },
					{ text: 'Edge ,Cloud , and Legacy Architectures', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'errorPages' },
					{ text: 'Key Concepts Simplified', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
					{ text: 'Guide to Its Layers', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'cacheSettings' },
					{ text: 'Conclusion', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'rules' },
			]
	},

	{
		text: 'Getting Started', header: true, type: 'learn', key: 'editEdgeApp', children: [
				{ text: 'First steps', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'mainSettings' },
				{ text: 'Install and Run Azion CLI', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'deviceGroups' },
				{ text: 'Creating and revoking Personal Tokens', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'errorPages' },
				{ text: 'Looking up DNS', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
				{ text: 'Opening a support ticket ', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'cacheSettings' },
		]
},

{
	text: 'Edge Applications', header: true, type: 'learn', key: 'editEdgeApp', children: [
			{ text: 'Create an edge function', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'mainSettings' },
			{ text: 'Deploy Next.js Apps on the Edge', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'deviceGroups' },
			{ text: 'Customizing an error response page', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'errorPages' },
			{ text: 'Setting Up and Deleting Domains', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
	]
},

{
	text: 'Secure - WAF Foundations', header: true, type: 'learn', key: 'editEdgeApp', children: [
			{ text: 'Introduction to WAF', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'mainSettings' },
			{ text: 'Observing WAF in real time', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'deviceGroups' },
			{ text: 'Custom Allowed Rule', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'errorPages' },
			{ text: 'SQL Injection attack', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
			{ text: 'XSS attack', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
			{ text: 'RFI attack', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
			{ text: 'Directory Traversal attack', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
			{ text: 'WAF in Learning Mode', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
			{ text: 'WAF in Block Mode', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
			{ text: 'Network Lists ', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/', key: 'origins' },
	]
},

] as const;
