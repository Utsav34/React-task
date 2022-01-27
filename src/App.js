import Router from './Router';


function Apps() {
  const aboutDetail = {
    name:"Fotis Karayannopoulos",
    eid:"f_karayannopoulops@klclawfirm.com",
    designation:"SENIOR ASSOCIATE",
    worksAs:"SUPREME COURT LAWYER",
    admittedAt:"Admitted ti Athens Bar in 1992",

  heading: "Student Login Form"
    
  }
  return (
    <>
      <Router persondata= {aboutDetail} />
    </>
  );
}

export default Apps;
