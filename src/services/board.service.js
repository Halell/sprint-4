
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service-old.js'
import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/action/board.actions'
import { taskService } from './task.service'
import { httpService } from './http.service'

const STORAGE_KEY = 'board'
const BASE_URL = 'http://localhost:3030/api/board'
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
    // const boards = await storageService.query(STORAGE_KEY)
    // console.log('boards: ', boards);
    // return boards
    return httpService.get('board')
}
function getById(boardId) {
    // return storageService.get(STORAGE_KEY, boardId)
    // return axios.get(`/api/board/${boardId}`)
    return httpService.get(`board/${boardId}`)
}
async function remove(boardId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    // await storageService.remove(STORAGE_KEY, boardId)
    // boardChannel.postMessage(getActionRemoveBoard(boardId))
    httpService.delete(`board/${boardId}`)
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
    board.activities.push(activity)
    save(board)
    return board
}

async function save(board, groupId, task) {
    var savedBoard //= (task) ? taskService.saveTask(board, groupId, task) : null
    if (board._id) {
        // savedBoard = await storageService.put(STORAGE_KEY, board)
        // boardChannel.postMessage(getActionUpdateBoard(savedBoard))
        return httpService.put(`board/:${board._id}`, board)
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
        // Later, owner is set by the backend
        // board.owner = userService.getLoggedinUser()
        // savedBoard = await storageService.post(STORAGE_KEY, newBoard)
        // boardChannel.postMessage(getActionAddBoard(savedBoard))
        // console.log('adding board');
        savedBoard = await httpService.post('board', newBoard)
    }
    return savedBoard
    // httpService.post(`board`, board)
}

function subscribe(listener) {
    boardChannel.addEventListener('message', listener)
}
function unsubscribe(listener) {
    boardChannel.removeEventListener('message', listener)
}




