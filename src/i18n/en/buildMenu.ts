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
    { text: 'Learn', header: true, onlyMobile: true, anchor: true, type: 'learn', slug: 'https://learn.azion.com/', key: 'Learn' },

    /// START HERE :::: DO NOT REMOVE the strings above, it's a work around for header on mobile /// 
    { text: 'Overview', header: true, anchor: true, slug: '/documentation/products/build/overview/', key: 'buildOverview', hasLabel: 'menu.build' },
    { text: 'Build with Edge Applications', header: true, anchor: true, slug: '/documentation/products/build/build-with-edge-app/', key: 'buildEdgeApps' },

    {
        text: 'Edit your edge application', header: true, type: 'learn', key: 'editEdgeApp',  children: [
            { text: 'Configure main settings', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/build/configure-main-settings/', key: 'mainSettings' },
            { text: 'Create device groups', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/build/create-device-groups/', key: 'deviceGroups' },
            { text: 'Set error pages', header: true, anchor: true, type: 'learn', slug: 'errorPages', key: 'errorPages' },
            { text: 'Work with origins', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/build/work-with-origins/', key: 'origins' },
            { text: 'Tune your cache settings', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/build/tune-cache-settings/', key: 'cacheSettings' },
            { text: 'Work with edge functions', header: true, anchor: true, type: 'learn', slug: 'rules', key: 'rules' },
            { text: 'Instantiate an edge function', header: true, anchor: true, type: 'learn', slug: 'functions', key: 'functions' },
        ]
    },


    { text: 'Save and Deploy', header: true, anchor: true, type: 'learn', slug: 'saveDeploy', key: 'saveDeploy' },

    {
        text: 'Advanced configuration', header: true, type: 'learn', key: 'advancedConfig',addBorder: true, children: [
            { text: 'Process Images', header: true, anchor: true, type: 'learn', slug: 'processImages', key: 'processImages', hasLabel: 'menu.buildAdvanced' },
            { text: 'Multi-origin', header: true, anchor: true, type: 'learn', slug: 'multiOrigin', key: 'multiOrigin' },
            { text: 'Live Streaming', header: true, anchor: true, type: 'learn', slug: 'liveStreaming', key: 'streaming' },
        ]
    },



    { text: 'Overview', header: true, anchor: true, slug: '/documentation/products/build/develop-with-azion/overview/', key: 'developOverview', hasLabel: 'menu.buildDev' },
    {
        text: 'Developer Tools', header: true, type: 'learn', key: 'devToolsBuild', children: [
            { text: 'CLI', slug: '/documentation/products/build/develop-with-azion/cli/', key: 'developCli' },
            { text: 'Azion IDE', slug: '/documentation/products/build/develop-with-azion/code-editor/', key: 'developIDE' },
            { text: 'Local Development', slug: '/documentation/products/build/develop-with-azion/local-dev/', key: 'developLocalDev' },
            { text: 'SDKs', slug: '/documentation/products/build/develop-with-azion/sdk/go/', key: 'developSDK' },
            { text: 'Terraform', slug: '/documentation/products/build/develop-with-azion/terraform-provider/', key: 'developTerraform' },
            { text: 'Edge Runtime', slug: '/documentation/products/build/develop-with-azion/runtime-apis/', key: 'developEdgeRuntime' },


        ]
    },
    {
        text: 'Framework specific guides', header: true, type: 'learn', key: 'frameworkSpecifics', children: [
            { text: 'Overview', slug: '/documentation/products/build/develop-with-azion/frameworks-specific/overview/', key: 'frameworkAngular' },
            { text: 'Angular', slug: '/documentation/products/build/develop-with-azion/frameworks-specific/angular', key: 'frameworkAngular' },
            { text: 'Next.js', slug: '/documentation/products/build/develop-with-azion/frameworks-specific/next', key: 'frameworkNext' },
            { text: 'Nuxt', slug: '/documentation/products/build/develop-with-azion/frameworks-specific/nuxt', key: 'frameworkNuxt' },
            { text: 'Vue', slug: '/documentation/products/build/develop-with-azion/frameworks-specific/vue', key: 'frameworkVue' },
            { text: 'Astro', slug: '/documentation/products/build/develop-with-azion/frameworks-specific/astro', key: 'frameworkAstro' },
            { text: 'Vite', slug: '/documentation/products/build/develop-with-azion/frameworks-specific/vite', key: 'frameworkVite' },
            { text: 'React', slug: '/documentation/products/build/develop-with-azion/frameworks-specific/react', key: 'frameworkReact' },


        ]
    },

    {
        text: 'Language specific guides', header: true, type: 'learn', key: 'languageSpecifics',addBorder: true, children: [
            { text: 'JavaScript', slug: '/documentation/products/build/develop-with-azion/language-specific/javascript/', key: 'devJS' },
            { text: 'WebAssembly', slug: '/documentation/products/build/develop-with-azion/language-specific/wasm/', key: 'devWasm' },
        ]
    },

    { text: 'Environment variables', header: true, anchor: true, type: 'learn', slug: '/documentation/products/build/develop-with-azion/environment-variables/', key: 'envVars', hasLabel: 'menu.buildData', addBorder: true, },


    { text: 'Understand Metrics', header: true, anchor: true, type: 'learn', slug: '/documentation/products/build/troubleshooting/understanding-metrics/', key: 'understandMetrics', hasLabel: 'menu.buildTroubleshoot' },
    { text: 'Debugging and Application', header: true, anchor: true, type: 'learn', slug: '/documentation/products/build/troubleshooting/debug-applications/', key: 'debugApps',addBorder: true, },


    { text: 'Tutorials', header: true, anchor: true, type: 'learn', slug: '/documentation/products/build/overview/', key: 'advConfig', addBorder: true, hasLabel: 'menu.buildTutorials' },


    { text: 'Guides', header: true, anchor: true, type: 'learn', slug: '/documentation/products/build/overview/', key: 'advConfig', addBorder: true, hasLabel: 'menu.buildGuides' },


    { text: 'Learn more', header: true, anchor: true, type: 'learn', slug: '/documentation/products/build/overview/', key: 'advConfig', addBorder: true, hasLabel: 'menu.buildLearn' },



] as const;