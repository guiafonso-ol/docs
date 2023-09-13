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
		text: 'Edge foundations', header: true, type: 'learn', key: 'accountsProfile', hasLabel: 'menu.begin', children: [
			{ text: 'What edge computing is', slug: '/documentation/products/edge-foundations/what-edge-computing-is/', key: 'accountsProfile/createAccount' },
			{ text: 'How edge computing works', slug: '/documentation/products/edge-foundations/how-edge-computing-works/', key: 'accountsProfile/settings' },
			{ text: 'Characteristics of an edge-native platform', slug: '/documentation/products/edge-foundations/edge-native-platforms/', key: 'accountsProfile/usersManagement' },
		]
	},
	{
		text: 'Azion foundations', header: true, type: 'learn', key: 'accountsProfile', children: [
			{ text: 'About Azion Edge Platform', slug: '/documentation/products/azion-foundations/about-azion-edge-platform/', key: 'aboutAzionPlatform' },
			{ text: 'How Azion Edge Platform works', slug: '/documentation/products/azion-foundations/how-azion-edge-platform-works/', key: 'howWorksAzionPlatform' },
			{ text: 'Azion products catalog', slug: '/documentation/products/azion-foundations/azion-products-catalog/', key: 'productsAzion' },
			{ text: 'How to start using Azion', slug: '/documentation/products/azion-foundations/how-to-start-using-azion/', key: 'startUsingAzion' },
		]
	},

	{ text: 'Understand your account', header: true, anchor: true, type: 'learn', slug: 'documentation/products/accounts/creating-account', key: 'accountsProfile/createAccount' },

	{ text: 'Get help', header: true, anchor: true, type: 'learn', slug: 'documentation/products/accounts/creating-account', key: 'accountsProfile/createAccount'},


	{ text: 'Start with a template', header: true, anchor: true, type: 'learn', slug: 'documentation/products/accounts/creating-account', key: 'accountsProfile/createAccount', hasLabel: "menu.getStarted" },
	{ text: 'Go live with Azion', header: true, anchor: true, type: 'learn', slug: 'documentation/products/accounts/account-settings', key: 'accountsProfile/settings' },
	{ text: 'View metrics', header: true, anchor: true, type: 'learn', slug: 'documentation/products/accounts/users-and-teams', key: 'accountsProfile/usersManagement', addBorder: true },

	{ text: 'Build', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build/overview/', key: 'edgeApplication', hasLabel: 'menu.journey' },
	{ text: 'Secure', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build', key: 'edgeApplication' },
	{ text: 'Deploy', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build', key: 'edgeApplication' },
	{ text: 'Observe', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build', key: 'edgeApplication' },

	{
		text: 'Working with domains', header: true, type: 'learn', key: 'accountsProfile',hasLabel:'menu.domains', children: [
			{ text: 'Configure a domain', header: true, anchor: true, type: 'learn', key: 'configureDomain', slug: '/documentation/products/configure-a-domain/' },
			{ text: 'Create digital certificate', header: true, anchor: true, type: 'learn', slug: '/documentation/products/create-a-digital-certificate/', key: 'certificateDomain' },
			{ text: 'Point your domain do Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/point-domain-to-azion/', key: 'pointDomain' },
			{ text: 'Migrate your ns to Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/migrate-ns-to-azion/', key: 'migrateDomain' },
		]
	},



	{ text: 'Create account', header: true, anchor: true, type: 'learn', key: 'devtools/cli', slug: '/documentation/products/cli/', hasLabel: 'menu.account' },

	{ text: 'Users', header: true, anchor: true, type: 'learn', key: 'devtools/api', slug: 'a' },
	{ text: 'Teams and permissions', header: true, anchor: true, type: 'learn', slug: '/documentation/products/graphql-api/', key: 'devtools/graphQL' },
	{ text: 'Activity history', header: true, anchor: true, type: 'learn', slug: '/documentation/products/edge-application/edge-functions/runtime/overview/', key: 'devtools/runtime' },
	{ text: 'Credentials', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/sdk/go/', key: 'devtools/sdk' },
	{ text: 'SSO', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },
	{ text: 'MFA', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },
	{ text: 'Billing and subscription', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },




	{
		text: 'Manage profile', header: true, type: 'learn', key: 'accountsProfile', addBorder: true, children: [
			{ text: 'Personal tokens', header: true, anchor: true, type: 'learn', key: 'devtools/api', slug: 'a' },
			{ text: 'Settings', header: true, anchor: true, type: 'learn', slug: '/documentation/products/graphql-api/', key: 'devtools/graphQL' },
		]
	},


	{
		text: 'Developer tools', header: true, type: 'learn', key: 'accountsProfile', hasLabel:'menu.addResources', children: [
			{ text: 'CLI', header: true, anchor: true, type: 'learn', key: 'devtools/cli', slug: '/documentation/products/cli/' },
			{ text: 'API', header: true, anchor: true, type: 'learn', key: 'devtools/api', slug: 'https://api.azion.com/' },
			{ text: 'API GraphQL', header: true, anchor: true, type: 'learn', slug: '/documentation/products/graphql-api/', key: 'devtools/graphQL' },
			{ text: 'Edge Runtime', header: true, anchor: true, type: 'learn', slug: '/documentation/products/edge-application/edge-functions/runtime/overview/', key: 'devtools/runtime' },
			{ text: 'SDK', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/sdk/go/', key: 'devtools/sdk' },
			{ text: 'Terraform', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },
			{ text: 'Building integrations', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },
			{ text: 'Platform Kit', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },
			{ text: 'Terraform', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },
			{ text: 'GitHub', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },

		]
	},

	{
		text: 'Reference', header: true, type: 'learn', key: 'accountsProfile', children: [
			{
				text: 'Build', header: true, type: 'learn', key: 'accountsProfile', children: [


				]
			},
			{
				text: 'Secure', header: true, type: 'learn', key: 'accountsProfile', children: [


				]
			},
			{
				text: 'Deploy', header: true, type: 'learn', key: 'accountsProfile', children: [


				]
			},
			{
				text: 'Observe', header: true, type: 'learn', key: 'accountsProfile', children: [


				]
			},

		]
	},



] as const;
