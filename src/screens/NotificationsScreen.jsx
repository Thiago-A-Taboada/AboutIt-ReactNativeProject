import * as React from 'react';
import { Text, View } from 'react-native';

export default function Notifications() {
  return (
    <View>
      <InstitutoFederal data="Hoje" />
      <Campus nome="Maceio" anoFundacao={1909} />
      <Campus nome="Rio Largo" anoFundacao={2014} />
      <Campus nome="Satuba" anoFundacao={1905} />
      <InstitutoFederal data="Anteriores"/>
      <Campus nome="Palmares" anoFundacao={2014} />
      <Campus nome="Garanhuns" anoFundacao={2010} />
    </View>
  );
}

const Campus = (props) => {
  return (
    <Text>
      Campus {props.nome} fundado em {props.anoFundacao}.
    </Text>
  );
};

const InstitutoFederal = (props) => {
  return (
    <Text>
      {props.data}
    </Text>
  );
};
