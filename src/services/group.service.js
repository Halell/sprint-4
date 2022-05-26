import { boardService } from "./board.service"
import { utilService } from "./util.service"
import { loadBoard } from "../store/action/board.actions"

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
    const savedBoard = await boardService.save(board)
    return savedBoard
}