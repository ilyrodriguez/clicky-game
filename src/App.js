import React, { Component } from "react";
import EmployeeCards from "./components/EmployeeCards";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import employee from "./employee.json";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
    state = {
      employee,
      clickedemployee: [],
      score: 0,
      highscore: 0,
      Footer
    };

    imageClick = event => {
      const currentemployee = event.target.alt;
      const employeeAlreadyClicked =
        this.state.clickedemployee.indexOf(currentemployee) > -1;
  
      if (employeeAlreadyClicked) {
        this.setState({
          employee: this.state.employee.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedemployee: [],
          score: 0,
          highscore: this.state.score,
        });
          alert("You lose. Play again?");
  
      } else {
        this.setState(
          {
            employee: this.state.employee.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedemployee: this.state.clickedemployee.concat(
              currentemployee
            ),
            score: this.state.score + 1
          },
          () => {
            if (this.state.score > 14) {
              alert("Yay! You Win!");
              this.setState({
                employee: this.state.employee.sort(function(a, b) {
                  return 0.5 - Math.random();
                }),
                currentemployee: [],
                score: 0,
              });
            }
          }
        );
      }
    };
    render() {
      return (
        <Wrapper>
          <Navbar>score= {this.state.score}  | 
            highscore= {this.state.highscore}</Navbar>

          {/* <Title>
            score={this.state.score}
            highscore={this.state.highscore}
          </Title> */}
          {this.state.employee.map(employee => (
            <EmployeeCards
              imageClick={this.imageClick}  
              id={employee.id}
              key={employee.id}
              image={employee.image}/>
          ))}

        <footer>{this.state.Footer}</footer>

        </Wrapper>

      );
    }
  }
  
  export default App;