import React, { Component } from 'react';
import Header from '../../components/Header';
import ProgressBar from './components/ProgressBar';
import TileSection from './components/TileSection';
import AboutCause from './components/AboutCause';
import DonorComments from './components/DonorComments';
import ActionButton from '../../components/ActionButton';
import LinkButton from '../../components/LinkButton';
import './SingleCause.css';

export default class SingleCause extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      amountToRaise: 0,
      amountRaised: 0,
      cart: [],
      cartTotal: 0
    };
  };


  sharePage = () => {
    alert("Shared");
  }

  render() {
    console.log(this.props.match.params.id);
    return(
      <div className="SingleCause">

        {/* TODO change to the cause title */}
        <Header
         heading={`Cause #${this.props.match.params.id}`}BGimage={'jessica-castro-516921.jpg'} mainImage={'madi-robson-113926.jpg'}/>

        <ProgressBar percentRaised={24}/>

        <TileSection />

        <LinkButton href="/checkout" linkText="Donate" classname="donate-link"/>

        <div className="share-link" onClick={() => this.sharePage()}>Or Share This Page</div>

        {/* TODO pass in this data from the api */}
        <AboutCause
         title={'Adoption'}

         aboutText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '}

         usageText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}
        />

        <DonorComments />

        <ActionButton actionText="Share this page" classname="share-page" action={this.sharePage}/>

      </div>
    );
  }
}
