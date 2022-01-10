import Router from './Router';


function App() {
  const aboutDetail = {
    name:"Fotis Karayannopoulos",
    eid:"f_karayannopoulops@klclawfirm.com",
    designation:"SENIOR ASSOCIATE",
    worksAs:"SUPREME COURT LAWYER",
    admittedAt:"Admitted ti Athens Bar in 1992"
    
  }
  return (
    <div className="App" >
      <Router persondata= {aboutDetail} />
    </div>
  );
}

export default App;
