import React from "react";
import DVGraph from "../Visualization/DVGraph/DVGraph";


class Seller extends React.Component {

  render() {
    return (
      <div>
        {/* container for all visualizations */}
        <div>
          <div className="ui grid new-grid">
            <div className="column sixteen wide graph-col">

              {/* data visualization for stacked bar graph */}
              <h3 className="dashboard-title">PURCHASE ORDERS</h3>
              <div className="graph-block graph-dv1">
                <DVGraph
                  path="/shared/GE/Purchase Order"
                  activeTab="1"
                  showFilter={true}
                />
              </div>

              {/* data visualization for termination reason tree graph */}
              <h3 className="dashboard-title">INVOICES</h3>
              <div className="graph-block graph-dv2">
                <DVGraph
                    path="/shared/GE/Invoice"
                    activeTab="5"
                    showFilter={false}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seller;

