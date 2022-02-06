import random from 'lodash.random';

import { classArray } from '~/src/logic/classes'
import { body,button } from '~/src/logic/elements';

let currentClassState = classArray[random(0, classArray.length)]

const getCurrentClassState = () => {
  return currentClassState
}

const setCurrentClassState = (nextClass:string) => {
  currentClassState = nextClass
}

const changeClass = () => {
  const currentClass = getCurrentClassState()
  const filteredClassArray = classArray.filter((c) =>{
    return c !== currentClass
  })

  const nextClass = filteredClassArray[random(0, filteredClassArray.length-1)]

  body.classList.replace("body-" + currentClass, "body-" + nextClass)
  button?.classList.replace("button-" + currentClass, "button-" + nextClass)

  setCurrentClassState(nextClass)
}

changeClass()

button?.addEventListener("click", changeClass)
