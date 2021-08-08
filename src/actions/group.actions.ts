import { Group } from "../Models/Group";

export const GROUP_FETCH = "groups/fetch";
export const GROUP_SEARCHING = "groups/searching";
export const GROUP_QUERY = "groups/query";
export const GROUP_SHOW_HIDE = "groups/showHide"
export const FETCH_FROM_ID = "fetchFromId"
export const FETCH_CARD = "fetchCard"

export const groupQueryAction = (query:string) => ({
    type:GROUP_QUERY,
    payload:query,
})


export const groupFetchAction = (query:string, groups: Group[]) => ({
    type:GROUP_FETCH,
    payload:{query, groups},
})

export const groupSerchingAction = (payload:boolean) => ({
    type:GROUP_SEARCHING,
    payload:payload
})

export const groupShowHide = (payload:boolean) => ({
    type:GROUP_SHOW_HIDE,
    payload:payload
})

export const fetchFromId = (id:number) => ({
    type:FETCH_FROM_ID,
    payload:id
})

export const fetchCard = (card:Group) => ({
    type:FETCH_CARD,
    payload:card
})