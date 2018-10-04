/**
 * Created by Duong Le on 9/8/18.
 */

import React from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList} from 'react-native'

import ItemCardEvent from '../ItemCardEvent'
import {backgroundColor} from '../../../constants/color';

class NearByContainer extends React.Component {

  constructor() {
    super();

    this.dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor}}>
        <View style={{elevation:0}}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.dataSource}
            renderItem={({item}) => <ItemCardEvent/>}
          />
        </View>
      </View>
    )
  }
}

export default connect(state => ({}), dispatch => ({}))(NearByContainer);
