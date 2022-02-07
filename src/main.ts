import random from 'lodash.random';

import { classArray, ClassObject } from '~/src/logic/classes';
import { body, button, buttonText } from '~/src/logic/elements';

let currentClassState = classArray[random(0, classArray.length - 1)];

const getCurrentClassState = () => {
  return currentClassState;
};

const setCurrentClassState = (nextClass: ClassObject) => {
  currentClassState = nextClass;
};

const changeClass = async () => {
  const currentClass = getCurrentClassState();
  const filteredClassArray = classArray.filter((c) => {
    return c !== currentClass;
  });

  const nextClass =
    filteredClassArray[random(0, filteredClassArray.length - 1)];

  if (nextClass.onClick) {
    await nextClass.onClick();
  }

  body.classList.replace('body-' + currentClass.name, 'body-' + nextClass.name);
  button?.classList.replace(
    'button-' + currentClass.name,
    'button-' + nextClass.name
  );
  buttonText?.classList.replace(
    'button-text-' + currentClass.name,
    'button-text-' + nextClass.name
  );

  setCurrentClassState(nextClass);
};

button?.addEventListener('click', changeClass);

body.classList.add('body-' + currentClassState.name);
buttonText?.classList.add('button-text-' + currentClassState.name);
button?.classList.add('button-' + currentClassState.name);
