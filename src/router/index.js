import {createRouter, createWebHistory} from "vue-router";
import account from "@/views/account.component.vue";
import Register from "@/account/pages/register.component.vue";
import SignIn from "@/account/pages/sign_in.component.vue";
import AuthenticationView from "@/account/pages/account.component.vue";
import PostsComponent from "@/views/posts.component.vue";
import PublicationsComponent from "@/views/publications.component.vue";
import FriendsComponent from "@/views/friends.component.vue";
import ProfileUserComponent from "@/views/profile-user.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: AuthenticationView},
        {path: "/friends", component: FriendsComponent},
        {path: "/publications", component: PublicationsComponent},
        {path: "/posts", component: PostsComponent},
        {path: "/users", component: ProfileUserComponent},
        {path: '/account', component: account,
            children: [
                {path: '', component: AuthenticationView},
                {path: 'authentication', component: AuthenticationView},
                {path: 'register', component: Register},
                {path: 'sign-in', component: SignIn}
            ],
        }
    ],
});

export default router;
