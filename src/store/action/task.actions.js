import { taskService } from "../../services/task.service"

export function saveTask(task, boardId, groupId) { // Action Creator
    return async (dispatch) => {
        try {
            const actionType = (task._id) ? 'UPDATE_TASK' : 'ADD_TASK'
            const res = await taskService.saveTask(task, boardId, groupId)
            const savedTask = res
            console.log('savedTask: ', savedTask);
            dispatch({
                type: actionType,
                task: savedTask
            })
        } catch (err) {
            throw err
        }
    }
}