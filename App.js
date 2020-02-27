import React from 'react';
import {View} from 'react-native';

import {Button, Text, Grid, Col} from 'native-base';

import BottomSheet from 'reanimated-bottom-sheet';

const HEADER_HEIGHT = 42;
const LIST_ITEM_HEIGHT = 70;

const Header = () => {
  return <View style={{height: HEADER_HEIGHT, backgroundColor: 'red'}} />;
};

const ListItem = () => {
  return (
    <View
      style={{
        height: LIST_ITEM_HEIGHT,
        backgroundColor: 'blue',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      }}>
      <Grid>
        <Col>
          <Button
            style={{width: 44, backgroundColor: 'green', margin: 5}}
            onPress={() => alert('A')}>
            <Text>A</Text>
          </Button>
        </Col>
        <Col>
          <Button
            style={{width: 44, backgroundColor: 'green', margin: 5}}
            onPress={() => alert('B')}>
            <Text>B</Text>
          </Button>
        </Col>
      </Grid>
    </View>
  );
};

const List = () => {
  return (
    <View>
      {Array.from(Array(30)).map(() => (
        <ListItem />
      ))}
    </View>
  );
};

const Tray = () => {
  return (
    <BottomSheet
      snapPoints={[HEADER_HEIGHT + LIST_ITEM_HEIGHT, 400]}
      renderContent={() => <List />}
      renderHeader={() => <Header />}
    />
  );
};

const App: () => React$Node = () => {
  return <Tray />;
};

export default App;
