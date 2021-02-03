import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ProfileModel} from '../Models/TestModels';
import {IconMenu, IconAdd, IconGrid, IconList} from '../Icons/AppIcons';
import {
  ExperienceImageSourceByIndex,
  ListImageSourceByIndex,
  UserImageSource,
} from '../Images/AppImages';

const ProfileListHeaderItem = ({title, index}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressForListHeaderItem}>
      <View style={styles.profileListHeaderItem}>
        <Text style={styles.profileListHeaderItemTitle}>{title}</Text>
        <View style={styles.profileListHeaderItemPhotoContainer}>
          <Image
            resizeMethod={'scale'}
            style={styles.profileListHeaderItemPhoto}
            source={ListImageSourceByIndex(index)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ProfileListHeaderNavigationBar = () => {
  return (
    <View style={styles.profileListHeaderNavigationBar}>
      <TouchableWithoutFeedback onPress={onPressForNavigationBarGrid}>
        <View style={styles.profileListHeaderNavigationBarIcon}>
          <IconGrid color={'#000000'} size={30} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onPressForNavigationBarList}>
        <View style={styles.profileListHeaderNavigationBarIcon}>
          <IconList color={'#969696'} size={30} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

class ProfileListHeader extends Component {
  renderItemSeparatorComponent() {
    return <View style={styles.profileListHeaderItemSeparator} />;
  }

  renderItem({item, index}) {
    return (
      <ProfileListHeaderItem index={index} key={item.id} title={item.title} />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.profileListHeader}>
        <TouchableWithoutFeedback onPress={onPressForHeaderLeftIcon}>
          <View style={styles.profileListHeaderNavigationLeftIcon}>
            <IconMenu color={'#000000'} size={30} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onPressForHeaderRightIcon}>
          <View style={styles.profileListHeaderNavigationRightIcon}>
            <IconAdd color={'#000000'} size={30} />
          </View>
        </TouchableWithoutFeedback>
        <Image
          resizeMethod={'scale'}
          style={styles.profileListHeaderPhoto}
          source={UserImageSource}
        />
        <Text style={styles.profileListHeaderTitle}>{this.props.title}</Text>
        <FlatList
          data={this.props.data}
          horizontal={true}
          contentContainerStyle={{paddingLeft: 7, paddingRight: 7}}
          ItemSeparatorComponent={this.renderItemSeparatorComponent}
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={false}
        />
        <ProfileListHeaderNavigationBar />
      </SafeAreaView>
    );
  }
}

const ProfileItem = ({item, index}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressForItem}>
      <View
        style={[
          styles.profileItem,
          index % 3 === 0 ? {marginLeft: 0} : {marginLeft: 1},
        ]}>
        <Text style={styles.profileItemTitle}>{item.title}</Text>
        <View style={styles.profileItemPhotoContainer}>
          <Image
            resizeMethod={'scale'}
            style={styles.profileItemPhoto}
            source={ExperienceImageSourceByIndex(index)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  profile: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  profileItemSeparator: {
    margin: 0.5,
  },
  profileItem: {
    flex: 1,
    overflow: 'hidden',
  },
  profileItemPhotoContainer: {
    aspectRatio: 1,
  },
  profileItemPhoto: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  profileItemTitle: {
    position: 'absolute',
    bottom: 8,
    fontSize: 14,
    alignSelf: 'center',
  },
  profileListHeader: {
    padding: 14,
  },
  profileListHeaderNavigationLeftIcon: {
    position: 'absolute',
    top: 14,
    left: 14,
    width: 30,
    height: 30,
  },
  profileListHeaderNavigationRightIcon: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 30,
    height: 30,
  },
  profileListHeaderPhoto: {
    backgroundColor: '#dddddd',
    width: 140,
    height: 140,
    borderRadius: 70,
    alignSelf: 'center',
    marginTop: 18,
  },
  profileListHeaderTitle: {
    alignSelf: 'center',
    fontSize: 28,
    margin: 18,
  },
  profileListHeaderItemSeparator: {
    width: 7,
  },
  profileListHeaderItem: {
    flex: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
  profileListHeaderItemPhotoContainer: {
    width: ((width * 0.36) / 3) * 2,
    height: width * 0.36,
  },
  profileListHeaderItemPhoto: {
    width: undefined,
    height: '100%',
    aspectRatio: 1,
  },
  profileListHeaderItemTitle: {
    position: 'absolute',
    bottom: 8,
    fontSize: 14,
    alignSelf: 'center',
  },
  profileListHeaderNavigationBar: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
  },
  profileListHeaderNavigationBarIcon: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
});

const onPressForHeaderLeftIcon = () => {
  alert('Navigate to UserSettingsScene');
};
const onPressForHeaderRightIcon = () => {
  alert('Navigate to AddContentScene');
};
const onPressForItem = () => {
  alert('Navigate to UserExperienceScene');
};
const onPressForListHeaderItem = () => {
  alert('Navigate to UserListScene');
};
const onPressForNavigationBarGrid = () => {
  alert('Toggle FlatList Grid Display');
};
const onPressForNavigationBarList = () => {
  alert('Toggle FlatList Row Display');
};

export class ProfileView extends Component {
  state = ProfileModel;

  renderListHeader = () => {
    return (
      <ProfileListHeader
        data={this.state.listHeaderData}
        title={this.state.listHeaderTitle}
      />
    );
  };

  renderItemSeparatorComponent = () => {
    return <View style={styles.profileItemSeparator} />;
  };

  renderItem = ({item, index}) => {
    return <ProfileItem item={item} index={index} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.profile}>
        <FlatList
          data={this.state.data}
          numColumns={this.state.numColumns}
          ListHeaderComponent={this.renderListHeader}
          ItemSeparatorComponent={this.renderItemSeparatorComponent}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }
}
