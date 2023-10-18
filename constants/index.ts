import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const hotQuestion = [
{
    _id:"0",
  title:"Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  URL:'/' 
},
{
  _id:"1",
  title:"Can I get the course for free?",
  URL:'/' 
},
{
  _id:"2",
  title:"Redux Toolkit not updating state as expected",
  URL:'/' 
},
{
  _id:"3",
  title:"Async/Await function not handling errors properly",
  URL:'/' 
},
{
  _id:"4",
  title:"How do I suse express as a custom server in NextJS?",
  URL:'/' 
}
]

export const popularTags = [
  { _id: "1", name:'javascript', totalQuestions: 9},
  { _id: "2", name:'next js', totalQuestions: 4},
  { _id: "3", name:'react js', totalQuestions: 5},
  { _id: "4", name:'css', totalQuestions: 7},
  { _id: "5", name:'html', totalQuestions: 8},
]
