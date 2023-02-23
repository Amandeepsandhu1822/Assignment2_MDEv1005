import React from "react";

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="News.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">About</h1>
                        <p>
                            In Today’s era, everyone like to listen to and watch the news. This website will spread knowledge
                            and people will be updated about their areas. According to the research, it is shown that 75% of people
                            like to read the news. It has been seen that 31 million people watched the news for
                            7 hours and 5 minutes in one week.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;