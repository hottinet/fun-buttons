import random from 'lodash.random';

import { classArray, ClassObject } from '~/src/logic/classes';
import {
  body,
  buttonOne,
  buttonOneText,
  buttonTwo,
  buttonTwoText,
} from '~/src/logic/elements';

// START - CLASS STATE - START
let currentClassState = classArray[random(0, classArray.length - 1)];
const getCurrentClassState = () => {
  return currentClassState;
};
const setCurrentClassState = (nextClass: ClassObject) => {
  currentClassState = nextClass;
};
// END - CLASS STATE - END

// START - BUTTON STATE - START
interface StateElements {
  button: HTMLButtonElement;
  text: HTMLParagraphElement;
}

const buttonState: {
  current: StateElements;
  next: StateElements;
} = {
  current: {
    button: buttonOne,
    text: buttonOneText,
  },
  next: {
    button: buttonTwo,
    text: buttonTwoText,
  },
};
const getButtonState = () => {
  return buttonState;
};
const toggleButtonState = () => {
  const futureNext = getButtonState().current;
  const futureCurrent = getButtonState().next;

  buttonState.current = futureCurrent;
  buttonState.next = futureNext;
};
// END - BUTTON STATE - END

// START - CHANGE CLASS LOGIC - START
const changeClass = async () => {
  const currentClass = getCurrentClassState();
  const { current, next } = getButtonState()

  // Don't allow the currently selected styles to
  // be randomly selected for next
  const filteredClassArray = classArray.filter((c) => {
    return c !== currentClass;
  });
  const nextClass =
    filteredClassArray[random(0, filteredClassArray.length - 1)];

  await currentClass.onClick?.(current.button);

  body.classList.replace('body-' + currentClass.name, 'body-' + nextClass.name);

  // Clear all the current classes on the next button, then add the appropriate one
  next.button.classList.remove(...Array.from(next.button.classList))
  next.button.classList.add(
    'button-' + nextClass.name
  );

  // Do the same for the text
  next.text.classList.remove(...Array.from(next.text.classList))
  next.text.classList.add(
    'button-text-' + nextClass.name
  );

  next.button.style.display = "block"
  current.button.style.display = "none"

  setCurrentClassState(nextClass);
  toggleButtonState()
};
// END - CHANGE CLASS LOGIC - END

// START - SETUP - START
// For both buttons (current and next) apply the onClick listener
Object.keys(buttonState).forEach((stateKey) => {
  getButtonState()[
    stateKey as keyof typeof buttonState
  ].button.addEventListener('click', changeClass);
});

body.classList.add('body-' + currentClassState.name);
const { current, next } = getButtonState();

next.button.style.display = 'none'

current.text.classList.add('button-text-' + currentClassState.name);
current.button.classList.add('button-' + currentClassState.name);
// END - SETUP - END
