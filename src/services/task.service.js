import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"
import { boardService } from "./board.service"

const STORAGE_KEY = 'board'


export const taskService = {
    query,
    getById,
    remove,
    saveTask,
}

function query() {
    return storageService.query(STORAGE_KEY)
}

function getById(taskId) {
    return storageService.get(STORAGE_KEY, taskId)
    // return axios.get(`/api/board/${boardId}`)
}

async function remove(taskId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    await storageService.remove(STORAGE_KEY, taskId)
}

async function saveTask(boardId, groupId, taskToSave) {
    try {
        const board = await getById(boardId)
        if (taskToSave._id) {
            const groups = board.groups.map(group => {
                if (group.id === groupId) group.taskes.push(taskToSave)
                return group
            })
            board.groups = groups
            boardService.save(board)
        } else {
            // board.group
        }

    } catch (err) {
        throw err
    }
}