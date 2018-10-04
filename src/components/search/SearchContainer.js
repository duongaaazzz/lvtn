/**
 * Created by Duong Le on 9/8/18.
 */


import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import {backgroundColor, blackColor, blueColor, grayColor, greenColor} from '../../constants/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ItemSearch from './ItemSearch'

class SearchContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      dataSearch: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    }
  }

  onChangeText = (type, text) => {
    this.setState({[type]: text});
  }


  renderFilter = (filterName, filterType, styleFiller, func) => <TouchableOpacity>
    <View style={styleFiller}>
      <Text style={[styles.textStyle, {color: '#ffffff'}]}>
        {filterType + ': ' + filterName}
      </Text>
    </View>
  </TouchableOpacity>

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.searchTool}>
          <TextInput
            style={[styles.textInput, styles.textStyle, {fontSize: 16, color: grayColor}]}
            placeholder={'Search event'}
          />

          <FontAwesome
            name={'search'}
            size={27}
            color={grayColor}
            style={{marginRight: 25}}
          />

        </View>

        <View
          style={{
            height: 60,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: 5,
          }}>
          {this.renderFilter('Music', 'Type', [styles.buttonFilter, {backgroundColor: blueColor}])}
          {this.renderFilter('Nearby', 'Sort', [styles.buttonFilter, {backgroundColor: greenColor}])}
        </View>


        <ScrollView style={{borderRadius: 10}}>

          <View style={styles.bodyContent}>
            <FlatList
              data={this.state.dataSearch}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => <ItemSearch/>}
            />
          </View>
        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center'
  },
  bodyContent: {
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
    paddingBottom: 5,
    backgroundColor: '#ffff'
  },
  textInput: {
    marginLeft: 25,
    width: '80%',
  },
  searchTool: {
    marginTop: 20,
    height: 50,
    borderRadius: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  buttonFilter: {
    marginRight: 10,
    height: 40,
    width: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  textStyle: {
    fontFamily: 'SegoeUI',
    fontWeight: 'bold',
    color: blackColor
  },
})


export default connect(state => ({}), dispatch => ({}))(SearchContainer);
