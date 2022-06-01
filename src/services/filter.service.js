import { boardService } from "./board.service";

export async function filterByName(filterBy) {
    console.log('filterBy: ', filterBy);
    const board = await boardService.getById()
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
        if (title) {
            tasksToReturn = tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase())
            )
        } else if (person) {
            console.log('tasks: ', tasks);
            tasksToReturn = tasks.filter(task => {
                const tasksByMember = task.persons.filter(member => member.fullname.includes(person.fullname))
                if (tasksByMember.length) return true //true
            })
        }
        console.log('task: ', tasksToReturn);

        //  && robot.model.toLowerCase().includes(model.toLowerCase())
        // && (robot.batteryStatus < maxBatteryStatus)
        // && robot.batteryStatus > minBatteryStatus)
    }
    return tasksToReturn
}
