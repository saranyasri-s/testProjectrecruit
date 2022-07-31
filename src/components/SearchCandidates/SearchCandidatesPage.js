import React from "react";
import classes from "./SearchCandidatesPathmodule.scss";
function SearchCandidatesPage() {
  return (
    <div>
      <h3>Choose what kind of candidates you are looking for</h3>
      <div className={classes.searchCard}>
        <div className={classes.labelInput}>
          <label>Type</label>
          <input type="text"></input>
        </div>
        <div>
          <label> Sub Type</label>
          <input type="text"></input>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchCandidatesPage;
