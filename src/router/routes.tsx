
import RecordCalendar from "pages/RecordCalendar/Records"
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, CALENDAR_ROUTE, NOT_FOUND_ROUTE, RECORDS_ROUTE, INFO_ROUTE } from "./consts"
import Auth from "pages/Auth"
import Main from "pages/Main/Main"
import Admin from "pages/Admin"
import NotFound from "pages/NotFound"
import MyRecords from "pages/MyRecords"
import InfoPage from "components/InfoPage"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: CALENDAR_ROUTE,
        Component: <RecordCalendar/>
    },
    {
        path: MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path: RECORDS_ROUTE,
        Component: <MyRecords/>
    },
    {
        path: INFO_ROUTE,
        Component: <InfoPage/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: <NotFound/>
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: <Auth/>
    },
]