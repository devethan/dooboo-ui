import { IC_ARR_DOWN, IC_ARR_UP } from '../Icon';
import React, { ReactElement } from 'react';

import Accordion from '../../main/Accordion';
import { ContainerDeco } from '../../storybook/decorators';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Default = (): React.ReactElement => {
  return (
    <Container>
      <Accordion />
    </Container>
  );
};

/**
 * Below are stories for web
 */
export default {
  title: 'Accordion',
};

export const toStorybook = (): ReactElement => <Default />;

toStorybook.story = {
  name: 'default',
};

/**
 * Below are stories for app
 */
storiesOf('Accordion', module)
  .addDecorator(ContainerDeco)
  .add('default', () => <Default />, {
    notes: 'Simple explanation',
  });
