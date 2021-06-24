import { StudentsList } from "../model/studentsList";

export enum APP_SCREEN {
    LOGIN = "Login",
    SIGNUP = "Sign_Up",
    HOME = "Home",
    CHAT = "Chat",
    TABS = "Tabs",
    ADD_ROOM = "Add_Room",
    ROOM_SCREEN = "Room_Screen",
    CALENDAR = "Calendar",
    PROJECT_DETAIL = "Project_Detail",
    SEARCH_SCRENN = "Search_Screen",
}

export type RootStackParamList = {
    [APP_SCREEN.LOGIN]: undefined;
    [APP_SCREEN.SIGNUP]: undefined;
    [APP_SCREEN.HOME]: { studensList: StudentsList };
    [APP_SCREEN.CHAT]: undefined;
    [APP_SCREEN.TABS]: undefined;
    [APP_SCREEN.ADD_ROOM]: undefined;
    [APP_SCREEN.ROOM_SCREEN]: undefined;
    [APP_SCREEN.CALENDAR]: undefined;
    [APP_SCREEN.PROJECT_DETAIL]: { studentsList: StudentsList };
    [APP_SCREEN.SEARCH_SCRENN] : undefined
}