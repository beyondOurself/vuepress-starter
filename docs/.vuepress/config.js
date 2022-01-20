module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    base:'/vuepress-starter/',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        home:'/',
        navbar: [
            {
                text: '组件',
                link: '/components/button.html',
            },
        ],
        sidebar: [
            // SidebarItem
            {
                text: 'Button',
                link: '/components/button.html',
            },
            {
                text: 'Tag',
                link: '/components/tag.html',
            },
            "/components/button.md"

        ],
    },
}