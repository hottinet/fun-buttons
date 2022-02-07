export interface ClassObject {
  name: string;
  onClick?: () => Promise<void>;
}

// const addSomething = () => {
//   const buttonOneTag = document.getElementsByClassName('button-one');
//   const circleTag = document.createElement("div");
//   buttonOneTag[0].appendChild(circleTag)
// }

export const classArray: ClassObject[] = [{ name: 'one' }, { name: 'two' }];

