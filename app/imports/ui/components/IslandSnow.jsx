import React from 'react';
import { } from 'semantic-ui-react';

import TopMenu from "../components/TopMenu";
import Image from "../components/Image";
import FullWidthImage from "../components/FullWidthImage";
import MiddleMenu from "../components/MiddleMenu";
import FooterMenu from "../components/FooterMenu";
export default class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <Image/>
          <MiddleMenu/>
          <FullWidthImage/>
        </div>
    );
  }
    }
