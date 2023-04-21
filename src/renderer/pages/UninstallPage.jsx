import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

import Uninstall from 'components/organisms/Wrappers/Uninstall';

const UninstallPage = () => {
  const { state, setState } = useContext(GlobalContext);

  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
  });
  const { disabledNext, disabledBack } = statePage;

  const ipcChannel = window.electron.ipcRenderer;

  const uninstall = (data) => {
    // alert(
    //   'Open Konsole and paste this code: bash ~/.config/EmuDeck/backend/uninstall.sh'
    // );
    ipcChannel.sendMessage('bash', [
      'bash ~/.config/EmuDeck/backend/uninstall.sh',
    ]);
    //window.close();
  };

  return (
    <Wrapper>
      <Header title="Uninstall" bold="EmuDeck" />
      <Uninstall
        disabledNext={disabledNext}
        disabledBack={disabledBack}
        onClick={uninstall}
      />
      <Footer
        next={false}
        disabledNext={disabledNext}
        disabledBack={disabledBack}
      />
    </Wrapper>
  );
};

export default UninstallPage;