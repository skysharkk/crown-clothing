import React from 'react';

import Spinner from '../spinner/spinner.component';

interface IWithSpinnerProps {
  isLoading: boolean;
};

// eslint-disable-next-line prettier/prettier
const WithSpinner = <P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & IWithSpinnerProps> => ({
  isLoading,
  ...otherProps
}: IWithSpinnerProps) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...(otherProps as P)} />;
};

export default WithSpinner;
