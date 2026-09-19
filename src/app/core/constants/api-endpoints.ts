export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/Auth/login',
    REFRESH: '/Auth/refresh',
    LOGOUT: '/Auth/logout',
    FORGOT_PASSWORD: '/Auth/forgot-password',
    RESET_PASSWORD: '/Auth/reset-password'
  },

  // Users
  USERS: {
    BASE: '/Users',
    BY_ID: (id: string) => `/Users/${id}`,
    GET_ALL: '/Users/GetAllUsersAsync',
    GET_ALL_ACTIVE: '/Users/GetAllActiveUsersAsync',
    GET_BY_TYPE: (type: string) => `/Users/GetAllActiveUsersByUserType?user_type=${type}`,
    CHECK_USERNAME: '/Users/check-username',
    ACTIVE_INACTIVE: '/Users/activeInactive',
    SEND_EMAIL_VERIFICATION: '/Users/send-email-verification',
    VERIFY_EMAIL: '/Users/verify-email'
  },

  // My Profile
  MY_PROFILE: {
    GET: '/MyProfile/getMyProfile',
    UPDATE_IMAGE: '/MyProfile/updateProfileImage',
    UPDATE_BANNER: '/MyProfile/updateProfilebanner',
    UPDATE_DETAILS: '/MyProfile/updateProfiledetails',
    CHANGE_PASSWORD: '/MyProfile/changePassword',
    UPDATE_ONLINE_STATUS: '/MyProfile/updateOnlineStatus',
    UPDATE_STATUS_MESSAGE: '/MyProfile/updateStatusMessage'
  },

  // Roles
  ROLES: {
    BASE: '/Roles',
    BY_ID: (id: string) => `/Roles/${id}`,
    PERMISSIONS: (id: string) => `/Roles/${id}/permissions`
  },

  // Permissions
  PERMISSIONS: {
    BASE: '/Permissions'
  },

  // Clients
  CLIENTS: {
    BASE: '/Clients',
    BY_ID: (id: string) => `/Clients/${id}`,
    ACTIVE: '/Clients/active',
    STATUS: (id: string) => `/Clients/${id}/status`
  },

  // Projects
  PROJECTS: {
    BASE: '/Projects',
    BY_ID: (id: string) => `/Projects/${id}`,
    BY_CLIENT: (clientId: string) => `/Projects/by-client/${clientId}`,
    STATUS: (id: string) => `/Projects/${id}/status`,
    PROFILE: (id: string) => `/Projects/${id}/profile`
  },

  // Tasks
  TASKS: {
    BASE: '/Tasks',
    BY_ID: (id: string) => `/Tasks/${id}`,
    BY_PROJECT: (projectId: string) => `/Tasks/by-project/${projectId}`,
    CALENDAR: (year: number, month: number) => `/Tasks/calendar?year=${year}&month=${month}`,
    WORKFLOW_STEP: (taskId: string, stepId: string) => `/Tasks/${taskId}/workflow-steps/${stepId}`,
    WORKFLOW_STEP_STATUS: (taskId: string, stepId: string) => `/Tasks/${taskId}/workflow-steps/${stepId}/status`,
    WORKFLOW_STEPS_SCHEDULE: (taskId: string) => `/Tasks/${taskId}/workflow-steps/schedule`
  },

  // Workflow Steps
  WORKFLOW_STEPS: {
    BASE: '/WorkflowSteps',
    BY_ID: (id: string) => `/WorkflowSteps/${id}`,
    ACTIVE: '/WorkflowSteps/active',
    STATUS: (id: string) => `/WorkflowSteps/${id}/status`
  },

  // Workflow Templates
  WORKFLOW_TEMPLATES: {
    BASE: '/WorkflowTemplates',
    BY_ID: (id: string) => `/WorkflowTemplates/${id}`,
    STATUS: (id: string) => `/WorkflowTemplates/${id}/status`,
    STEPS: (id: string) => `/WorkflowTemplates/${id}/steps`
  }
} as const;
