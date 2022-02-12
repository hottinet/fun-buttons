import { timeout } from './util';

export interface ClassObject {
  name: string;
  onClick?: (button: HTMLButtonElement) => Promise<void>;
}

export const classArray: ClassObject[] = [
  {
    name: 'bluebg',
    onClick: async (button) => {
      //apply a new class in here
      button.classList.add('button-one-transition');
      await timeout(() => {
        //un apply the class
        button.classList.remove('button-one-transition');
      }, 2000);
    },
  },
  { name: 'white' },
];
