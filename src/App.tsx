// <Suspense fallback={<div>Loading...</div>}>
//   <Cookies />
// </Suspense>;
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {Suspense} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {RecoilRoot} from 'recoil';
import {AppContent} from './AppContent';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        <AppContent />
      </QueryClientProvider>
    </RecoilRoot>
  );
};
export default App;
