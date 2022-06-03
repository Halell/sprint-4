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
        createdAt: createdAt.toLocaleTimeString('he-IL', {hour: '2-digit', minute: '2-digit'}),
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
        // await
        const groups = board.groups.map(group => {
            if (group.id === groupId) {
                if (!taskToSave.id) {
                    console.log('hi')
                    taskToSave.id = utilService.makeId()
                    taskToSave.date = "24/05/2022"
                    taskToSave.persons = []
                    taskToSave.status = "none"
                    taskToSave.text = "lets get it done"
                    taskToSave.importance = "mid"
                    group.tasks.push(taskToSave)
                    console.log(group)
                } else {
                    // console.log('hi')
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