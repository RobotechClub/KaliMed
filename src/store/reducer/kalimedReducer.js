import { OPEN_BOOKMARK_MODAL, CLOSE_BOOKMARK_MODAL } from "../actions/ActionsConstant";

const initialState = {
    isBookmarkOpen: false,
}
export function kalimedReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_BOOKMARK_MODAL:
            return { ...state, isBookmarkOpen: true }
            case CLOSE_BOOKMARK_MODAL:
                return { ...state, isBookmarkOpen: false }
        default:
            return state;
    }
}