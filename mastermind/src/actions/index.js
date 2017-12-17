// START Action Creators

export const incrementCounter = (by) => ({
    location: ['value'],
    operation: 'updateIn', 
    updateFunction: (value) => value + by,
    type: 'NOT reqiured',
})
export const decrementCounter = (by) => ({
    location: ['value'],
    operation: 'updateIn', 
    updateFunction: (value) => value - by,
    type: 'NOT reqiured',
})

// END Action Creators
