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
import {SocialModel} from '../Models/TestModels';
import {IconGuide} from '../Icons/AppIcons';
import {
  ExperienceImageSourceByIndex,
  ListImageSourceByIndex,
} from '../Images/AppImages';

const SocialListHeaderItem = ({index, title}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressForListHeaderItem}>
      <View style={styles.socialListHeaderItem}>
        <View style={styles.socialListHeaderItemPhotoContainer}>
          <Image
            resizeMethod={'scale'}
            style={styles.socialListHeaderItemPhoto}
            source={ListImageSourceByIndex(index)}
          />
        </View>
        <Text style={styles.socialListHeaderItemTitle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

class SocialListHeader extends Component {
  renderItemSeparatorComponent() {
    return <View style={styles.socialListHeaderItemSeparator} />;
  }

  renderItem({item, index}) {
    return (
      <SocialListHeaderItem index={index} key={item.id} title={item.title} />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.socialListHeader}>
        <Text style={styles.socialListHeaderTitle}>{this.props.title}</Text>
        <TouchableWithoutFeedback onPress={onPressForHeaderRightIcon}>
          <View style={styles.socialListHeaderNavigationRightIcon}>
            <IconGuide color={'#000000'} size={30} />
          </View>
        </TouchableWithoutFeedback>
        <FlatList
          data={this.props.data}
          horizontal={true}
          contentContainerStyle={{paddingLeft: 7, paddingRight: 7}}
          ItemSeparatorComponent={this.renderItemSeparatorComponent}
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }
}

const SocialItem = ({index, item}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressForItem}>
      <View style={styles.socialItem}>
        <View style={styles.socialItemPhotoContainer}>
          <Image
            resizeMethod={'scale'}
            style={styles.socialItemPhoto}
            source={ExperienceImageSourceByIndex(index)}
          />
        </View>
        <View style={styles.socialItemDetailsContainer}>
          <Text style={styles.socialItemTitle}>{item.title}</Text>
          <View style={styles.socialItemSubDetailsContainer}>
            <Text style={styles.socialItemCaption}>{item.caption}</Text>
            <Text style={styles.socialItemDate}>• {item.date}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  social: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  socialItemSeparator: {
    margin: 14,
  },
  socialItem: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  socialItemPhotoContainer: {
    marginLeft: 14,
    backgroundColor: '#dddddd',
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  socialItemPhoto: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  socialItemDetailsContainer: {
    flexDirection: 'column',
    marginLeft: 14,
  },
  socialItemTitle: {
    marginTop: 16,
    fontSize: 18,
  },
  socialItemSubDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 7,
  },
  socialItemCaption: {
    fontSize: 14,
    color: '#555',
  },
  socialItemDate: {
    marginLeft: 7,
    fontSize: 14,
    color: '#969696',
  },
  socialListHeader: {
    padding: 14,
    marginBottom: 24,
  },
  socialListHeaderNavigationRightIcon: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 30,
    height: 30,
  },
  socialListHeaderTitle: {
    fontSize: 32,
    margin: 18,
  },
  socialListHeaderItemSeparator: {
    width: 7,
  },
  socialListHeaderItem: {
    flex: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
  socialListHeaderItemPhotoContainer: {
    backgroundColor: '#dddddd',
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  socialListHeaderItemPhoto: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  socialListHeaderItemTitle: {
    marginTop: 7,
    fontSize: 14,
    alignSelf: 'center',
  },
});

const onPressForHeaderRightIcon = () => {
  alert('Navigate to GuideSearchScene');
};
const onPressForItem = () => {
  alert('Navigate to UserConversationScene');
};
const onPressForListHeaderItem = () => {
  alert('Navigate to UserProfileScene');
};

export class SocialView extends Component {
  state = SocialModel;

  renderListHeader = () => {
    return (
      <SocialListHeader
        data={this.state.listHeaderData}
        title={this.state.listHeaderTitle}
      />
    );
  };

  renderItemSeparatorComponent = () => {
    return <View style={styles.socialItemSeparator} />;
  };

  renderItem = ({item, index}) => {
    return <SocialItem item={item} index={index} />;
  };

  render() {
    return (
      <SafeAreaView style={styles.social}>
        <FlatList
          data={this.state.data}
          ListHeaderComponent={this.renderListHeader}
          ItemSeparatorComponent={this.renderItemSeparatorComponent}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    );
  }
}
