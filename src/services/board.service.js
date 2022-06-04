import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { getActionRemoveBoard, getActionAddBoard, getActionUpdateBoard } from '../store/action/board.actions'
import { httpService } from './http.service.js'
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
    return httpService.get('board')
    // const boards = await storageService.query(STORAGE_KEY)
    // console.log('boards: ', boards)
    // return boards
}
function getById(boardId) {
    return httpService.get(`board/${boardId}`)
    // return storageService.get(STORAGE_KEY, boardId)
    // return axios.get(`/api/board/${boardId}`)
}
async function remove(boardId) {
    console.log('boardId: ', boardId);
    return httpService.delete(`board/${boardId}`)
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    // await storageService.remove(STORAGE_KEY, boardId)
    // boardChannel.postMessage(getActionRemoveBoard(boardId))
}

async function setActivity(board, txt, from, to, style) {

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
        createdAt: createdAt.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' }),
        style
    }
    board.activities.push(activity)
    save(board)
    return board
}

async function save(board) {
    var savedBoard
    if (board._id) {
        boardChannel.postMessage(getActionUpdateBoard(savedBoard))
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
        savedBoard = await httpService.post('board', newBoard)
        // boardChannel.postMessage(getActionAddBoard(savedBoard))
    }
    return savedBoard
}

function subscribe(listener) {
    boardChannel.addEventListener('message', listener)
}
function unsubscribe(listener) {
    boardChannel.removeEventListener('message', listener)
}
