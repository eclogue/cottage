const isDev = process.env.NODE_ENV === 'development'
const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const APIV3 = isDev ? '/api/v3' : '/admin'
const APIV4 = isDev ? '/api/v4' : ''

module.exports = {
  name: 'Cottage',
  prefix: 'eclogue',
  footerText: 'devops eclogue © 2019 eclogue.inc',
  logo: '/assets/logo.svg',
  iconFontCSS: '/assets/iconfont.css',
  iconFontJS: '/assets/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    menus: `${APIV4}/menus`,
    userLogin: `${APIV4}/login`,
    userLogout: `${APIV1}/user/logout`,
    playbookDumper: `${APIV4}/playbook/dumper`,
    playbookEdit: `${APIV4}/playbook/dumper`,
    getPlaybookFile: `${APIV4}/playbook/edit/:id`,
    renamePlaybookFile: `${APIV4}/playbook/rename/:id`,
    getDevices: `${APIV4}/devices`,
    getDevice: `${APIV4}/devices/:id`,
    playbookUpload: `${APIV4}/playbook/upload`,
    playbookAddFolder: `${APIV4}/playbook/folder`,
    playbookTags: `${APIV4}/playbook/tags`,
    allBooks: `${APIV4}/books/all`,
    playbooks: `${APIV4}/books/{name}/playbooks`,
    inventory: `${APIV4}/books/{name}/inventory`,
    roles: `${APIV4}/books/{id}/roles`,
    entry: `${APIV4}/books/{id}/entries`,
    checkTask: `${APIV4}/tasks`,
    addInventory: `${APIV4}/cmdb/inventory`,
    editInventory: `${APIV4}/cmdb/inventory/:id`,
    searchUsers: `${APIV4}/search/users`,
    updateInventory: `${APIV4}/inventory/:id`,
    getRegions: `${APIV4}/cmdb/regions`,
    addRegions: `${APIV4}/cmdb/regions`,
    editRegions: `${APIV4}/cmdb/regions/:id`,
    getGroups: `${APIV4}/cmdb/groups`,
    addGroups: `${APIV4}/cmdb/groups`,
    editGroups: `${APIV4}/cmdb/groups/:id`,
    getGroupHosts: `${APIV4}/cmdb/groups/:id/hosts`,
    getCurrentGroups: `${APIV4}/cmdb/:userId/groups`,
    getGroupNodes: `${APIV4}/cmdb/groups/:id/hosts`,
    getNodeInfo: `${APIV4}/cmdb/hosts/:id`,
    getGroupInfo: `${APIV4}/cmdb/groups/:id`,
    searchInventory: `${APIV4}/cmdb/inventory`,
    previewInventory: `${APIV4}/jobs/preview/inventory`,
    getCredentials: `${APIV4}/credentials`,
    addCredential: `${APIV4}/credentials`,
    updateCredential: `${APIV4}/credentials/:id`,
    getBooks: `${APIV4}/books`,
    addBooks: `${APIV4}/books`,
    getPlaybook: `${APIV4}/books/:id/playbook`,
    downloadBook: `${APIV4}/books/:id/download`,
    editFile: `${APIV4}/playbook/:id/file`,
    deleteFile: `${APIV4}/playbook/:id/file`,
    bookDetail: `${APIV4}/books/:id`,
    getApps: `${APIV4}/apps`,
    addApps: `${APIV4}/apps`,
    editApps: `${APIV4}/apps/:id`,
    addJobs: `${APIV4}/jobs`,
    getJobs: `${APIV4}/jobs`,
    checkJob: `${APIV4}/jobs/:id`,
    getJobDetail: `${APIV4}/jobs/:id`,
    getJobTasks: `${APIV4}/jobs/:id/tasks`,
    getConfig: `${APIV4}/configurations/:id`,
    getConfigs: `${APIV4}/configurations`,
    getPlaybookRegister: `${APIV4}/configurations/:pId/register`,
    addConfigs: `${APIV4}/configurations`,
    listConfig: `${APIV4}/configurations/list/ids`,
    getTaskMonitor: `${APIV4}/tasks`,
    getTaskLogs: `${APIV4}/tasks/:id/logs`,
    getQueueTasks: `${APIV4}/tasks/queue`,
    getTaskHistory: `${APIV4}/tasks/history`,
    queryAnsibleDoc: `${APIV4}/jobs/runner/doc`,
    searchModules: `${APIV4}/jobs/runner/modules`,
    console: `${APIV4}/execute`,
    getTeams: `${APIV4}/teams`,
    getTeamInfo: `${APIV4}/teams/:id`,
    addUser: `${APIV4}/users`,
    getUserInfo: `${APIV4}/users/:id`,
    getCurrentRoles: `${APIV4}/users/roles`,
    bindRoles: `${APIV4}/users/:id/roles`,
    bindHosts: `${APIV4}/users/:id/hosts`,
    getRoles: `${APIV4}/roles`,
    addRoles: `${APIV4}/roles`,
    editRoles: `${APIV4}/roles/:id`,
    getMenus: `${APIV4}/menus`,
    getProfile: `${APIV4}/users/:id/profile`,
    getNotifications: `${APIV4}/notifications`,
    markNotifications: `${APIV4}/notifications/read`,
    getLogs: `${APIV4}/logs`,
    jobWebhook: `${APIV4}/webhooks/job`
  },
}