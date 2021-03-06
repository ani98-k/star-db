import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  constructor() {
    super();
    this.state = {
      planet: {},
      loading: true,
      error: false,
    };
    
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 2500);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false, error: false});
  }

  onError = (err) => {
    this.setState({
      error: true, 
      loading: false
    });
  };

  updatePlanet = () => {
    const id=Math.floor(Math.random()*9) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error} = this.state;

    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <PlanetView planet={planet}/> : null;
    const err = error ? <ErrorIndicator/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {err}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {

  const {id, planetName, population,
    rotationPeriod, diameter} = planet;
  return(
    <React.Fragment>
    <img className="planet-image" alt="planet"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{planetName}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
}