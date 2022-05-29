const fs = require('fs')
const gBoard = require('../data/board.json')
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}


function query(entityType, delay = 100) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || gBoard
    return new Promise((resolve, reject) => {
        // console.log(entities)
        setTimeout(() => {
            // reject('OOOOPs')
            console.log('hay query going to save', entities)
            _save(entityType, entities)
            resolve(entities)
        }, delay)
    })
}
function get(entityType, entityId = "b101") {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}
function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            console.log('hay post going to save', entities)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            console.log('from put index is', idx)
            entities.splice(idx, 1, updatedEntity)
            console.log(' going to save enttits from put rqentities: ', entities)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    console.log('hay remuve')
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    console.log(entities)
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}