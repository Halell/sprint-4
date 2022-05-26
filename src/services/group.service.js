import { boardService } from "./board.service"
import { utilService } from "./util.service"
import { loadBoard } from "../store/action/board.actions"

export const groupService = {
    addGroup,
    remove,
    // query,
    // getById,
}

async function addGroup(board) {
    const newGroup = {
        id: utilService.makeId(),
        archivedAt: 'hour ago',
        style: {},
        tasks: [],
        title: 'Group ' + (board.groups.length + 1)
    }
    board.groups.unshift(newGroup)
    return boardService.save(board)
}

function remove(id, board) {
    const idx = board.groups.findIndex(group => group.id === id)
    board.groups.splice(idx, 1)
    return boardService.save(board)
}