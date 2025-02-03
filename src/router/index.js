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
                    meta: {breadcrumb: 'Dashboard'}
                },
                {
                    path: 'department',
                    meta: {breadcrumb: 'Department'},
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
                            meta: {breadcrumb: 'Add New Department'}
                        },
                        {
                            path: ':id',
                            name: 'Detail Department',
                            component: DepartementDetail,
                            meta: {breadcrumb: 'Detail Department'}
                        }
                    ]
                },
                {
                    path: 'branch',
                    meta: {breadcrumb: 'Branch'},
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
                            meta: {breadcrumb: 'Add Branch'}
                        },
                        {
                            path: ':id',
                            name: 'Detail Branch',
                            component: DetailBranch,
                            meta: {breadcrumb: 'Detail Branch'}
                        },
                    ]
                },
                {
                    path: 'user-management',
                    name: 'User Management',
                    component: UserManagementView,
                    meta: {breadcrumb: 'User Management'}
                },
                {
                    path: 'role-management',
                    name: 'Role Management',
                    component: RoleManagementView,
                    meta: {breadcrumb: 'Role Management'}
                },
                {
                    path: 'approval',
                    name: 'Approval',
                    component: ApprovalView,
                    meta: {breadcrumb: 'Approval'}
                },
                {
                    path: 'report',
                    name: 'Report',
                    component: ReportView,
                    meta: {breadcrumb: 'Report'}
                },
            ],
            redirect: '/dashboard'
        },
        {
            path: '/login',
            name: 'login',
            component: AuthView
        },
        {
            path: '/reset-password',
            name: 'resetpassword',
            component: AuthView
        },
        {
            path: '/forget-password',
            name: 'forgetpassword',
            component: AuthView
        },
    ]
})

export default router