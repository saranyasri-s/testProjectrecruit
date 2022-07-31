import React from "react";
import classes from "./Candidates.module.scss";
import { GoLocation } from "react-icons/go";
import { RiHotelLine } from "react-icons/ri";
import { IoMdSchool } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { AiTwotoneStar } from "react-icons/ai";
function Candidates() {
  return (
    <div className={classes.card}>
      <header className={classes.cardHeader}>
        <div className={classes.headerRight}>
          <div className={classes.img}></div>
          <div className={classes.nameAndExp}>
            <h3>Hellen k john</h3>
            <p>7 years fulltime experience</p>
          </div>
        </div>
        <button>View Resume</button>
      </header>
      <main className={classes.cardMain}>
        <div>
          <span>
            <GoLocation></GoLocation>
          </span>
          <p>Mumbai</p>
        </div>
        <div>
          <span>
            <RiHotelLine></RiHotelLine>
          </span>
          <p>Amazon(currently working)</p>
        </div>
        <div>
          <span>
            <IoMdSchool></IoMdSchool>
          </span>
          <p>Mumbai university</p>
        </div>
        <div>
          <span>
            <GiMoneyStack></GiMoneyStack>
          </span>
          <p>55L per year(70 L per year expected)</p>
        </div>
        <div>
          <div className={classes.Reviews}>
            <h3>Reviews</h3>
            <div>
              <p>
                <span
                  style={{ color: "orange", padding: "3px", paddingLeft: 0 }}
                >
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                </span>
                Thank you for putting in the extra effort during this busy time.
                The client truly appreciates it and your positive attitude has
                helped us all stay motivated.
              </p>
              <p className={classes.reviewGiver}> Elen kevi</p>
            </div>
            <div>
              <p>
                <span
                  style={{ color: "orange", padding: "3px", paddingLeft: 0 }}
                >
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                </span>
                hank you for being prepared for our meetings. By coming to each
                meeting with thoughtful ideas, you help us improve our processes
              </p>
              <p className={classes.reviewGiver}> Elen kevi</p>
            </div>
            <div>
              <p>
                <span
                  style={{ color: "orange", padding: "3px", paddingLeft: 0 }}
                >
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                  <AiTwotoneStar></AiTwotoneStar>
                </span>
                You have been doing a great job lately. Thank you for being so
                flexible with projects and working hard to support your team
                members
              </p>
              <p className={classes.reviewGiver}> Elen kevi</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Candidates;
