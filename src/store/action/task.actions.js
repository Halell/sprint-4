import { taskService } from "../../services/task.service"

export function saveTask(board, groupId, task) { // Action Creator
    return async (dispatch) => {
        try {
            console.log('task22: ', task)
            // console.log('board22: ', board);
            // console.log('groupId22: ', groupId);
            const actionType = (task._id) ? 'UPDATE_TASK' : 'ADD_TASK'
            const res = await taskService.saveTask(board, groupId, task)
            const savedTask = res
            dispatch({
                type: actionType,
                task: savedTask
            })
        } catch (err) {
            throw err
        }
    }
}