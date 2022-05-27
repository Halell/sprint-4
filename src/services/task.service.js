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

function remove(groupId, taskId, board) {
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const taskIdx = board.groups[groupIdx].tasks.map(task => task.id === taskId)
    board.groups[groupIdx].tasks.splice(taskIdx, 1)
    console.log(board.groups[groupIdx].tasks)
    return boardService.save(board)
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