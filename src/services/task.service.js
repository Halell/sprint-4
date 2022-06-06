import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"
import { boardService } from "./board.service"

const STORAGE_KEY = 'board'
export const taskService = {
    setActivity,
    remove,
    saveTask,
}

function remove(groupId, taskId, board) {
    console.log(taskId)
    const groupIdx = board.groups.findIndex(group => group.id === groupId)
    const taskIdx = board.groups[groupIdx].tasks.map(task => task.id === taskId)
    board.groups[groupIdx].tasks.splice(taskIdx, 1)
    return boardService.save(board)
}


async function setActivity(task, txt, from, to, style) {
    console.log(task)
    const createdAt = new Date()
    const activity = {
        byMember: {
            fullname: "guest",
            imgUrl: "",
            _id: "userId",
            createdAt: new Date(),
        },
        id: utilService.makeId(),
        txt,
        createdAt: createdAt.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' }),
        from,
        to,
        style
    }
    if (!task.activities) task.activities = [activity]
    else task.activities.push(activity)

    return task
}

async function saveTask(board, groupId, taskToSave) {
    try {
        const createdAt = new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
        const groups = board.groups.map(group => {
            if (group.id === groupId) {
                if (!taskToSave.id) {
                    taskToSave.id = utilService.makeId()
                    taskToSave.date = ""
                    taskToSave.persons = []
                    taskToSave.status = "none"
                    taskToSave.text = ""
                    taskToSave.priority = "mid"
                    taskToSave.updates = []
                    group.tasks.push(taskToSave)
                } else {
                    const idx = group.tasks.findIndex(task => task.id === taskToSave.id)
                    group.tasks[idx] = taskToSave
                }
            }
            return group
        })
        board.groups = groups
        return boardService.save(board)
    } catch (err) {
        throw err
    }
}

// { //new update
//     byMember: {
//         fullname: "Carmel Yona",
//         imgUrl: "",
//         _id: "userId",
//         createdAt: createdAt
//     },
//     text: `Created at ${createdAt}  `,
//     isRead: false,
// }