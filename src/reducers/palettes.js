export const palettes = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PALETTES': 
        return action.palettes
      default: 
        return state
    }
  }