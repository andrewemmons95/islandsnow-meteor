import React from 'react';
import { Image, Segment} from 'semantic-ui-react';

export default class Image extends React.Component {
  render() {
    return (
        <Segment>
          <Image src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-logo.png"  centered />

        </Segment>
    )
  }
}