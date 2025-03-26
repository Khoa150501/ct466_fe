import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Profile from "@/pages/Profile.vue";
import EditProfile from "@/pages/EditProfile.vue"
import Login from "@/pages/LoginRegister.vue"
import Register from "@/pages/Register.vue";
import GraphicsDesign from "@/pages/category/GraphicsDesign.vue";
import ProgrammingTech from "@/pages/category/ProgrammingTech.vue";
import Business from "@/pages/category/Business.vue";
import MusicAudio from "@/pages/category/MusicAudio.vue";
import WritingTranslation from "@/pages/category/WritingTranslation.vue";
import VideoAnimation from "@/pages/category/VideoAnimation.vue";
import DigitalMarketing from "@/pages/category/DigitalMarketing.vue";
import Consulting from "@/pages/category/Consulting.vue";
import CreateProfile from "@/pages/CreateProfile.vue";
import CreateProfile1 from "@/pages/CreateProfile1.vue";
import ResultProfile from "@/pages/ResultProfile.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
    {
    path: "/profile",
    name: "Profile",
    component: Profile , 
  },
  {
    path: "/createProfile",
    name: "CreateProfile",
    component: CreateProfile,
  },
   {
    path: "/createProfile1",
    name: "CreateProfile1",
    component: CreateProfile1,
  },
     {
    path: "/resultProfile",
    name: "ResultProfile",
    component: ResultProfile,
  },
    {
    path: "/editprofile",
    name: "EditProfile",
    component: EditProfile , 
  },
    {
    path: "/login",
    name: "Login",
    component: Login , 
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  //category
    {
    path: "/categories/graphicsDesign",
    name: "GraphicsDesign",
    component: GraphicsDesign , 
  },
  {
    path: "/categories/ProgrammingTech",
    name: "ProgrammingTech",
    component: ProgrammingTech , 
  },
  {
    path: "/categories/Business",
    name: "Business",
    component: Business , 
  },
  {
    path: "/categories/MusicAudio",
    name: "MusicAudio",
    component: MusicAudio , 
  },
  {
    path: "/categories/WritingTranslation",
    name: "WritingTranslation",
    component: WritingTranslation , 
  },
    {
    path: "/categories/VideoAnimation",
    name: "VideoAnimation",
    component: VideoAnimation , 
  },
    {
    path: "/categories/DigitalMarketing",
    name: "DigitalMarketing",
    component: DigitalMarketing , 
  },
    {
    path: "/categories/Consulting",
    name: "Consulting",
    component: Consulting , 
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;