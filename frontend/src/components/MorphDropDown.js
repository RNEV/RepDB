import { MultiSelect } from '@mantine/core';

import { morphs } from '../morphList';

console.log(morphs);

const data = morphs.map((morph, index) => `Item ${index}`);

const MorphDropDown = () => {
  return (
    <MultiSelect
      data={data}
      label='Large data set'
      placeholder='Scroll to see all options'
      maxDropdownHeight={160}
    />
  );
};

export default MorphDropDown;
