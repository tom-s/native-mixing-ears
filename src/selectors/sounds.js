export const getCurrentSound = (state) => state.sounds.all[state.sounds.current]

export const getSoundById = (state, id) => state.sounds.all[id]

export const getCurrentMode = (state) => state.sounds.mode

export const getIsPlaying = (state) => state.sounds.isPlaying
