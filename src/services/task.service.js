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
    await storageService.remove(STORAGE_KEY, taskId)
}

async function saveTask(board, groupId, taskToSave) {
    try {
        // await
        const groups = board.groups.map(group => {
            if (group.id === groupId) {
                if (!taskToSave._id) {
                    taskToSave.id = utilService.makeId()
                    group.tasks.push(taskToSave)
                } else {
                    const idx = group.tasks.findIndex(task => task._id === taskToSave._id)
                    group.tasks[idx] = taskToSave
                }
            }
            return group
        })
        board.groups = groups
        return board
    } catch (err) {
        throw err
    }
}