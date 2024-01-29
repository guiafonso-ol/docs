
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
    { text: 'Overview', header: true, anchor: true, type: 'learn', slug: '/documentation/products/devtools/console-kit-documentation/overview/', key: 'docConsoleOverview', addBorder: true, hasLabel: 'menu.docConsole' },

        /// DESIGN PRINCIPLES ///

        { text: 'Overview', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/azion-plugin-grafana-custom-dash/', key: 'overviewDesign', hasLabel: 'menu.overviewDesign' },

        {
            text: 'Foundations', header: true, type: 'learn', key: 'observeanalyzeLogs', children: [
                { text: 'About Foundations', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/understand-logs/', key: 'overviewFoundations' },
                { text: 'Full page', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/add-filters-events/', key: 'fullPage' },
                { text: 'Drawer', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/analyze-navigation-data/', key: 'drawer' },
                { text: 'Modal', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/graphql-api/overview/', key: 'modal' },
                    
                ]
            },
        
    
        {
            text: 'Patterns', header: true, type: 'learn', key: 'observeanalyzeLogs', children: [
                { text: 'About Patterns', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/understand-logs/', key: 'overviewPatterns' },
                { text: 'Create', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/understand-logs/', key: 'createPattern' },
                { text: 'Edit', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/add-filters-events/', key: 'editPattern' },
                { text: 'Error state', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/analyze-navigation-data/', key: 'errorStatePattern' },
                { text: 'Delete', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/graphql-api/overview/', key: 'deletePattern' },
                
            ]
        },

        {
            text: 'Blocks', header: true, type: 'learn', key: 'observeanalyzeLogs', children: [
                { text: 'About Blocks', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/understand-logs/', key: 'overviewBlocks' },
                { text: 'Lists', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/endpoint-amazon-kinesis/', key: 'lists' },
                { text: 'HTTP Response Status Codes', header: true, anchor: true, type: 'learn', slug: 'documentation/products/guides/endpoint-azure-blob/', key: 'statusCodes' },
                { text: 'Application forms', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/endpoint-azure-monitor/', key: 'applicationForms' },
                { text: 'Data display', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/endpoint-datadog/', key: 'dataDisplay' },
            ]
        },
    
        { text: 'Components', header: true, anchor: true, slug: '/documentation/products/console-kit/components/',  key: 'overviewComponents', },

        /// IN-PRODUCT CONTENT ///

        { text: 'Azion voice', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/azion-plugin-grafana-custom-dash/', key: 'azionVoice', hasLabel: 'menu.generalGuidelines' },

        {
            text: 'General guidelines', header: true, type: 'learn', key: 'generalGuidelines', children: [
                { text: 'Product content', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/analyze-metrics/', key: 'inProductRecommendations' },
                { text: 'Language', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/add-filters-metrics/', key: 'language' },
                { text: 'Style rules', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/graphql-api/overview/', key: 'styleRules' },
                { text: 'Punctuation and typography', header: true, anchor: true, type: 'learn', slug: '/documentation/products/devtools/graphql-playground/', key: 'punctuationAndTypography' },
                { text: 'Help content', header: true, anchor: true, type: 'learn', slug: '/documentation/products/devtools/graphql-playground/', key: 'helpContent' },
                { text: 'Words list', header: true, anchor: true, type: 'learn', slug: '/documentation/products/devtools/graphql-playground/', key: 'wordsList' },

            ]
        },


        {
            text: 'FALTA NOME', header: true, type: 'learn', key: 'faltaNome', children: [
                { text: 'Empty states', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/analyze-metrics/', key: 'emptyStates' },
                { text: 'Feedback messages', header: true, anchor: true, type: 'learn', slug: '/documentation/products/guides/observe/add-filters-metrics/', key: 'feedbackMessages' },
                { text: 'Error Validation', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/graphql-api/overview/', key: 'errorValidation' },
                { text: 'Placeholders', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/graphql-api/overview/', key: 'placeholders' },
                { text: 'Required fields', header: true, anchor: true, type: 'learn', slug: '/documentation/devtools/graphql-api/overview/', key: 'requiredFields' },
            ]
        },

] as const;
