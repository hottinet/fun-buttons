import random from 'lodash.random';

import { classArray, ClassObject } from '~/src/logic/classes';
import { body, button } from '~/src/logic/elements';

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

  setCurrentClassState(nextClass);
};

button?.addEventListener('click', changeClass);

body.classList.add('body-' + currentClassState);
button?.classList.add('button-' + currentClassState);
