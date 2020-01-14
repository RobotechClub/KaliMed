import { OPEN_BOOKMARK_MODAL, CLOSE_BOOKMARK_MODAL } from "./ActionsConstant"

export const openBookmarkModal = () => {
    return (dispatch) => {
        dispatch({ type: OPEN_BOOKMARK_MODAL })
    }
}

export const closeBookmarkModal = () => {
    return (dispatch) => {
        dispatch({ type: CLOSE_BOOKMARK_MODAL })
    }
}