
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service-old.js'
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
    getCurrBoard,
    setActivity
}
window.cs = boardService

function getCurrBoard() {
    return gCurrBoard
}

async function query(boardId) {
    const boards = await storageService.query(STORAGE_KEY)
    console.log('boards: ', boards);
    // const board = await storageService.get(STORAGE_KEY, boardId)
    // gCurrBoard = board
    return boards
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

async function setActivity(board, txt, from, to) {
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
        txt
    }
    board.activities.push(activity)
    save(board)
    return board
}

async function save(board, groupId, task) {
    var savedBoard //= (task) ? taskService.saveTask(board, groupId, task) : null
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
        boardChannel.postMessage(getActionUpdateBoard(savedBoard))

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
        savedBoard = await storageService.post(STORAGE_KEY, newBoard)
        boardChannel.postMessage(getActionAddBoard(savedBoard))
        console.log('adding board');
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




