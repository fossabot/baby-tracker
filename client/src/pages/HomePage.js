import React, { useState } from 'react';
import styled from 'styled-components';
import { I18n } from '@lingui/react';
import { Trans, t } from '@lingui/macro';
import useSocket from '../hooks/useSocket';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from '../components/Button';
import { Input, Label } from '../components/Form';

const Root = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.primary};
`;

const Header = styled.h1``;

const Container = styled.div`
  margin-bottom: 30px;
  max-width: 600px;
  padding: 8px;
  border-radius: 4px;
  background: smokewhite;
`;

function HomePage() {
  const [shortId, setShortId] = useState('');
  const [name, setName] = useState('');
  const socket = useSocket();
  const [, setBaby] = useLocalStorage('baby', null);
  const [recent, setRecent] = useLocalStorage('recent', []);

  function handleJoinBaby() {
    socket.emit('baby/join', shortId, function(res) {
      if (res.msg === 'success') {
        setBaby(res.baby);
        if (recent.indexOf(shortId) === -1) {
          setRecent([shortId, ...recent]);
        }
      }
    });
  }

  function handleCreateBaby() {
    socket.emit('baby/create', name, function(res) {
      if (res.msg === 'success') {
        setShortId(res.baby.shortId);
      }
    });
  }

  function handleShortIdChange(e) {
    setShortId(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <Root>
      <Header>Baby Tracker</Header>
      <Container>
        <Label htmlFor="track-baby">
          <Trans>Track Baby</Trans>
        </Label>
        <I18n>
          {({ i18n }) => (
            <Input
              name="track-baby"
              list="recent"
              value={shortId}
              onChange={handleShortIdChange}
              placeholder={`${i18n._(t`ID`)}...`}
            />
          )}
        </I18n>
        <datalist id="recent">
          {recent.map(r => (
            <option key={r} value={r} />
          ))}
        </datalist>
        <Button type="button" onClick={handleJoinBaby}>
          <Trans>Open</Trans>
        </Button>
      </Container>
      <Container>
        <Label htmlFor="new-baby">
          <Trans>New Baby</Trans>
        </Label>
        <I18n>
          {({ i18n }) => (
            <Input
              name="new-baby"
              value={name}
              onChange={handleNameChange}
              placeholder={`${i18n._(t`Name`)}...`}
            />
          )}
        </I18n>
        <Button onClick={handleCreateBaby}>
          <Trans>Create</Trans>
        </Button>
      </Container>
    </Root>
  );
}

HomePage.propTypes = {};

export default HomePage;
