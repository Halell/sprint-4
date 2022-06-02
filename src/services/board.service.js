
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/action/board.actions'

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
    getCurrBoard,
    setActivity
}
window.cs = boardService

function getCurrBoard() {
    return gCurrBoard
}

async function query() {
<<<<<<< HEAD
    const boards = await storageService.query(STORAGE_KEY)
    return boards
    // return httpService.get('board')
}
function getById(boardId) {
    return storageService.get(STORAGE_KEY, boardId)
    // return axios.get(`/api/board/${boardId}`)
    // return httpService.get(`board/${boardId}`)
=======
    // return httpService.get(`/board`)
    const boards = await storageService.query(STORAGE_KEY)
    console.log('boards: ', boards);
    return boards
}
function getById(boardId) {
    // return httpService.get(`board/:boardId`)
    return storageService.get(STORAGE_KEY, boardId)
    // return axios.get(`/api/board/${boardId}`)
>>>>>>> 1aba0c4e06aa80e711f5d060fe6600bab5611168
}
async function remove(boardId) {
    // return httpService.delete(`/board/boardId`)
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    await storageService.remove(STORAGE_KEY, boardId)
    boardChannel.postMessage(getActionRemoveBoard(boardId))
<<<<<<< HEAD
    // httpService.delete(`board/${boardId}`)
=======
>>>>>>> 1aba0c4e06aa80e711f5d060fe6600bab5611168
}

async function setActivity(board, txt, from, to) {

    const createdAt = new Date()
    const activity = {
        byMember: {
            fullname: "guest",
            imgUrl: "",
            _id: "userId",
            createdAt: new Date(),
        },
        from,
        to,
        id: utilService.makeId(),
        txt,
        createdAt: createdAt.toLocaleTimeString(),
    }
    board.activities.unShift(activity)
    save(board)
    // return httpService.put(`/board/boardId`)
    return board
}

async function save(board) {
    var savedBoard //= (task) ? taskService.saveTask(board, groupId, task) : null
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
<<<<<<< HEAD
        // boardChannel.postMessage(getActionUpdateBoard(savedBoard))
        // return httpService.put(`board/:${board._id}`, board)
=======
        boardChannel.postMessage(getActionUpdateBoard(savedBoard))
        // return httpService.put(`/board/boardId`)
>>>>>>> 1aba0c4e06aa80e711f5d060fe6600bab5611168
    } else {
        const createdAt = new Date()
        const newBoard = {
            activities: [],
            archivedAt: '',
            cmpsOrder: ["status-picker", "member-picker", "date-picker"],
            columns: ["text", "status", "importance", "date", "persons"],
            createdAt: createdAt.toLocaleTimeString(),
            createdBy: [],
            groups: [{
                id: utilService.makeId(),
                archivedAt: 'hour ago',
                style: {},
                tasks: [],
                title: 'Group 1'
            }],
            persons: [],
            style: {},
            title: 'New Board'
        }
        savedBoard = await storageService.post(STORAGE_KEY, newBoard)
<<<<<<< HEAD
        // boardChannel.postMessage(getActionAddBoard(savedBoard))
        // savedBoard = await httpService.post('board', newBoard)
=======
        boardChannel.postMessage(getActionAddBoard(savedBoard))
        console.log('adding board');
>>>>>>> 1aba0c4e06aa80e711f5d060fe6600bab5611168
    }
    // return httpService.post(`/board`)
    return savedBoard
}

function subscribe(listener) {
    boardChannel.addEventListener('message', listener)
}
function unsubscribe(listener) {
    boardChannel.removeEventListener('message', listener)
}




