export const HOME_PATH = '/';
export const LOGIN_PATH = '/login';
export const DASHBOARD_PATH = '/dashboard';
export const SETTINGS_PATH = '/settings';
export const VIEW_PROGRAM_PATH = '/program/view/:id';
export const EDIT_PROGRAM_PATH = '/edit/program/:id';
export const CREATE_PROGRAM_PATH = '/program/create';
export const VIEW_COURSE_PATH = '/course/view/:id';
export const EDIT_COURSE_PATH = '/course/edit/:id';
export const CREATE_COURSE_PATH = '/course/create';
export const VIEW_MODULE_PATH = '/module/view/:id';
export const EDIT_MODULE_PATH = '/module/edit/:id';
export const EDIT_PROFILE_PATH = '/profile/edit';
export const makeEditProgramPath = id => `/edit/program/${id}`;
export const NESTED_EDIT_COURSE_PATH =
  '/edit/program/:programId/course/:courseId';
