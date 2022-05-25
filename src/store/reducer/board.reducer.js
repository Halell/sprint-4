const initialState = {
    board: {},
    lastRemovedBoard: null
}
export function boardReducer(state = initialState, action) {
    var newState = state
    var board
    switch (action.type) {
        case 'SET_BOARD':
            newState = { ...state, board: action.board }
            break
        case 'REMOVE_BOARD':
            const lastRemovedBoard = state.board.find(board => board._id === action.boardId)
            board = state.board.filter(board => board._id !== action.boardId)
            newState = { ...state, board, lastRemovedBoard }
            break
        case 'ADD_BOARD':
            newState = { ...state, board: [...state.board, action.board] }
            break
        case 'UPDATE_BOARD':
            board = state.board.map(board => (board._id === action.board._id) ? action.board : board)
            newState = { ...state, board }
            break
        // case 'ADD_TO_BOARD':
        //     newState = { ...state, boardt:[...state.boardt, action.board]}
        //     break
        // case 'REMOVE_FROM_BOARD':
        //     boardt = state.boardt.filter(board => board._id !== action.boardId)
        //     newState = { ...state, boardt}
        //     break
        // case 'CLEAR_BOARD':
        //     newState = { ...state, boardt: []}
        //     break
        // case 'UNDO_REMOVE_BOARD':
        //     if (state.lastRemovedBoard) {
        //         newState = { ...state, board: [...state.board, state.lastRemovedBoard], lastRemovedBoard: null}
        //     }
        // break
        default:
    }
    // For debug:
    window.boardState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
