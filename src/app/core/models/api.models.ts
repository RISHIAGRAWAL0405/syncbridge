// Global API Response Wrapper
export interface ApiResponse<T = unknown> {
  statusCode: number;
  statusMessage: string;
  errorMessage: string | null;
  data: T | null;
  id: string | null;
}

// Auth Models
export interface LoginRequest {
  user_name: string;
  password: string;
}

export interface RefreshRequest {
  refresh_token: string;
}

export interface ForgotPasswordRequest {
  user_name: string;
}

export interface ResetPasswordRequest {
  user_id: string;
  otp_code: string;
  new_password: string;
}

export interface Permission {
  permission_id: string;
  role_id: string;
  permission_code: string;
  permission_name: string;
  module_name: string;
  can_view: boolean;
  can_add: boolean;
  can_update: boolean;
  can_delete: boolean;
  can_export: boolean;
}

export interface UserRole {
  role_id: string;
  role_code: string;
  role_name: string;
  is_assignable: boolean;
}

export interface AuthUser {
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  mobile: string;
  isActive: boolean;
  permissionList: Permission[];
  userRole: UserRole;
  profile_img_path: string | null;
  profile_banner_path: string | null;
  online_status: string;
  status_message: string;
  is_email_verified: boolean;
  is_mobile_verified: boolean;
  is_active: boolean;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}

// User Models
export interface CreateUserRequest {
  user_name: string;
  email: string;
  first_name: string;
  last_name: string;
  mobile?: string | null;
  user_type: string;
  password: string;
  designation_name?: string | null;
  department_name?: string | null;
  role_id?: string | null;
}

export interface UpdateUserRequest {
  email: string;
  mobile: string;
  first_name: string;
  last_name: string;
  user_type: string;
  role_id?: string | null;
  designation_name?: string | null;
  department_name?: string | null;
}

export interface UserDto {
  user_id: string;
  user_name: string;
  email: string;
  mobile: string;
  first_name: string;
  last_name: string;
  full_name: string;
  profile_img_url: string;
  profile_url: string;
  online_status: string;
  status_message: string;
  designation_name: string;
  department_name: string;
  is_email_verified: boolean;
  is_mobile_verified: boolean;
  is_active: boolean;
  user_type: string;
  role?: UserRole;
  role_name?: string;
  role_code?: string;
  profile_img_path: string | null;
  profile_banner_path: string | null;
}

// Role Models
export interface RoleDto {
  role_id: string;
  role_code: string;
  role_name: string;
  is_assignable: boolean;
}

export interface CreateRoleRequest {
  role_code: string;
  role_name: string;
}

export interface UpdateRoleRequest {
  role_id: string;
  role_name: string;
}

export interface PermissionDto {
  permission_id: string;
  permission_code: string;
  permission_name: string;
  module_name: string;
  description: string;
  can_view: boolean;
  can_add: boolean;
  can_update: boolean;
  can_delete: boolean;
  can_export: boolean;
}

export interface UpdateRolePermissionsRequest {
  permissionsList: {
    role_id?: string | null;
    permission_id: string;
    can_view: boolean;
    can_add: boolean;
    can_update: boolean;
    can_delete: boolean;
    can_export: boolean;
  }[];
}

// Client Models
export interface ClientDto {
  client_id: string;
  client_name: string;
  email: string;
  mobile: string;
  company_name: string;
  address: string;
  is_active: boolean;
  created_at: string;
  project_count: number;
}

export interface CreateClientRequest {
  client_id: string;
  client_name: string;
  email: string;
  mobile?: string | null;
  company_name?: string | null;
  address?: string | null;
}

export interface UpdateClientRequest {
  client_name?: string | null;
  email?: string | null;
  mobile?: string | null;
  company_name?: string | null;
  address?: string | null;
}

// Project Models
export interface ProjectDto {
  project_id: string;
  client_id: string;
  client_name: string;
  project_name: string;
  project_code: string;
  description: string;
  start_date: string | null;
  end_date: string | null;
  is_active: boolean;
  created_at: string;
}

export interface CreateProjectRequest {
  client_id: string;
  project_name: string;
  project_code?: string | null;
  description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
}

export interface UpdateProjectRequest {
  project_name?: string | null;
  project_code?: string | null;
  description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
}

// Task Models
export interface TaskWorkflowStepDto {
  task_workflow_step_id: string;
  task_id?: string;
  workflow_step_id: string;
  step_name: string;
  step_code: string;
  display_order: number;
  is_required: boolean;
  start_date: string | null;
  end_date: string | null;
  notes: string | null;
  status?: string;
  started_at?: string | null;
  completed_at?: string | null;
}

export interface CalendarTaskDto {
  task_id: string;
  task_name: string;
  task_code: string;
  description: string;
  project_id: string;
  project_name: string;
  start_date: string | null;
  end_date: string | null;
  status: string;
  total_steps: number;
  completed_steps: number;
  workflow_steps: TaskWorkflowStepDto[];
}

export interface TaskDto {
  task_id: string;
  project_id: string;
  project_name: string;
  workflow_template_id: string;
  workflow_template_name: string;
  task_name: string;
  task_code: string;
  description: string;
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  workflow_steps?: TaskWorkflowStepDto[];
}

export interface CreateTaskRequest {
  project_id: string;
  workflow_template_id: string;
  task_name: string;
  task_code: string;
  description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
}

export interface UpdateTaskRequest {
  task_name?: string | null;
  task_code?: string | null;
  description?: string | null;
  start_date?: string | null;
  end_date?: string | null;
}

export interface UpdateTaskWorkflowStepRequest {
  start_date?: string | null;
  end_date?: string | null;
  notes?: string | null;
}

export interface UpdateTaskWorkflowStepsScheduleRequest {
  steps: ({ task_workflow_step_id: string } & UpdateTaskWorkflowStepRequest)[];
}

// Workflow Step Models
export interface WorkflowStepDto {
  workflow_step_id: string;
  workflow_step_name: string;
  workflow_step_code: string;
  description: string;
  is_active: boolean;
  created_at: string;
}

export interface CreateWorkflowStepRequest {
  workflow_step_name: string;
  workflow_step_code: string;
  description?: string | null;
}

// Workflow Template Models
export interface WorkflowTemplateStepDto {
  workflow_template_step_id: string;
  workflow_step_id: string;
  workflow_step_name: string;
  workflow_step_code: string;
  description: string;
  display_order: number;
  is_required: boolean;
}

export interface WorkflowTemplateDto {
  workflow_template_id: string;
  workflow_template_name: string;
  workflow_template_code: string;
  description: string;
  is_active: boolean;
  created_at: string;
  steps: WorkflowTemplateStepDto[];
}

export interface CreateWorkflowTemplateRequest {
  workflow_template_name: string;
  workflow_template_code: string;
  description?: string | null;
  steps: { workflow_step_id: string; display_order: number; is_required: boolean }[];
}

// Profile Models
export interface UpdateProfileDetailsRequest {
  email?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  mobile?: string | null;
  profile_url?: string | null;
}

export interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}
