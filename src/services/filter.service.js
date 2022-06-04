import { boardService } from "./board.service";

export async function filterByName(filterBy, boardId) {
    if (!boardId) boardId = filterBy.boardId
    const board = await boardService.getById(boardId)
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

export function sort(groups, sortBy) {
    let sortedGroups = groups.filter(group => {
        let taskTextArray = group.tasks.map(task => task.text)
        let sortText = taskTextArray.sort()
        let sorted = group.tasks.filter(task => task.text === sortText)
        console.log(taskTextArray);
    })
    console.log('sorted: ', sortedGroups);
}

// export function sort(groups, sortBy) {
//     let sortedGroups = groups.filter(group => {
//         console.log(group);
//         let taskTextArray = group.tasks.map(task => task.text)
//         let sortText = taskTextArray.sort()
//     })
//     console.log('sorted: ', sortedGroups);
//     // let groupsArray = groups.map(group => group.tasks)
//     if (sortBy === 'text') {
//     }
// } 