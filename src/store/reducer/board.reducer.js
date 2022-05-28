const initialState = {
    board: {},
    lastRemovedBoard: null,
    // filterBy: null
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
            // same as SET_BOARD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // board = state.board.map(board => (board._id === action.board._id) ? action.board : board)
            newState = { ...state, board: action.board }
            break
        default:
    }
    // For debug:
    window.boardState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
