export interface ClassObject {
  name: string;
  onClick?: () => Promise<void>;
}

export const classArray: ClassObject[] = [{ name: 'one' }, { name: 'two' }];
