import * as React from 'react';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';
import { Radio, RadioGroup } from '../index';

export const Disabled = () => {
  const labelId = useId('label');
  <Label id={labelId}>Favorite Fruit</Label>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <RadioGroup defaultValue="apple" disabled aria-labelledby={labelId}>
        <Radio value="apple" label="Apple" />
        <Radio value="pear" label="Pear" />
        <Radio value="banana" label="Banana" />
        <Radio value="orange" label="Orange" />
      </RadioGroup>
    </div>
  );
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'RadioGroup can be disabled, which disables all Radio items inside.',
    },
  },
};