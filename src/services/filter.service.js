import { boardService } from "./board.service";

export function filterByName(filterBy) {
    const board = boardService.getCurrBoard()
    // var { title } = filterBy
    const groups = board.groups.map(group => {
        group.tasks = filter(filterBy, group.tasks)
        return group
    })
    board.groups = groups
    return board
}

function filter(filterBy, tasks) {
    let tasksToReturn = tasks;
    if (filterBy) {
        var { title } = filterBy
        // maxBatteryStatus = maxBatteryStatus || Infinity
        // minBatteryStatus = minBatteryStatus || 0
        tasksToReturn = tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase()))
        //  && robot.model.toLowerCase().includes(model.toLowerCase())
        // && (robot.batteryStatus < maxBatteryStatus)
        // && robot.batteryStatus > minBatteryStatus)
    }
    return tasksToReturn
}
