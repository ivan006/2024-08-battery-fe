const routes = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    redirect: to => { return '/guest-registration' },
    meta: { requiresAuth: false },
    children: [
      {
        path: 'login-old',
        component: () => import('pages/auth/LoginPageOld.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: 'login',
        component: () => import('pages/auth/SigninView.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: 'register',
        component: () => import('pages/auth/JoinView.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: 'guest-registration',
        component: () => import('pages/guest-registration/guestRegistration.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: 'my-account',
            name: 'my-account',
            component: () => import('pages/my-account/MyAccountRead.vue'),
            meta: {
              breadcrumbName: 'My Account',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/attendances',
            name: '/lists/attendances',
            component: () => import('src/controllers/lists/attendances/AttendanceListController.vue'),
            meta: {
              breadcrumbName: 'Attendances',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/attendances/:rId/:rName',
            name: '/lists/attendances/:rId/:rName',
            component: () => import('src/controllers/lists/attendances/AttendanceReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/attendances',
            },
          },
          {
            path: '/lists/children',
            name: '/lists/children',
            component: () => import('src/controllers/lists/children/ChildListController.vue'),
            meta: {
              breadcrumbName: 'Children',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/children/:rId/:rName',
            name: '/lists/children/:rId/:rName',
            component: () => import('src/controllers/lists/children/ChildReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/children',
            },
          },
          {
            path: '/lists/events',
            name: '/lists/events',
            component: () => import('src/controllers/lists/events/EventListController.vue'),
            meta: {
              breadcrumbName: 'Events',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/events/:rId/:rName',
            name: '/lists/events/:rId/:rName',
            component: () => import('src/controllers/lists/events/EventReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/events',
            },
          },
          {
            path: '/lists/failed-jobs',
            name: '/lists/failed-jobs',
            component: () => import('src/controllers/lists/failed-jobs/FailedJobListController.vue'),
            meta: {
              breadcrumbName: 'FailedJobs',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/failed-jobs/:rId/:rName',
            name: '/lists/failed-jobs/:rId/:rName',
            component: () => import('src/controllers/lists/failed-jobs/FailedJobReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/failed-jobs',
            },
          },
          {
            path: '/lists/families',
            name: '/lists/families',
            component: () => import('src/controllers/lists/families/FamilyListController.vue'),
            meta: {
              breadcrumbName: 'Families',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/families/:rId/:rName',
            name: '/lists/families/:rId/:rName',
            component: () => import('src/controllers/lists/families/FamilyReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/families',
            },
          },
          {
            path: '/lists/family-memberships',
            name: '/lists/family-memberships',
            component: () => import('src/controllers/lists/family-memberships/FamilyMembershipListController.vue'),
            meta: {
              breadcrumbName: 'FamilyMemberships',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/family-memberships/:rId/:rName',
            name: '/lists/family-memberships/:rId/:rName',
            component: () => import('src/controllers/lists/family-memberships/FamilyMembershipReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/family-memberships',
            },
          },
          {
            path: '/lists/migrations',
            name: '/lists/migrations',
            component: () => import('src/controllers/lists/migrations/MigrationListController.vue'),
            meta: {
              breadcrumbName: 'Migrations',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/migrations/:rId/:rName',
            name: '/lists/migrations/:rId/:rName',
            component: () => import('src/controllers/lists/migrations/MigrationReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/migrations',
            },
          },
          {
            path: '/lists/password-reset-tokens',
            name: '/lists/password-reset-tokens',
            component: () => import('src/controllers/lists/password-reset-tokens/PasswordResetTokenListController.vue'),
            meta: {
              breadcrumbName: 'PasswordResetTokens',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/password-reset-tokens/:rId/:rName',
            name: '/lists/password-reset-tokens/:rId/:rName',
            component: () => import('src/controllers/lists/password-reset-tokens/PasswordResetTokenReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/password-reset-tokens',
            },
          },
          {
            path: '/lists/personal-access-tokens',
            name: '/lists/personal-access-tokens',
            component: () => import('src/controllers/lists/personal-access-tokens/PersonalAccessTokenListController.vue'),
            meta: {
              breadcrumbName: 'PersonalAccessTokens',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/personal-access-tokens/:rId/:rName',
            name: '/lists/personal-access-tokens/:rId/:rName',
            component: () => import('src/controllers/lists/personal-access-tokens/PersonalAccessTokenReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/personal-access-tokens',
            },
          },
          {
            path: '/lists/post-tags',
            name: '/lists/post-tags',
            component: () => import('src/controllers/lists/post-tags/PostTagListController.vue'),
            meta: {
              breadcrumbName: 'PostTags',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/post-tags/:rId/:rName',
            name: '/lists/post-tags/:rId/:rName',
            component: () => import('src/controllers/lists/post-tags/PostTagReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/post-tags',
            },
          },
          {
            path: '/lists/posts',
            name: '/lists/posts',
            component: () => import('src/controllers/lists/posts/PostListController.vue'),
            meta: {
              breadcrumbName: 'Posts',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/posts/:rId/:rName',
            name: '/lists/posts/:rId/:rName',
            component: () => import('src/controllers/lists/posts/PostReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/posts',
            },
          },
          {
            path: '/lists/school-family-enrollments',
            name: '/lists/school-family-enrollments',
            component: () => import('src/controllers/lists/school-family-enrollments/SchoolFamilyEnrollmentListController.vue'),
            meta: {
              breadcrumbName: 'SchoolFamilyEnrollments',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/school-family-enrollments/:rId/:rName',
            name: '/lists/school-family-enrollments/:rId/:rName',
            component: () => import('src/controllers/lists/school-family-enrollments/SchoolFamilyEnrollmentReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/school-family-enrollments',
            },
          },
          {
            path: '/lists/school-partnerships',
            name: '/lists/school-partnerships',
            component: () => import('src/controllers/lists/school-partnerships/SchoolPartnershipListController.vue'),
            meta: {
              breadcrumbName: 'SchoolPartnerships',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/school-partnerships/:rId/:rName',
            name: '/lists/school-partnerships/:rId/:rName',
            component: () => import('src/controllers/lists/school-partnerships/SchoolPartnershipReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/school-partnerships',
            },
          },
          {
            path: '/lists/schools',
            name: '/lists/schools',
            component: () => import('src/controllers/lists/schools/SchoolListController.vue'),
            meta: {
              breadcrumbName: 'Schools',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/schools/:rId/:rName',
            name: '/lists/schools/:rId/:rName',
            component: () => import('src/controllers/lists/schools/SchoolReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/schools',
            },
          },
          {
            path: '/lists/tags',
            name: '/lists/tags',
            component: () => import('src/controllers/lists/tags/TagListController.vue'),
            meta: {
              breadcrumbName: 'Tags',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/tags/:rId/:rName',
            name: '/lists/tags/:rId/:rName',
            component: () => import('src/controllers/lists/tags/TagReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/tags',
            },
          },
          {
            path: '/lists/users',
            name: '/lists/users',
            component: () => import('src/controllers/lists/users/UserListController.vue'),
            meta: {
              breadcrumbName: 'Users',
              breadcrumbParentName: '',
            },
          },
          {
            path: '/lists/users/:rId/:rName',
            name: '/lists/users/:rId/:rName',
            component: () => import('src/controllers/lists/users/UserReadController.vue'),
            meta: {
              breadcrumbName: ':rName',
              breadcrumbParentName: '/lists/users',
            },
          }
        ],
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: { requiresAuth: false }
  }
];

export default routes;
