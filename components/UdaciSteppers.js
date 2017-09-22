import React,{Component} from 'react'
import {View,Text,TouchableOpacity,Platform,StyleSheet} from 'react-native'
import { FontAwesome ,entypo } from '@expo/vector-icons'

export default function UdaciSteppers ({max, unit, step, value, onIncrement,onDecrement}) {
  return(
    <View style={[styles.row,{justifyContent:'space-between'}]}>
      {Platform.os === 'ios'
        ? <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={onDecrement}
              style={[styles.iosBtn, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}>
              <FontAwesome name='minus' size={30} color={'purple'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onIncrement}
              style={[styles.iosBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 0}]}>
              <FontAwesome name='plus' size={30} color={'purple'} />
            </TouchableOpacity>
          </View>

        :  <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={onDecrement} style={styles.androidBtn}>
              <FontAwesome name='minus' size={30} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onIncrement} style={styles.androidBtn}>
              <FontAwesome name='plus' size={30} color={'white'} />
            </TouchableOpacity>
          </View>}
          <View style={styles.metricCounter}>
            <Text style={{fontSize: 24, textAlign: 'center'}}>{value}</Text>
            <Text style={{fontSize: 18, color: 'gray'}}>{unit}</Text>
          </View>



    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    flex:1,
    alignItems:'center'
  },
  androidBtn: {
    margin:5,
    backgroundColor:'purple',
    padding:10,
    borderRadius:2
  },
  isoBtn: {
    backgroundColor:'white',
    borderColor:'purple',
    borderWidth:1,
    padding:5
  },
  metricCounter: {
    width:85,
    justifyContent:'center',
    alignItems:'center'
  }
})
