export const currentProject = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT': 
      return action.project
    default: 
      return state
  }
}