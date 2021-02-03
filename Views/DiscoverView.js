import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {DiscoverModel} from '../Models/TestModels';
import {ExperienceImageSourceByIndex} from '../Images/AppImages';

const DiscoverItem = ({index, item}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressForItem}>
      <View style={styles.discoverItem}>
        <View style={styles.discoverItemPhotoContainer}>
          <Image
            resizeMethod={'scale'}
            style={styles.discoverItemPhoto}
            source={ExperienceImageSourceByIndex(index)}
          />
        </View>
        <Text style={styles.discoverItemTitle}>{item.title}</Text>
        <Text style={styles.discoverItemCaption}>{item.caption}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const DiscoverListHeader = ({date, title}) => {
  return (
    <View style={styles.discoverListHeader}>
      <Text style={styles.discoverListHeaderDate}>{date}</Text>
      <Text style={styles.discoverListHeaderTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  discover: {
    backgroundColor: '#efefef',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  discoverItem: {
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 14,
  },
  discoverItemPhotoContainer: {
    aspectRatio: 1,
  },
  discoverItemPhoto: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  discoverItemTitle: {
    fontSize: 32,
    padding: 14,
    paddingBottom: 8,
  },
  discoverItemCaption: {
    padding: 14,
    paddingTop: 0,
    fontSize: 16,
  },
  discoverListHeader: {
    padding: 14,
  },
  discoverListHeaderDate: {
    fontSize: 14,
    paddingBottom: 4,
  },
  discoverListHeaderTitle: {
    fontSize: 32,
  },
});

const onPressForItem = () => {
  alert('Navigate to ExperienceScene');
};

export class DiscoverView extends Component {
  state = DiscoverModel;

  renderListHeader = () => {
    return (
      <DiscoverListHeader
        date={this.state.listHeaderDate}
        title={this.state.listHeaderTitle}
      />
    );
  };

  renderItem = ({item, index}) => {
    return <DiscoverItem item={item} index={index} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.discover}>
        <FlatList
          data={this.state.data}
          ListHeaderComponent={this.renderListHeader}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}
