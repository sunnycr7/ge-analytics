import React from 'react';
import styles from './BIDashboard.module.css';


// component to display a BI dasboard from url and filter dictionary
const biDashboard = (props) => {

    // get number of columns that will be filtered
    const colNum = Object.keys(props.filters).length;
    // create starting parameters based on number of filters
    let filters = '&P0=' + colNum;
    let i = 1;
    
    // loop through filter dictionary to create parameterized string
    for (const [ key, value ] of Object.entries(props.filters)) {

        let filterNum = value.values.length;
        let filter = filterNum;
        let operator = value.operator;

        // this was just needed because DV uses 'in' instead of 'eq'
        // you might need to pass more logic with filter dictionary for the operator
        // or you can handle it in this component based on column name
        if (operator === 'in') operator = 'eq';

        // looping through the values of each column to add to url
        for (var column in value.values) {
            if (filterNum === 1){
                filter = value.values[column];
            } else {
                filter = filter + '+"' + value.values[column] + '"';
            }
        }

        // making sure no filters get added if there is none in the list
        if (filterNum === 0) filter = "";

        // adding each column's filter string to the entire string
        filters = filters + '&P' + i + '=' + operator + '&P' + (i + 1) + '="Columns"."' + key.toUpperCase() + '"&P' + (i + 2) + '=' + filter;
        
        // There are two ways to pass parameters through the URL on OBIEE, below is a non working example of how to use the second approach with col instead of the P value approach that we implemented above
        // More details can be found in this guide: http://obieeil.blogspot.com/2014/10/obiee-go-url-and-filter-parameters-old.html 
        // filters = filters + '&col' + i + '="Columns"."' + key.toUpperCase() + '"&op' + i + '=' + operator +  '"&val' + i + '=' + filter;

        // when using the P value approach each parameter needs to be grouped in 3's (ex. 1,2,3 are the first group then 4,5,6 are the next)
        // if you implement the col approach you don't have to worry about tracking this
        i = i + 3;
    }

  // create full URL from passed URL and created filter string
  const url = props.dashboardURL + filters;

  // return the iframe in a div that forces it to scale to 100% of container div
  return (
    <div className={styles.BIDashboard}>
      <iframe className={styles.Frame} src={url} title="BI Dashboard" />
    </div>
  );
};

export default biDashboard;