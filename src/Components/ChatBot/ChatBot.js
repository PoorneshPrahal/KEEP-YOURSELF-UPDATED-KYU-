import React, { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "b59d3f05-ac90-4a1d-8821-64931fb7ba80", //  ID of this integration.
      region: "eu-gb",
      serviceInstanceID: "d80a64e7-3a73-4f0b-8496-94550dc31baa", // ID of  service instance.
      onLoad: function (instance) {
        instance.render();
      },
    };

    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/${
      window.watsonAssistantChatOptions.clientVersion || 'latest'
    }/WatsonAssistantChatEntry.js`;
    document.head.appendChild(script);

    return () => {
     
      document.head.removeChild(script);
    };
  }, []);

  return <div id="WatsonAssistantChatContainer"></div>;
};

export default ChatBot;
