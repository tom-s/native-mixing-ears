import { exercises } from 'nativeMixing/src/config/exercises'
import { sample } from 'lodash'

const generateAnswer = (values) => {
  const answers = {}
  answers.attack = sample(values.attack)
  answers.release = sample(values.release)
  answers.ratio = sample(values.ratio)
  return answers
}

export const generateExercise = (type, level) => {
  const exercise = exercises[type][level]

  // Generate a random answer
  exercise.answers = generateAnswer(exercise['values'])
  return exercise
}
