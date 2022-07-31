import React from "react";
import Candidates from "../SearchCandidates/Candidates";
import SearchCandidatesPage from "../SearchCandidates/SearchCandidatesPage";
import classes from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <div>
      <header className={classes.LandingPageHeader}>
        <div className={classes.headerLeftBrandName}>
          <div className={classes.companyBrandLogo}></div> <h3> RecuitEasy</h3>
        </div>
        <div className={classes.headerRightButtons}>
          <button className={classes.findJobsButton}>Register for jobs</button>
          <button className={classes.hireTalentButton}>Hire talent</button>
        </div>
      </header>
      <main>
        {/* introcard */}
        <div className={classes.landinPageIntroCard}>
          <h3>Where techies realise their true potential</h3>
          <p>
            Look beyond the obvious. Use RecruitEasy to easily get discovered by
            awesome<br></br>companies and get referred to job positions very few
            know about it
          </p>
          <div className={classes.mainIntroButtons}>
            <button className={classes.findJobsButton}>
              Register for jobs
            </button>
            <button className={classes.hireTalentButton}>Hire talent</button>
          </div>
        </div>
        {/* usual path and right path */}
        <div className={classes.paths}>
          <div className={classes.usualPath}>
            <h3>Usual path</h3>
            <div className={classes.img}></div>
          </div>
          <div className={classes.rightPath}>
            <h3>RecruitEasy</h3>
            <div className={classes.img}></div>
          </div>
        </div>
      </main>
      <div>
        <h3>Choose what kind of candidates you are looking for</h3>
        <div className={classes.searchCard}>
          <div className={classes.labelInput}>
            <label>Type</label>
            <input type="text" placeholder="Type in"></input>
          </div>
          <div className={classes.labelInput}>
            <label> Sub Type</label>
            <input type="text" placeholder="Type in"></input>
          </div>
          <div className={classes.labelInput}>
            <label> Location</label>
            <input type="text" placeholder="Type in"></input>
          </div>
        </div>
        <div>
          <button className={classes.searchButton}>
            Search for candidates
          </button>
        </div>
      </div>
      <div>
        <Candidates></Candidates>
        <Candidates></Candidates>
        <Candidates></Candidates>
        <Candidates></Candidates>
      </div>
    </div>
  );
}

export default LandingPage;
