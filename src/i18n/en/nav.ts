/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Documentation', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'documentation' },
	{ text: 'Guides', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/', key: 'guides' },
	{ text: 'Dev Tools', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/products/dev-tools/', key: 'devTools' },
	{ text: 'Learn', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: 'https://learn.azion.com/', key: 'Learn' },

	{
		text: 'Edge foundations', header: true, type: 'learn', key: 'edgeFoundations', hasLabel: 'menu.begin', children: [
			{ text: 'What edge computing is', slug: '/documentation/products/edge-foundations/what-edge-computing-is/', key: 'EdgeComputingIs' },
			{ text: 'How edge computing works', slug: '/documentation/products/edge-foundations/how-edge-computing-works/', key: 'edgeComputingWorks' },
			{ text: 'Characteristics of an edge-native platform', slug: '/documentation/products/edge-foundations/edge-native-platforms/', key: 'edgeNativePlatform' },
		]
	},
	{
		text: 'Azion foundations', header: true, type: 'learn', key: 'azionFoundations',  children: [
			{ text: 'About Azion Edge Platform', slug: '/documentation/products/azion-foundations/about-azion-edge-platform/', key: 'aboutAzionPlatform' },
			{ text: 'How Azion Edge Platform works', slug: '/documentation/products/azion-foundations/how-azion-edge-platform-works/', key: 'howWorksAzionPlatform' },
			{ text: 'Azion products catalog', slug: '/documentation/products/azion-foundations/azion-products-catalog/', key: 'productsAzion' },
			{ text: 'Explore Azion', slug: '/documentation/products/azion-foundations/explore-azion/', key: 'startUsingAzion' },
		]
	},

	{ text: 'Understand your account WIP', header: true, anchor: true, type: 'learn', slug: '/documentation/', key: 'accountsProfile/createAccount' },

	{ text: 'Get help', header: true, anchor: true, type: 'learn', slug: 'documentation/products/get-help/', key: 'getHelp' },

	{ text: 'Welcome to the edge', header: true, anchor: true, type: 'learn', slug: '/documentation/products/get-started/', key: 'getStarted/welcome', hasLabel: "menu.getStarted" },
	{ text: 'Start with a template', header: true, anchor: true, type: 'learn', slug: '/documentation/products/start-with-a-template/', key: 'getStarted/template' },
	{ text: 'Go live with Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/go-live-with-azion/', key: 'getStarted/goLive' },
	{ text: 'View metrics', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/use-real-time-metrics/', key: 'getStarted/viewMetrics', addBorder: true },


	{ text: 'Build', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/build/overview/', key: 'build', hasLabel: 'menu.journey' },
	{ text: 'Secure', header: true, anchor: true, type: 'learn', slug: 'documentation/products/secure', key: 'secure' },
	{ text: 'Deploy', header: true, anchor: true, type: 'learn', slug: 'documentation/products/deploy', key: 'deploy' },
	{ text: 'Observe', header: true, anchor: true, type: 'learn', slug: 'documentation/products/observe', key: 'observe' },

	{ text: 'Configure a domain', header: true, anchor: true, type: 'learn', key: 'configureDomain', slug: '/documentation/products/guides/configure-a-domain/', hasLabel: 'menu.domains' },
	{ text: 'Create digital certificate', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/create-a-digital-certificate/', key: 'certificateDomain' },
	{ text: 'Point domain to Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/point-domain-to-azion/', key: 'pointDomain' },
	{ text: 'Migrate NS to Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/migrate-ns-to-azion/', key: 'migrateDomain' },




	{ text: 'Create account', header: true, anchor: true, type: 'learn', key: 'account/createAccount', slug: '/documentation/products/accounts/creating-account/', hasLabel: 'menu.account' },

	{
		text: 'Manage account', header: true, type: 'learn', key: 'accountsAccount', children: [
			{ text: 'Users', header: true, anchor: true, type: 'learn', key: 'account/Users', slug: '/documentation/products/guides/users-management/' },
			{ text: 'Teams permissions', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/teams-permissions/', key: 'account/teamsPermissions' },
			{ text: 'Activity history', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/activity-history/', key: 'account/activityHistory' },
			{ text: 'Credentials', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/credentials/' },
			{ text: 'SSO', header: true, anchor: true, type: 'learn', slug: 'documentation/products/guides/sso/', key: 'account/sso' },
			{ text: 'MFA', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/multi-factor-authentication/', key: 'account/mfa' },
			{ text: 'Billing and subscription', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/billing-and-subscriptions/', key: 'account/billingAndSubscriptions' },
		]
	},
	



{
	text: 'Professional Services', header: true, type: 'learn', key: 'professionalServices', children: [
		{ text: 'Service Plans', header: true, anchor: true, type: 'learn', key: 'professionalServices/servicePlans', slug: '/documentation/services/service-plans/' },
		{ text: 'Integration Services', header: true, anchor: true, type: 'learn', slug: '/documentation/services/solutions-lab/integration-services/', key: 'professionalServices/integrationServices' },
		{ text: 'Technical Account Manager', header: true, anchor: true, type: 'learn', slug: '/documentation/services/technical-account-manager/', key: 'professionalServices/TAM' },
		{ text: 'Best Practices Review', header: true, anchor: true, type: 'learn', slug: '/documentation/services/best-practices-review/', key: 'professionalServices/bestPracticesReview' },
		{ text: 'Custom Education Programs', header: true, anchor: true, type: 'learn', slug: '/documentation/services/custom-education-programs/', key: 'professionalServices/customEducationPrograms' },
		{ text: 'Security Response Team', header: true, anchor: true, type: 'learn', slug: '/documentation/services/security-response-team/', key: 'professionalServices/SRT' },
		{ text: 'Technical Support', header: true, anchor: true, type: 'learn', slug: '/documentation/services/support/', key: 'professionalServices/technicalSupport' },
		{ text: 'Business Events Support', header: true, anchor: true, type: 'learn', slug: '/documentation/services/business-events-support/', key: 'professionalServices/businessEventsSupport' },
		{ text: 'Slack Channel', header: true, anchor: true, type: 'learn', slug: '/documentation/services/slack-channel/', key: 'professionalServices/SlackChannel' },
	]
},

	{ text: 'Dev Tools', header: true, type: 'learn', key: 'devtools', addBorder: true, children: [
		{ text: 'API', slug: 'https://api.azion.com', key: 'api' },
		{ text: 'GraphQL API', slug: 'documentation/products/graphql-api', key: 'graphQLAPI' },
		{ text: 'Azion CLI', slug: '/documentation/products/azion-cli/overview/', key: 'azionCLI' },
		{ text: 'Edge Runtime', slug: 'documentation/products/edge-application/edge-functions/runtime/overview', key: 'edgeRuntime' },
		{ text: 'SDK', slug: 'documentation/devtools/sdk/go', key: 'sdkGO' },
		{ text: 'Terraform', slug: 'documentation/products/terraform-provider', key: 'terraform' },
	]},



	{ text: 'Changelog', header: true, type: 'learn', anchor: true, slug: 'documentation/products/changelog', key: 'changelog' },
	{ text: 'System Status', header: true, type: 'learn', anchor: true, slug: 'https://status.azion.com', key: 'systemStatus' },
	{ text: 'Azion Network Program', header: true, type: 'learn', anchor: true, slug: 'documentation/products/azion-network-program', key: 'azionNetworkProgram' },


] as const;
