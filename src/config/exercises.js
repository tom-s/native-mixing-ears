export const LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
}

export const EXERCISES_TYPES = {
  ATTACK: 'attack',
  RELEASE: 'release',
  RATIO: 'ratio',
  ATTACK_RELEASE: 'attackRelease',
  ATTACK_RELEASE_RATIO: 'attackReleaseRatio'
}

export const exercises = {
  [EXERCISES_TYPES.ATTACK]: {
    [LEVELS.EASY]: {
      attack: [
        { value: 0.003, label: '3ms' },
        { value: 0.0010, label: '10ms' },
        { value: 0.100, label: '100ms' }
      ],
      release: null,
      ratio: null
    },
    [LEVELS.MEDIUM]: {
      attack: [
        { value: 0.003, label: '3ms' },
        { value: 0.0010, label: '10ms' },
        { value: 0.100, label: '50ms' },
        { value: 0.100, label: '100ms' }
      ],
      release: null,
      ratio: null
    },
    [LEVELS.HARD]: {
      attack: [
        { value: 0.003, label: '3ms' },
        { value: 0.0010, label: '10ms' },
        { value: 0.100, label: '50ms' },
        { value: 0.100, label: '80ms' },
        { value: 0.0010, label: '100ms' }
      ],
      release: null,
      ratio: null
    }
  },
  [EXERCISES_TYPES.RELEASE]: {

  },
  [EXERCISES_TYPES.RATIO]: {

  },
  [EXERCISES_TYPES.ATTACK_RELEASE]: {

  },
  [EXERCISES_TYPES.ATTACK_RELEASE_RATIO]: {

  }
}
