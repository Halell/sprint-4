import { userService } from "../../services/user.service-old.js"
import { boardService } from "../../services/board.service.js"
import { filterByName } from "../../services/filter.service.js"
import { faL } from "@fortawesome/free-solid-svg-icons"
import { faSmile } from "@fortawesome/free-regular-svg-icons"


// Action Creators:
export function getActionLoadBoard(board) {
    return {
        type: 'SET_BOARD',
        board
    }
}
export function getActionRemoveBoard(boardId) {
    return {
        type: 'REMOVE_BOARD',
        boardId
    }
}
export function getActionAddBoard(board) {
    return {
        type: 'ADD_BOARD',
        board
    }
}
export function getActionUpdateBoard(board) {
    // console.log('from action get up')
    return {
        type: 'UPDATE_BOARD',
        board
    }
}
export function getActionSetBoard(board) {
    // console.log('from action get up')
    return {
        type: 'UPDATE_BOARD',
        board
    }
}

var subscriber

// export function loadBoards() {
//     return async () => {
//         try {
//             const boards = await boardService.query()
//             console.log('boards: ', boards);
//             return boards
//         } catch (err) {
//             throw err
//         }
//     }
// }

export function loadBoard(boardId) {
    return (dispatch) => {
        boardService.getById(boardId)
            .then(board => {
                dispatch({
                    type: 'SET_BOARD',
                    board
                })
            })
            .catch(err => {
                console.log('Cannot load boards', err)
            })

        if (subscriber) boardService.unsubscribe(subscriber)
        subscriber = (ev) => {
            dispatch(ev.data)
        }
    }
}
export function removeBoard(boardId) {
    return async (dispatch) => {
        try {
            await boardService.remove(boardId)
            console.log('Deleted Succesfully!')
            dispatch(getActionSetBoard(boardId))
            return true
        } catch (err) {
            console.log('Cannot remove board', err)
            return false
        }
    }
}
export function addBoard(board) {
    return async (dispatch) => {
        try {
            const savedBoard = await boardService.save(board)
            console.log('Added Board', savedBoard)
            dispatch(getActionSetBoard(savedBoard))
            return savedBoard
        } catch (err) {
            console.log('Cannot add board', err)

            throw err
        }
    }

}

export function updateBoard(board, groupId, task) {
    return (dispatch) => {
        boardService.save(board, groupId, task)
            .then(savedBoard => {
                dispatch(getActionSetBoard(savedBoard))
            })
            .catch(err => {
                console.log('Cannot save board', err)
            })
    }
}

export function setFilterBy(filterBy) {
    console.log('filterBy: ', filterBy);
    return async (dispatch) => {
        const board = await filterByName(filterBy)
        dispatch({ type: 'SET_BOARD', board })
    }
}



// export function addToBoardt(board) {
//     return (dispatch) => {
//         dispatch({
//             type: 'ADD_TO_CART',
//             board
//         })
//     }
// }
// export function removeFromBoardt(boardId) {
//     return (dispatch) => {
//         dispatch({
//             type: 'REMOVE_FROM_CART',
//             boardId
//         })
//     }
// }
// export function checkout() {
//     return async (dispatch, getState) => {
//         try {
//             const state = getState()
//             const total = state.boardModule.boardt.reduce((acc, board) => acc + board.price, 0)
//             const score = await userService.changeScore(-total)
//             dispatch({ type: 'SET_SCORE', score })
//             dispatch({ type: 'CLEAR_CART' })
//         } catch (err) {
//             console.log('BoardActions: err in checkout', err)
//         }
//     }
// }


// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
// export function onRemoveBoardOptimistic(boardId) {

//     return (dispatch, getState) => {

//         dispatch({
//             type: 'REMOVE_CAR',
//             boardId
//         })

//         boardService.remove(boardId)
//             .then(() => {
//                 console.log('Server Reported - Deleted Succesfully')
//             })
//             .catch(err => {
//                 console.log('Cannot load boards', err)
//                 dispatch({
//                     type: 'UNDO_REMOVE_CAR',
//                 })
//             })
//     }
// }