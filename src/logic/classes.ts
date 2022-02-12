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
      button.classList.add('button-bluebg-transition');
      await timeout(() => {
        //un apply the class
        button.classList.remove('button-bluebg-transition');
      }, 2000);
    },
  },
  { name: 'white' },
];
