import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return (
            <div className="main-background">
                {/*Buttons on top left hand side*/}
                <div className="button-group">
                    <Link to="/" className="buttons-images">
                        <i class="material-icons md-dark">face</i>
                    </Link>
                    <Link to="/resume" className="buttons-images">
                        <i class="material-icons md-dark">description</i>
                    </Link>
                    <Link to="/Projects" className="buttons-images">
                        <i class="material-icons md-dark">build_circle</i>
                    </Link>
                </div>

            </div>
          );
    }
}

export default Projects
