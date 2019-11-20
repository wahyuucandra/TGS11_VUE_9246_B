import Vue from 'vue' 
import Router from 'vue-router' 
 
const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
const loginLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/loginLayout.vue') 

function loadView(view) {
    return () => import(/* webpackChunkName: "view[request]" */ `../components/dashboardContents/${view}.vue`) } 
 
    const routes = [     
        {       
            path: '/dashboard',       
            component: DashboardLayout,       
            children: [         
                {           
                    name: 'Dashboard',           
                    path: '/dashboard',           
                    component: loadView('dashboard')         
                },
                {           
                    name: 'UserController',           
                    path: '/userController',           
                    component: loadView('userController')         
                },
                {           
                    name: 'VehicleController',           
                    path: '/vehicleController',           
                    component: loadView('vehicleController')         
                }        
            ]     
        },
        {
            path: '/',
            component: loginLayout,
            name: 'loginLayout'
        }   
    ]   
    Vue.use(Router) 
     
    const router = new Router({mode: 'history', routes: routes}) 
     
    export default router   