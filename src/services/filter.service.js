import { boardService } from "./board.service";

export async function filterByName(filterBy) {
    console.log('filterBy: ', filterBy);
    const board = await boardService.query()
    const groups = board.groups.map(group => {
        group.tasks = filter(filterBy, group.tasks)
        return group
    })
    board.groups = groups
    return board
}

export function filter(filterBy, tasks) {
    let tasksToReturn = tasks;
    if (filterBy) {
        var { title, person } = filterBy
        console.log('person: ', person);
        // maxBatteryStatus = maxBatteryStatus || Infinity
        // minBatteryStatus = minBatteryStatus || 0
        if (title) {
            tasksToReturn = tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase())
            )
        } else if (person) {
            tasksToReturn = tasks.filter(task => task.persons.map(person => person.fullname.includes(person)))
        }

        //  && robot.model.toLowerCase().includes(model.toLowerCase())
        // && (robot.batteryStatus < maxBatteryStatus)
        // && robot.batteryStatus > minBatteryStatus)
    }
    return tasksToReturn
}
