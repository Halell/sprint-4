
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/action/board.actions'
import { taskService } from './task.service'

const STORAGE_KEY = 'board'
const boardChannel = new BroadcastChannel('boardChannel')
var gCurrBoard

export const boardService = {
    query,
    getById,
    save,
    remove,
    subscribe,
    unsubscribe,
    getCurrBoard
}
window.cs = boardService

function getCurrBoard() {
    return gCurrBoard
}

async function query(boardId) {
    // we going to use get by id for every query
    const board = await storageService.get(STORAGE_KEY, boardId)
    gCurrBoard = board
    return gCurrBoard
}

function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
    // return axios.get(`/api/board/${boardId}`)
}

async function remove(boardId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    await storageService.remove(STORAGE_KEY, boardId)
    boardChannel.postMessage(getActionRemoveBoard(boardId))
}

async function save(board, groupId, task) {
    var savedBoard = (task) ? taskService.saveTask(board, groupId, task) : null
    // savedBoard = (groupId)? 
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
        boardChannel.postMessage(getActionUpdateBoard(savedBoard))

    } else {
        // Later, owner is set by the backend
        // board.owner = userService.getLoggedinUser()
        savedBoard = await storageService.post(STORAGE_KEY, board)
        boardChannel.postMessage(getActionAddBoard(savedBoard))
    }
    return savedBoard
}

// function getEmptyBoard() {
//     return {
//         vendor: 'Susita-' + (Date.now() % 1000),
//         price: utilService.getRandomIntInclusive(1000, 9000),
//     }
// }

function subscribe(listener) {
    boardChannel.addEventListener('message', listener)
}
function unsubscribe(listener) {
    boardChannel.removeEventListener('message', listener)
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




