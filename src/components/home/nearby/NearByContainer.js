/**
 * Created by Duong Le on 9/8/18.
 */

import React from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList,TouchableOpacity, AsyncStorage} from 'react-native'

import ItemCardEvent from '../ItemCardEvent'
import {backgroundColor} from '../../../constants/color';

class NearByContainer extends React.Component {

  constructor() {
    super();

    this.state={
      data:[1,2,3]
    }
  }
  componentWillMount(){
    this.fetchData();
  }
  fetchData = async () => {
  const response = await  fetch('http://192.168.1.30:3000/api/events');
  const json = await response.json();
  this.setState({data: json.data});
  console.log("data", this.state.data);
  
  }

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor}}>
        <View style={{elevation:0}}>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.data}
            renderItem={({item}) => <ItemCardEvent data={item}/>}
          />
        </View>
      </View>
    )
  }
}

export default connect(state => ({}), dispatch => ({}))(NearByContainer);
