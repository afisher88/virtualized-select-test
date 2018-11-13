import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css'
import 'react-virtualized-select/styles.css'

export default class App extends Component {
  // constructor() {
  //   super();

  //   this.dataLimit = 10000;
  // }

  static async getInitialProps({ req }) {
    const res = await fetch(`http://data.nhm.ac.uk/api/action/datastore_search?resource_id=bb909597-dedf-427d-8c04-4c02b3a24db3&limit=10000`);
    const json = await res.json();

    return { data: json }
  }

  render() {
    const records = this.props.data.result.records;

    // console.log(records);

    return (
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <h1>Search Natural History Museum records</h1>
        <VirtualizedSelect
          key={records.GUID}
          labelKey='currentScientificName'
          options={records}
          matchProp='label' // react-select v1 prop
          matchPos='start' // react-select v1 prop
        />
      </div>
    )
  }
}
