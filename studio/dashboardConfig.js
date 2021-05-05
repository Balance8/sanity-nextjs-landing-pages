export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60930a2a245cf328cac41545',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-88wxqhd9',
                  apiId: '3f8fb6a6-b5c3-487b-b9f9-e40c88c539bc'
                },
                {
                  buildHookId: '60930a2a0e482e22af50bb99',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6tkyp62r',
                  apiId: '11d6a0ea-4669-46f7-b6f0-09aec0067ea0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Balance8/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6tkyp62r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
