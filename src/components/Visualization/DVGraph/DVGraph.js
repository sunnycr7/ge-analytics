import React from 'react';
import styles from './DVGraph.module.css';
// import required knockout libraries for oac
// eslint-disable-next-line
import knockout from './knockout';


class DVGraph extends React.Component {

    render() {

        // set the options for the data visualization
        // since we are filtering in the application we will want to keep ShowFilterBar false
        const options = {
            "bDisableMobileLayout": true,
            "bShowFilterBar": this.props.showFilter
        }
        
        return (
            // keep ref of the element for the event listener
            <div  ref={elem => this.dv = elem} className={styles.DVGraph} >
                {/* return visualization with passed parameters */}
                <oracle-dv 
                    project-path={this.props.path}
                    project-options={JSON.stringify(options)}
                    active-page="canvas"
                    active-tab-id={this.props.activeTab}>
                </oracle-dv>
            </div>
        );
    }
}

export default DVGraph;
