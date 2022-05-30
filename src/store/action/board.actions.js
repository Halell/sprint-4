import { userService } from "../../services/user.service.js"
import { boardService } from "../../services/board.service.js"
import { filterByName } from "../../services/filter.service.js"


// Action Creators:
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

var subscriber

export function loadBoard(boardId) {
    return (dispatch) => {
        boardService.query(boardId)
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
            console.log('Got notified', ev.data)
            dispatch(ev.data)
        }
        boardService.subscribe(subscriber)
    }
}

export function removeBoard(boardId) {
    return async (dispatch) => {
        try {
            await boardService.remove(boardId)
            console.log('Deleted Succesfully!')
            dispatch(getActionRemoveBoard(boardId))
        } catch (err) {
            console.log('Cannot remove board', err)
        }
    }
}

export function addBoard(board) {
    return (dispatch) => {
        boardService.save(board)
            .then(savedBoard => {
                console.log('Added Board', savedBoard)
                dispatch(getActionAddBoard(savedBoard))
            })
            .catch(err => {
                console.log('Cannot add board', err)
            })
    }
}

export function updateBoard(board, groupId, task) {
    return (dispatch) => {
        boardService.save(board, groupId, task)
            .then(savedBoard => {
                dispatch(getActionUpdateBoard(savedBoard))
            })
            .catch(err => {
                console.log('Cannot save board', err)
            })
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        const board = await filterByName(filterBy)
        dispatch({ type: 'SET_BOARD', board })
    }
}

export function addToBoardt(board) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            board
        })
    }
}
export function removeFromBoardt(boardId) {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            boardId
        })
    }
}
export function checkout() {
    return async (dispatch, getState) => {
        try {
            const state = getState()
            const total = state.boardModule.boardt.reduce((acc, board) => acc + board.price, 0)
            const score = await userService.changeScore(-total)
            dispatch({ type: 'SET_SCORE', score })
            dispatch({ type: 'CLEAR_CART' })
        } catch (err) {
            console.log('BoardActions: err in checkout', err)
        }
    }
}


// Demo for Optimistic Mutation (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveBoardOptimistic(boardId) {

    return (dispatch, getState) => {

        dispatch({
            type: 'REMOVE_CAR',
            boardId
        })

        boardService.remove(boardId)
            .then(() => {
                console.log('Server Reported - Deleted Succesfully')
            })
            .catch(err => {
                console.log('Cannot load boards', err)
                dispatch({
                    type: 'UNDO_REMOVE_CAR',
                })
            })
    }
}