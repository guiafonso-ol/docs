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
			text: 'Introduction to Edge Computing', header: true, type: 'learn', slug: '/documentation/learn/intro', key: 'intro', children: [
					{ text: 'Welcome', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/welcome', key: 'welcome' },
					{ text: 'Edge Timeline: Past to Present', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/timeline', key: 'timeline' },
					{ text: 'Edge, Cloud, and Legacy Architectures', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/comparingEdgeCloud', key: 'comparingEdgeCloud' },
					{ text: 'Edge Computing Key Concepts', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/concepts', key: 'concepts' },
					{ text: 'Edge Computing Anatomy', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/anatomy', key: 'anatomy' },
					{ text: 'A Comprehensive Use Case Guide', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/usecase', key: 'useCase' },
					{ text: 'Conclusion', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/conclusion', key: 'conclusion' },
			]
	},

	{
		text: 'Starting Up', header: true, type: 'learn', key: 'editEdgeApp', children: [
				{ text: 'What is Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/azion', key: 'azion' },
				{ text: 'Get to Know the Platform', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/platform', key: 'platform' },
				{ text: 'Install and Run Azion CLI', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/cli', key: 'cli' },
		]
},

{
	text: 'Build Edge Applications', header: true, type: 'learn', key: 'editEdgeApp', children: [
			{ text: 'Create an edge function', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/function', key: 'edgeFunction' },
			{ text: 'Edge-Deploy Next.js Apps with Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/nextjs', key: 'deployNextjs' },
			{ text: 'Customizing an error response page', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/error', key: 'errorPages' },
			{ text: 'Setting Up and Deleting Domains', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/domains', key: 'domains' },
	]
},

{
	text: 'Secure', header: true, type: 'learn', key: 'editEdgeApp', children: [
			{ text: 'WAF Introduction', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/waf', key: 'introduction' },
			{ text: 'Real Time Metrics and Events', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/metrics', key: 'metrics' },
			{ text: 'Custom Allowed Rule', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/custom', key: 'custom' },
			{ text: 'SQL Injection', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/sql', key: 'sql' },
			{ text: 'XSS Threats', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/xss', key: 'xss' },
			{ text: 'RFI Threats', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/rfi', key: 'rfi' },
			{ text: 'Directory Traversal', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/directory', key: 'directory' },
			{ text: 'WAF in Learning Mode ', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/learning', key: 'learningMode' },
			{ text: 'WAF in Block Mode ', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/block', key: 'blockMode' },
			{ text: 'Rules with Network Lists', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/lists', key: 'lists' },
			{ text: 'WAF Rate Limits', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/limits', key: 'limits' },
			{ text: 'WAF Usage: Edge Firewall Rules', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/rules', key: 'rules' },
			{ text: 'Advanced Tunning', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/tuning', key: 'tuninng' },
	]
},

{
	text: 'Deploy', header: true, type: 'learn', key: 'editEdgeApp', children: [
			{ text: 'Creating an Edge Service', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/service', key: 'edgeService' },
			{ text: 'Azion Edgesss Node', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/node', key: 'edgeNode' },
	]
},

{
	text: 'Observe', header: true, type: 'learn', key: 'editEdgeApp', children: [
			{ text: 'Data Streaming', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/datastreaming', key: 'dataStreaming' },
			{ text: 'Usage and Domain Association', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/domainassociation', key: 'domainAssociation' },
			{ text: 'Amazon S3', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/s3', key: 's3' },
			{ text: 'Amazon Kinesis Data Firehose', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/firehose', key: 'firehose' },
			{ text: 'First steps with GraphQL', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/graphql', key: 'graphQl' },
			{ text: 'Metadata: GraphQL with Azion API', header: true, anchor: true, type: 'learn', slug: '/documentation/learn/metadata', key: 'metadata' },
	]
},

] as const;
