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
		text: 'Before you begin', header: true, type: 'learn', key: 'accountsProfile', children: [
			{ text: 'Core concepts', slug: 'documentation/products/accounts/creating-account', key: 'accountsProfile/createAccount' },
			{ text: 'How does Azion work?', slug: 'documentation/products/accounts/account-settings', key: 'accountsProfile/settings' },
			{ text: 'Understand your account', slug: 'documentation/products/accounts/users-and-teams', key: 'accountsProfile/usersManagement' },
			{ text: 'Getting help', slug: 'documentation/products/credentials', key: 'accountsProfile/credentials' },
		]
	},

	{
		text: 'Getting Started', header: true, type: 'learn', key: 'accountsProfile', children: [
			{ text: 'Start from template', slug: 'documentation/products/accounts/creating-account', key: 'accountsProfile/createAccount' },
			{ text: 'Configuring a domain', slug: 'documentation/products/accounts/account-settings', key: 'accountsProfile/settings' },
			{ text: 'View metrics', slug: 'documentation/products/accounts/users-and-teams', key: 'accountsProfile/usersManagement' },
		]
	},

	{ text: '', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build', key: 'edgeApplication' },

	{ text: 'Build', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build/overview/', key: 'edgeApplication', hasLabel: 'menu.journey', addBorder: true },
	{ text: 'Secure', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build', key: 'edgeApplication' },
	{ text: 'Deploy', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build', key: 'edgeApplication' },
	{ text: 'Observe', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build', key: 'edgeApplication' },
	{ text: '', header: true, anchor: true, type: 'learn', slug: 'documentation/products/build', key: 'edgeApplication' },

	{
		text: 'Working with domains', header: true, type: 'learn', key: 'accountsProfile', children: [
			{ text: 'Configure a domain', header: true, anchor: true, type: 'learn', key: 'configureDomain', slug: '/documentation/products/configure-a-domain/' },
			{ text: 'Create digital certificate', header: true, anchor: true, type: 'learn',slug:'/documentation/products/create-digital-certificate/', key: 'certificateDomain' },
			{ text: 'Point your domain do Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/point-your-domain/', key: 'pointDomain' },
			{ text: 'Migrate your ns to Azion', header: true, anchor: true, type: 'learn', slug: '/documentation/products/migrate-ns-resolution/', key: 'migrateDomain' },
		]
	},

	{
		text: 'Platform', header: true, type: 'learn', key: 'accountsProfile', children: [
			{ text: 'Account and settings', header: true, anchor: true, type: 'learn', key: 'devtools/cli', slug: '/documentation/products/cli/' },
			{ text: 'IAM', header: true, anchor: true, type: 'learn', key: 'devtools/api', slug: 'a' },
			{ text: 'Limits', header: true, anchor: true, type: 'learn', slug: '/documentation/products/graphql-api/', key: 'devtools/graphQL' },
			{ text: 'Users and teams', header: true, anchor: true, type: 'learn', slug: '/documentation/products/edge-application/edge-functions/runtime/overview/', key: 'devtools/runtime' },
			{ text: 'Billing', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/sdk/go/', key: 'devtools/sdk' },
			{ text: 'Tokens', header: true, anchor: true, type: 'learn', slug: '/documentation/products/terraform-provider/', key: 'devtools/terraform' },
		]
	},
	{
		text: 'Developer tools', header: true, type: 'learn', key: 'accountsProfile', children: [
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
