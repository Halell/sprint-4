import { boardService } from "./board.service"
import { utilService } from "./util.service"


export const groupService = {
    saveGroup,
    // query,
    // getById,
    // remove,
}

async function saveGroup(board) {
    const newGroup = {
        id: utilService.makeId(),
        archivedAt: 'hour ago',
        style: {},
        tasks: [],
        title: 'Group ' + (board.groups.length + 1)
    }
    board.groups.unshift(newGroup)
    boardService.save(board)
}