import React, { Component } from 'react'
import {View, Text,StyleSheet,Platform,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {receiveEntries, addEntry} from '../actions'
import { fetchCalendarResults } from '../utils/api'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import UdaciFitnessCalendar from 'udacifitness-calendar'
import DateHeader from './DateHeader'
import MetricCard from './MetricCard'

class History extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({entries}) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({
            [timeToString()]: getDailyReminderValue()
          }))
        }
      })
      .then(() => this.setState(() => ({ready: true})))

  }

  renderItem = ({today, ...metrics}, formattedDate, key) => (
    <View style={styles.item}>
      {today
         ? <View>
            <DateHeader date={formattedDate}/>
            <Text style={styles.noDataText}>
              {today}
            </Text>
          </View>
         : <TouchableOpacity
              onPress={() => this.props.navigation.navigate(
                'EntryDetail',
                {entryId:key}
              )}
            >
               <MetricCard date={formattedDate} metrics={metrics} />
           </TouchableOpacity>
       }
    </View>
  )

  renderEmptyDate (formattedDate) {
    return(
      <View style={styles.item}>
        <DateHeader date={formattedDate}/>
        <Text style={styles.noDataText}>
           You did not log any data on this day.
        </Text>
      </View>
    )
  }



  render() {
    const { entries } = this.props

    return (
      <UdaciFitnessCalendar
        items={entries}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
      />
    )
  }
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:'white',
    borderRadius: Platform.os === 'ios' ? 16 : 2,
    padding:20,
    marginRight:10,
    marginLeft:10,
    marginTop:17,
    justifyContent:"center",
    shadowRadius:3,
    shadowOpacity:0.8
  },
  noDataText:{
    fontSize:20,
    paddingTop:20,
    paddingBottom:20
  }
})

function mapStateToProps(entries) {
  return{
    entries
  }
}

export default connect(mapStateToProps,)(History)
