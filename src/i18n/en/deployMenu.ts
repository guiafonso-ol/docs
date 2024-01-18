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
    { text: 'Dev Tools', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: '/documentation/products/dev-tools/', key: 'devTools' },

    /// START HERE :::: DO NOT REMOVE the strings above, it's a work around for header on mobile /// 
    { text: 'Overview', header: true, anchor: true, slug: '/documentation/products/deploy/overview/', key: 'deployOverview', hasLabel: 'menu.deploy' },
    { text: 'Deploy a service', header: true, anchor: true, slug: '/documentation/products/deploy/deploy-a-service/', key: 'deployService' },

    {
        text: 'Configure an edge node', header: true, type: 'learn', key: 'configEdgeNode', children: [
            { text: 'Generate a credential', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/generate-credentials/', key: 'generateCredentials' },
            { text: 'Install Azion Edge Orchestrator agent', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/install-orchestrator-agent/', key: 'installAgent' },
            { text: 'Authorize an edge node', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/authorize-an-edge-node/', key: 'authNode' },
            { text: 'Watch logs', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/watch-logs/', key: 'watchLogs' },
            { text: 'Create an edge service', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/create-edge-service/', key: 'createService' },
            { text: 'Bind an edge service', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/bind-service-node/', key: 'bindService' },
            { text: 'Provision files', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/provision-files/', key: 'provisionFiles' },
            { text: 'Work with variables', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/work-with-variables/', key: 'workVariables' },
            { text: 'Unbind an edge service', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/unbind-service/', key: 'unbindService' },
        ]
    },

    {
        text: 'Advanced configuration', header: true, type: 'learn', key: 'configEdgeNode', children: [
            { text: 'Explore Azion Edge Orchestrator commands', header: true, anchor: true, type: 'learn', slug: '', key: 'exploreCommands' },
            { text: 'Execute templates', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/create-device-groups/', key: 'executeTempleates' },
            { text: 'Run scripts', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/deploy/run-scripts/', key: 'runScripts' },
            { text: 'Uninstall edge node', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/set-error-pages/', key: 'uninstallNode' },
        ]
    },

] as const;
