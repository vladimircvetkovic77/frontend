import React, {Component} from 'react';
import { Divider } from 'antd';
import AppHeader from "../components/header";


class Comments extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Divider plain style={{marginTop: '50px'}}><strong>Backend</strong></Divider>
        <p>
          Back end is developed as a small <strong>MVC</strong>. The entry point in the application is app.js (server). Routes are divided into separate files.
        </p>
        <p>
          <strong>Middlewares</strong> for CORS, json, and url encoding have been applied, so the application accepts an api call with an object in payload, as well as a query string.
          Input validation was done exclusively on the front end, not to validate the same object twice, but in production, of course, the validation would be applied to the back end as well.
        </p>
        <p>
          <strong>Error handling</strong> for asynchronous code within the back end is performed by a package that handles error in the background, so the code is cleaner because no try / catch blocks of any kind are required.
        </p>
        <p>
          The port on which the application works is defined in the <strong>config file</strong> (3001), as well as the basic parameters related to the account type (default limit).
        </p>
        <Divider plain/>
        <Divider plain><strong>Frontend</strong></Divider>
        <p>
          Redux was used at the front end, although there was essentially no need for centralized state management. The reason for the application was to cover part of the knowledge in that area.
        </p>
        <p>
          The emphasis in the work was not on the design, but on the processing of data obtained from the backend, given the fact that no design solution was submitted within the task.
          If you want to get acquainted with my abilities within the pixel perfect work on the frontend, please provide me with a separate task in that part.
        </p>
        <Divider plain/>
      </div>
    );
  }
}

export default Comments;