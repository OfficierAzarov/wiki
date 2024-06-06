'use client';

import { MouseEventHandler } from 'react';

export default function Button({
  text,
  action,
  isSubmitButton = false,
}: {
  text: string;
  action?: MouseEventHandler<HTMLButtonElement>;
  isSubmitButton?: boolean;
}) {
  return (
    <button
      className={'ml-2 inline-block align-middle font-sans text-xs'}
      onClick={action ? action : undefined}
      type={isSubmitButton ? 'submit' : undefined}
    >
      [{text}]
    </button>
  );
}
