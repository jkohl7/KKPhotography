const router = new VueRouter({
    routes: [
        {path: '/home', component: HomePage},
        {path: '/', component: HomePage},
        {path: '/gallery', component: GalleryPage},
        {path: '/pricing', component: PackagesPage},
        {path: '/schedule', component: SchedulePage, children: [
               //nested router for scheduling tab
                {path: 'items', component: ScheduleItems},
                {path: 'items/add:name', component: ScheduleItems, name: 'addToSchedule', props:true},
                {path: 'shipping', component: ScheduleInfo},
                {path: 'payment', component: SchedulePayment},
                {path: 'confirmation', component: ScheduleConfirmation},

            ]},
        {path: '/about', component: AboutPage},
    ],
    linkActiveClass: 'active'
});

const app = new Vue({
    el: '#app',
    router: router,
});
