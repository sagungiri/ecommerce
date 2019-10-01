import React, {Component} from 'react';
import './homepage.styles.scss';
import Directory from '../directory/directory.component';
class HomePage extends Component {
    render(){
        return(
            <div className="homepage">
                <Directory></Directory>
            </div>
        );
    }
}
export default HomePage;
