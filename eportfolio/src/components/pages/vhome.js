import React from "react";
import hompageStyle from "./vhome.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCloudUploadAlt,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function vhome(props) {
  return (
    <div className="container-fullwidth ">
      {/**the full beach width picture  */}
      <div className={hompageStyle.home}>
        <div className={hompageStyle.landingtext}>
          <h1 className={hompageStyle.hometext}>
            Go digital with your portfolio
          </h1>
          <br></br>

          {/**the buttom  */}
          <Link to="/login">
            <div className="btn btn-success btn-lg" role="button">
              Show me how!
            </div>
          </Link>
        </div>
      </div>

      {/**the 3 Icons */}
      <div className="container-fluid text-center">
        <div className="row" style={{ marginTop: "2rem" }}>
          {/**the Upload Icon */}
          <div className="col-md">
            <a className="icon" href="#">
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                className={`${hompageStyle.homeicons}`}
              />
            </a>

            <br></br>
            <br></br>
            <div
              className="container-fluid text-center"
              style={{ width: "70%" }}
            >
              <p className={`${hompageStyle.icontext}`}>
                Upload Your Artefacts
              </p>
              <p className={`${hompageStyle.iconparagraph}`}>
                Using ePortfolio, you can upload all the details of the project
                work you've done. Images, Videos, Pdfs, everything is supported!{" "}
              </p>

              <p className={`${hompageStyle.iconparagraph}`}>
                Add accompanying text so that readers will get an idea of what
                you have been up to.
              </p>

              <p className={`${hompageStyle.iconparagraph}`}>
                In our eportfolio system, you can upload as many artifacts as
                you wish, and you can even limit artifacts to particular groups
                according to your privacy settings
              </p>
            </div>
          </div>

          {/**the get hired Icon */}
          <div className="col-md">
            <a className="icon" href="#">
              <FontAwesomeIcon
                icon={faBriefcase}
                className={`${hompageStyle.homeicons}`}
              />
            </a>
            <br></br>
            <br></br>
            <div
              className="container-fluid text-center"
              style={{ width: "70%" }}
            >
              <p className={`${hompageStyle.icontext}`}>
                Get hired by employers
              </p>
              <p className={`${hompageStyle.iconparagraph}`}>
                Actions speak louder than words. Your ePortfolio tells employers
                about what you've done and what you've achieved.
              </p>
              <p className={`${hompageStyle.iconparagraph}`}>
                Employers can use our platform to search up your artefacts. If
                they like what they see, you might even be invited for an
                interview!
              </p>

              <p className={`${hompageStyle.iconparagraph}`}>
                Our powerful natural language search helps employers find your
                profile. Anything and everything you upload will become
                searchable to employers. Start uploading today!
              </p>
            </div>
          </div>

          {/**the inviting ppl Icon */}
          <div className="col-md">
            <a className="icon" href="#">
              <FontAwesomeIcon
                icon={faPeopleArrows}
                className={`${hompageStyle.homeicons}`}
              />
            </a>
            <br></br>
            <br></br>
            <div
              className="container-fluid text-center"
              style={{ width: "70%" }}
            >
              <p className={`${hompageStyle.icontext}`}>Join the community</p>
              <p className={`${hompageStyle.iconparagraph}`}>
                Get access to your friends' portfolios and find out what they've
                been up to.
              </p>
              <p className={`${hompageStyle.iconparagraph}`}>
                Comment on their artefacts and share your thoughts.
              </p>
              <p className={`${hompageStyle.iconparagraph}`}>
                Find people with similar interests. Put together the next
                rock-star IT Project team?!
              </p>
              <p className={`${hompageStyle.iconparagraph}`}>
                What are you waiting for? Get started sharing artifacts with
                your friends by signing up for an account!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
