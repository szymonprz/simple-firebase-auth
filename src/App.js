import React from 'react';
import Home from './page/Home';
import Login from './page/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/widgets/Layout';


function App() {

  return (
    <Router>
      <div className="App bg-primary">
        <section>          
          <div>            
            <Routes>
           
                <Route 
                  path="/home"
                  element={
                    <Layout>
                      < Home />
                    </Layout>
                  
                  }
                />
              <Route path="/" element={<Layout>
                  < Home />
              </Layout>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>          
          </div>
        </section>

      </div>
    </Router>
  );
}

export default App;



