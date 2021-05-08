import React from 'react';
import MyForm from './components/MyForm';
import Card from './components/Card';

const App: React.FC = function() {
  const send = (text: string) => {
    console.log('and the text is: ', text)
  }
  return <div>
        <MyForm placeholder="Email" sendText={send} />
        <Card name={'QD'}/>
      </div>
}

export default App;
