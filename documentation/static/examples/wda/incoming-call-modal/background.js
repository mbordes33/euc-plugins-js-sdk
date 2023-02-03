import app from 'https://cdn.jsdelivr.net/npm/@wazo/euc-plugins-sdk@latest/lib/esm/app.js';

app.onCallIncoming = async call => {
  app.displayModal({
    title: `Incoming call for ${call.displayName}`,
    text: `Client number: ${clientData.number}`,
    height: '50%',
    width: '70%',
  });
};

await app.initialize();
