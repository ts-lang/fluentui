import * as React from 'react';
import type { DynamicVirtualizerContextProps, VirtualizerContextProps } from './types';
import { useMemo, useState, useRef } from 'react';

const VirtualizerContext = React.createContext<VirtualizerContextProps | undefined>(
  undefined,
) as React.Context<VirtualizerContextProps>;

export const VirtualizerContextProvider = VirtualizerContext.Provider;

export const useVirtualizerContext_unstable = () => {
  return React.useContext(VirtualizerContext);
};

export const useVirtualizerContextState_unstable = (
  passedContext?: VirtualizerContextProps,
): DynamicVirtualizerContextProps => {
  const virtualizerContext = useVirtualizerContext_unstable();
  const [_contextIndex, _setContextIndex] = useState<number>(-1);
  const [_contextPosition, _setContextPosition] = useState<number>(0);
  const childProgressiveSizes = useRef<number[]>([]);

  /* We respect any wrapped providers while also ensuring defaults or passed through
   * Order of usage -> Passed Prop -> Provider Context -> Internal State default
   */
  const context = useMemo(
    () => ({
      contextIndex: passedContext?.contextIndex ?? virtualizerContext?.contextIndex ?? _contextIndex,
      setContextIndex: passedContext?.setContextIndex ?? virtualizerContext?.setContextIndex ?? _setContextIndex,
      contextPosition: passedContext?.contextPosition ?? virtualizerContext?.contextPosition ?? _contextPosition,
      setContextPosition:
        passedContext?.setContextPosition ?? virtualizerContext?.setContextPosition ?? _setContextPosition,
      childProgressiveSizes,
    }),
    [_contextIndex, _contextPosition, passedContext, virtualizerContext],
  );

  return context;
};
