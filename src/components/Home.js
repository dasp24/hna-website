import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const Home = () => {
      return (
        <div className='pageheader'>
          <div className='row'>
            <div className="col-md-6">
          <h2>Welcome To HNA Facilities</h2>
          <p>Since supplying our first trailers to ITV’s successful crime drama, Cracker in 1992, HNA has built up an extensive track record providing facilities vehicles to TV and Film throughout the UK and mainland Europe.
          </p>
          <p>
          For twenty-five years, HNA Facilities has been involved in thousands of dramas and feature film productions, providing serviced vehicle hire for on-location support.
          </p>
          <p>
          HNA operates a comprehensive range of vehicles to cater for all requirements, large or small, using experienced, friendly drivers. Our hands-on 24/7 management approach ensures your job runs smoothly every time.</p>
          </div>
          <div  className="col-md-6">
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'hnafacilities'
              }}
             className="text-right"
              options={{
                username: 'HNA Facilities',
                height: '650',
                width: '500'
              }}
            />
            </div>
            </div>
        </div>
      );
    };


export default Home;