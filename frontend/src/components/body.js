import React from 'react';

class Body extends React.Component {

  render () {
    return (
      <div className="body-text-area">
        <div className="big-text">
          <span className="body-text">Consensus made easy.</span><br/>
          <span className="body-text">Thoughtfully designed so you spend less time</span><br/>
          <span className="body-text">thinking and more time doing.</span>
        </div>
        <div className="small-text">
          <p className="small-body-text-sent">WhereTo is an app dedicated to helping you and your friends decide</p>
          <p className="small-body-text-sent">on weekend plans or where to eat.</p>
          <p className="small-body-text">Gather your friends in virtual lobbies and vote on your next adventure.</p>
          <p className="small-body-text">Too indecisive? Use our randomizer feature for a near-instant decision!</p>
        </div>
      </div>
    );
  }
}

export default Body;
