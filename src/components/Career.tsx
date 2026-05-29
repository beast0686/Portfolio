import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>DELTTECH</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architectural revamp of oazri.com to enhance platform scalability and user experience. Built a secure checkout system by integrating the AmwalPay payment gateway. Working on the Oazri B2B Business model.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer Intern</h4>
                <h5>Kazunov 1AI Private Limited</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Improved underwriting efficiency and data accuracy by building a real-time dashboard. Standardized risk evaluation by creating a rule engine for Finance Scores. Enhanced prediction accuracy with a health scoring system combining risk metrics and sentiment analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
