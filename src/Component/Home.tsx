import React from "react";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="my_image.jpg"
                            alt=""
                        />
                    </div>
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Latest News</h1>
                        <p>
                            This website is for those who want to keep updated with the latest news and want to enhance their knowledge.
                            It will also help the students who are preparing for the exam. One research shows that 47% of Americans like to watch and read latest news.
                            In 2022 31 million people like to listen to the news.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;