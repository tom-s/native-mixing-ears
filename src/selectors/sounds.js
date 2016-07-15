export const getCurrentSound = (state) => state.sounds.all[state.sounds.current]

export const getSoundById = (state, id) => state.sounds.all[id]
