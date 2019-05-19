/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import CustomListview from './components/CustomListview'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

 /* Return object for populate the list */
 getData() {
  return [
    {
      key: 1, title: 'Trvia Crack 2',
      description: 'Lorem ipsum dolor sit ame',
      image_url: 'https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/dfgkfivjrhcksyymh9vw.jpg'
    },
    {
      key: 2,
      title: 'Legendary : Game of Heroes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
      image_url: 'https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2018/03/DC-Unchained-Mobile-Game-by-FourThirtyThree-Inc.-image-1.jpg'
    },
    {
      key: 1, title: 'Pocket Legends',
      description: 'Lorem eiusmod tempor incididunt ut labore',
      image_url: 'https://mobimg.b-cdn.net/androidgame_img/pocket_legends/real/5_pocket_legends.jpg'
    },
    
    {
      key: 1, title: 'Game Board',
      description: 'AP World History Game Board ',
      image_url: 'https://travelista1.files.wordpress.com/2012/02/img_24311.jpg'
    },
    {
      key: 2,
      title: 'Subway surfers ',
      description: 'Subway surfers - Trailer HD (download game app for mobile)',
      image_url: 'https://i.ytimg.com/vi/nvsGSOMoeSA/hqdefault.jpg'
    },
    {
      key: 1, title: 'METAL SLUG ATTACK',
      description: 'Lorem ipsum dolor sit ame ut labore',
      image_url: 'https://image.rexdl.com/android/game/metal-slug-attack.jpg'
    },
    
    {
      key: 1, title: 'Albert Einstein',
      description: 'Lorem ipsum dolor sit amet, consectetur e',
      image_url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2015/04/1-Dont-push-it.jpg'
    },
    {
      key: 2,
      title: 'AP McCoy',
      description: 'Lorem ipsum dolor sior incididunt ut labore',
      image_url: 'https://slotcatalog.com/userfiles/image/games/Playtech/10886/AP-McCoy-Sporting-Legends-2.jpg'
    },
    {
      key: 1, title: 'Trvia Crack 2',
      description: 'Lorem ipsum dolor sit ame',
      image_url: 'https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/dfgkfivjrhcksyymh9vw.jpg'
    },
    {
      key: 2,
      title: 'Legendary : Game of Heroes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
      image_url: 'https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2018/03/DC-Unchained-Mobile-Game-by-FourThirtyThree-Inc.-image-1.jpg'
    },
    {
      key: 1, title: 'Pocket Legends',
      description: 'Lorem eiusmod tempor incididunt ut labore',
      image_url: 'https://mobimg.b-cdn.net/androidgame_img/pocket_legends/real/5_pocket_legends.jpg'
    },
    
    {
      key: 1, title: 'Game Board',
      description: 'AP World History Game Board ',
      image_url: 'https://travelista1.files.wordpress.com/2012/02/img_24311.jpg'
    },
    {
      key: 2,
      title: 'Subway surfers ',
      description: 'Subway surfers - Trailer HD (download game app for mobile)',
      image_url: 'https://i.ytimg.com/vi/nvsGSOMoeSA/hqdefault.jpg'
    },
    {
      key: 1, title: 'METAL SLUG ATTACK',
      description: 'Lorem ipsum dolor sit ame ut labore',
      image_url: 'https://image.rexdl.com/android/game/metal-slug-attack.jpg'
    },
    
    {
      key: 1, title: 'Albert Einstein',
      description: 'Lorem ipsum dolor sit amet, consectetur e',
      image_url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2015/04/1-Dont-push-it.jpg'
    },
    {
      key: 2,
      title: 'AP McCoy',
      description: 'Lorem ipsum dolor sior incididunt ut labore',
      image_url: 'https://slotcatalog.com/userfiles/image/games/Playtech/10886/AP-McCoy-Sporting-Legends-2.jpg'
    }
  ]
}


  render() {
    return (
      <View style={styles.container}>
        <CustomListview
          itemList={this.getData()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
