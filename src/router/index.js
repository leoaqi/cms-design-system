import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '@/views/auth/AuthView.vue';
import LayoutView from '@/views/LayoutView.vue';
import Dashboard from '@/views/dashboard/Dashboard.vue';
import Departement from '@/views/departement/Departement.vue';
import BranchView from '@/views/branch/BranchView.vue';
import UserManagementView from '@/views/user_management/UserManagementView.vue';
import RoleManagementView from '@/views/role_management/RoleManagementView.vue';
import ApprovalView from '@/views/approval/ApprovalView.vue';
import ReportView from '@/views/report/ReportView.vue';
import AddDepartement from '@/views/departement/AddDepartement.vue';
import DepartementDetail from '@/views/departement/DepartementDetail.vue';
import AddBranch from '@/views/branch/AddBranch.vue';
import DetailBranch from '@/views/branch/DetailBranch.vue';
import AddUser from '@/views/user_management/AddUser.vue';
import DetailUser from '@/views/user_management/DetailUser.vue';
import AddRole from '@/views/role_management/AddRole.vue';
import DetailRole from '@/views/role_management/DetailRole.vue';
import DetailApproval from '@/views/approval/DetailApproval.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: LayoutView,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard,
                    meta: { breadcrumb: 'Dashboard' }
                },
                {
                    path: 'department',
                    meta: { breadcrumb: 'Department' },
                    children: [
                        {
                            path: '',
                            name: 'Department',
                            component: Departement,
                        },
                        {
                            path: 'add',
                            name: 'Add New Department',
                            component: AddDepartement,
                            meta: { breadcrumb: 'Add New Department' }
                        },
                        {
                            path: ':id',
                            name: 'Detail Department',
                            component: DepartementDetail,
                            meta: { breadcrumb: 'Detail Department' }
                        }
                    ]
                },
                {
                    path: 'branch',
                    meta: { breadcrumb: 'Branch' },
                    children: [
                        {
                            path: '',
                            name: 'Branch',
                            component: BranchView,
                        },
                        {
                            path: 'add',
                            name: 'Add Branch',
                            component: AddBranch,
                            meta: { breadcrumb: 'Add Branch' }
                        },
                        {
                            path: ':id',
                            name: 'Detail Branch',
                            component: DetailBranch,
                            meta: { breadcrumb: 'Detail Branch' }
                        },
                    ]
                },
                {
                    path: 'user-management',
                    meta: { breadcrumb: 'User Management' },
                    children: [
                        {
                            path: '',
                            name: 'User Management',
                            component: UserManagementView,
                        },
                        {
                            path: 'add',
                            name: 'Add New User',
                            component: AddUser,
                            meta: { breadcrumb: 'Add New User' },
                        },
                        {
                            path: ':id',
                            name: 'Detail User',
                            component: DetailUser,
                            meta: { breadcrumb: 'Detail User' },
                        },
                    ]
                },
                {
                    path: 'role-management',
                    meta: { breadcrumb: 'Role Management' },
                    children: [
                        {
                            path: '',
                            name: 'Role Management',
                            component: RoleManagementView,
                        },
                        {
                            path: 'add',
                            name: 'Add New Role',
                            component: AddRole,
                            meta: { breadcrumb: 'Add New Role' },
                        },
                        {
                            path: ':id',
                            name: 'Detail Role',
                            component: DetailRole,
                            meta: { breadcrumb: 'Detail Role' },
                        },
                    ]
                },
                {
                    path: 'approval',
                    meta: { breadcrumb: 'Approval' },
                    children: [
                        {
                            path: '',
                            name: 'Approval',
                            component: ApprovalView,
                        },
                        {
                            path: ':id',
                            name: 'Detail Approval',
                            component: DetailApproval,
                            meta: { breadcrumb: 'Detail Approval' },
                        },
                    ]
                },
                {
                    path: 'report',
                    name: 'Report',
                    component: ReportView,
                    meta: { breadcrumb: 'Report' }
                },
            ],
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: AuthView
        },
        {
            path: '/reset-password',
            name: 'Reset Password',
            component: AuthView
        },
        {
            path: '/forget-password',
            name: 'Forget Password',
            component: AuthView
        },
    ]
})

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
  });

export default router